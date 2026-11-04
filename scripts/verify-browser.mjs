/* Run against `npm run start -- --port 3100`. Uses an installed Chrome or Playwright Chromium. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const scriptDir = path.dirname(fileURLToPath(import.meta.url));
import {chromium} from 'playwright';
import AxeBuilder from '@axe-core/playwright';
const origin = process.env.TEST_ORIGIN || 'http://127.0.0.1:3100';
const production = 'https://luisgalvani.vercel.app';
const normalize = text => text.replace(/\s+/g, ' ').trim();
const cases = [
  {locale:'pt-BR', route:'/', open:'Abrir menu', close:'Fechar menu', next:'Próxima palestra', photo:'Foto 1', certificate:'Ver certificado:'},
  {locale:'en', route:'/en', open:'Open menu', close:'Close menu', next:'Next talk', photo:'Photo 1', certificate:'View certificate:'},
  {locale:'es', route:'/es', open:'Abrir menú', close:'Cerrar menú', next:'Siguiente charla', photo:'Foto 1', certificate:'Ver certificado:'},
];
const messages = Object.fromEntries(cases.map(item => [item.locale, JSON.parse(fs.readFileSync(new URL(`../messages/${item.locale}.json`,import.meta.url),'utf8'))]));
const keys = (value, prefix='') => Object.entries(value).flatMap(([key, child]) => typeof child === 'string' ? [prefix+key] : keys(child, prefix+key+'.')).sort();
const report = {routes:[], accessibility:[], interactions:[], overflow:[], errors:[], brokenResources:[], pendingManual:['Video captions/audio alternatives require review of the original recording.']};
(async()=>{
  for(const item of cases) assert.deepEqual(keys(messages[item.locale]), keys(messages['pt-BR']), 'Dictionary parity');
  const executablePath = process.env.CHROME_BIN || (fs.existsSync('/usr/bin/google-chrome') ? '/usr/bin/google-chrome' : undefined);
  const browser = await chromium.launch({headless:true, executablePath});
  try {
    const context = await browser.newContext({viewport:{width:1440,height:900}});
    const page = await context.newPage();
    page.on('pageerror', error => report.errors.push(error.message));
    page.on('console', message => {if(message.type()==='error') report.errors.push(message.text());});
    page.on('response', response => {if(response.status()>=400) report.brokenResources.push({url:response.url(),status:response.status()});});
    for(const item of cases){
      const response=await page.goto(origin+item.route,{waitUntil:'networkidle'});
      assert.equal(response.status(),200,item.route);
      assert.equal(await page.locator('html').getAttribute('lang'),item.locale);
      assert.equal(await page.title(),messages[item.locale].seo.title);
      assert.equal(new URL(await page.locator('link[rel=canonical]').getAttribute('href')).href,production+item.route);
      const alternates=await page.locator('link[rel=alternate][hreflang]').evaluateAll(es=>Object.fromEntries(es.map(e=>[e.hreflang,e.href])));
      assert.deepEqual(alternates,{'pt-BR':production+'/',en:production+'/en',es:production+'/es','x-default':production+'/'});
      assert.equal(await page.locator('meta[property="og:image"]').getAttribute('content'),production+'/social-card.png');
      assert.equal(await page.locator('meta[name="twitter:card"]').getAttribute('content'),'summary_large_image');
      const data=JSON.parse(await page.locator('script[type="application/ld+json"]').textContent());
      assert.deepEqual(data['@graph'].map(node=>node['@type']),['Person','WebSite','ProfilePage']);
      assert.equal(data['@graph'][2].inLanguage,item.locale);
      assert.equal(await page.locator('h1').count(),1);
      assert.equal(await page.locator('#projetos h3').count(),5);
      assert.equal(await page.locator('#client-work h3').count(),3);
      assert.equal(await page.locator('#brainsoil h2').count(),1);
      assert.ok(await page.locator('#client-work').getByText('Helena Morelin',{exact:true}).count());
      assert.ok(await page.locator('#projetos').getByText('Raccolto Galvani',{exact:true}).count());
      const anchors=await page.locator('a[href^="#"]').evaluateAll(es=>es.map(e=>({href:e.hash,valid:!!document.getElementById(e.hash.slice(1))})));
      assert.ok(anchors.every(anchor=>anchor.valid),'All hash targets exist');
      for(const width of [320,390,768,1024,1440]){
        await page.setViewportSize({width,height:900});
        await page.evaluate(()=>window.scrollTo(0,document.body.scrollHeight));
        await page.waitForTimeout(100);
        const dimensions=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth}));
        assert.ok(dimensions.scroll<=dimensions.width,`${item.locale} ${width}px overflow`);
        report.overflow.push({locale:item.locale,...dimensions});
      }
      await page.setViewportSize({width:390,height:900});
      await page.getByRole('button',{name:item.open,exact:true}).click();
      assert.equal(await page.getByRole('button',{name:item.close,exact:true}).getAttribute('aria-expanded'),'true');
      await page.keyboard.press('Escape');
      assert.ok(await page.getByRole('button',{name:item.open,exact:true}).evaluate(e=>document.activeElement===e));
      // Keyboard navigation from the open mobile menu lands on the section, not a hidden link.
      await page.getByRole('button',{name:item.open,exact:true}).click();
      const nav=page.locator('#main-navigation');
      await nav.locator('a[href="#certificados"]').focus();await page.keyboard.press('Enter');
      await page.waitForTimeout(150);
      assert.equal(await page.evaluate(()=>document.activeElement.id),'certificados');
      const triggers=page.locator('#certificados button[aria-haspopup="dialog"]');
      for(let index=0;index<5;index++){
        await triggers.nth(index).focus();await page.keyboard.press('Enter');
        await page.waitForFunction(()=>document.querySelector('dialog').open);
        assert.ok(await page.locator('dialog').evaluate(e=>e.contains(document.activeElement)));
        // Native modal keeps keyboard focus inside.
        for(let count=0;count<4;count++)await page.keyboard.press('Tab');
        assert.ok(await page.locator('dialog').evaluate(e=>e.contains(document.activeElement)));
        await page.keyboard.press('Escape');
        assert.ok(await triggers.nth(index).evaluate(e=>document.activeElement===e));
      }
      const region=page.locator('#palestras [aria-roledescription]');
      const title=await region.locator('h3').innerText();
      const photo=region.getByRole('button',{name:item.photo,exact:true});
      const imageBefore=await region.locator('img').getAttribute('src');
      await photo.focus();await page.keyboard.press('ArrowRight');await page.waitForTimeout(650);
      assert.equal(await region.locator('h3').innerText(),title,'Inner gallery does not change talks');
      assert.notEqual(await region.locator('img').getAttribute('src'),imageBefore,'Inner gallery changes photo');
      assert.ok(await photo.evaluate(e=>document.activeElement===e),'Gallery control retains focus');
      await region.focus();await page.keyboard.press('ArrowRight');await page.waitForTimeout(650);
      assert.notEqual(await region.locator('h3').innerText(),title);
      assert.ok(await region.evaluate(e=>document.activeElement===e),'Outer carousel retains focus');
      await region.getByRole('button',{name:item.next,exact:true}).click();await page.waitForTimeout(650);
      assert.ok(await region.getByRole('button',{name:item.next,exact:true}).evaluate(e=>document.activeElement===e));
      await page.emulateMedia({reducedMotion:'reduce'});
      assert.equal(await page.locator('.stack-carousel-track').evaluate(e=>getComputedStyle(e).animationName),'none');
      assert.equal(await page.evaluate(()=>getComputedStyle(document.documentElement).scrollBehavior),'auto');
      await page.emulateMedia({reducedMotion:'no-preference'});
      const toggle=page.locator('.stack-motion-toggle');await toggle.click();
      assert.equal(await page.locator('.stack-carousel-track').evaluate(e=>getComputedStyle(e).animationPlayState),'paused');
      await toggle.click();
      for(const width of [390,1440]){
        await page.setViewportSize({width,height:900});
        const results=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();
        report.accessibility.push({locale:item.locale,width,violations:results.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)})),incomplete:results.incomplete.map(v=>v.id)});
        assert.equal(results.violations.length,0,JSON.stringify(report.accessibility.at(-1)));
      }
      if(item.locale==='pt-BR'){
        const baseline=JSON.parse(fs.readFileSync(process.env.BRAINSOIL_BASELINE || path.join(scriptDir,'fixtures/brainsoil-pt.json'),'utf8'));
        assert.equal(normalize(await page.locator('#brainsoil').innerText()),normalize(baseline.text),'Portuguese BrainSoil unchanged');
        assert.equal(await page.locator('#brainsoil video').getAttribute('src'),baseline.video);
        assert.deepEqual(await page.locator('#brainsoil a').evaluateAll(es=>es.map(e=>e.getAttribute('href'))),baseline.links);
        report.brainsoil='Portuguese visible copy, video and links match the production baseline';
      }
      // Language links keep the current section during ordinary keyboard/click navigation.
      await page.evaluate(()=>{history.replaceState(null,'','#projetos')});
      const next=cases[(cases.indexOf(item)+1)%cases.length];
      const language=page.locator('.language-switcher a').filter({hasText:next.locale==='pt-BR'?'PT':next.locale.toUpperCase()});
      await language.click();await page.waitForURL(origin+next.route+'#projetos');
      report.routes.push({locale:item.locale,status:200,projects:9,metadata:true,anchors:true});
      report.interactions.push({locale:item.locale,menu:true,certificates:5,keyboard:true,languages:true,reducedMotion:true});
    }
    // HTML still exposes visible cards when JavaScript is unavailable.
    const noJS=await browser.newContext({javaScriptEnabled:false});
    const plain=await noJS.newPage();
    for(const item of cases){
      await plain.goto(origin+item.route);
      const cards=await plain.locator('#projetos .card-hover,#client-work .card-hover').evaluateAll(es=>es.map(e=>({opacity:getComputedStyle(e).opacity,text:e.textContent})));
      assert.equal(cards.length,8);assert.ok(cards.every(card=>card.opacity==='1'&&card.text.length>0));
    }
    const request=context.request;
    const sitemap=await request.get(origin+'/sitemap.xml');assert.equal(sitemap.status(),200);
    const xml=await sitemap.text();assert.equal((xml.match(/<url>/g)||[]).length,3);
    for(const item of cases)assert.ok(xml.includes(`<loc>${production+item.route}</loc>`));
    const robots=await request.get(origin+'/robots.txt');assert.equal(robots.status(),200);assert.ok((await robots.text()).includes(production+'/sitemap.xml'));
    const redirect=await request.get(origin+'/intro.html',{maxRedirects:0});assert.equal(redirect.status(),308);assert.ok(redirect.headers().location.endsWith('/'));
    for(const route of ['/en/missing-audit-route','/missing-audit-route','/fr'])assert.equal((await request.get(origin+route)).status(),404);
    assert.equal((await request.get(origin+'/social-card.png')).status(),200);
    const headers=(await request.get(origin+'/')).headers();assert.equal(headers['x-content-type-options'],'nosniff');
    assert.equal(headers['x-frame-options'],'DENY');
    report.seo={sitemap:3,robots:true,legacyRedirect:308,notFound:404,securityHeaders:true};
    assert.deepEqual(report.errors,[]);assert.deepEqual(report.brokenResources,[]);
    if(process.env.TEST_SCREENSHOTS){
      const dir=process.env.TEST_SCREENSHOTS;fs.mkdirSync(dir,{recursive:true});
      for(const width of [390,1440]){await page.goto(origin);await page.setViewportSize({width,height:900});await page.screenshot({path:path.join(dir,`home-${width}.png`)});}
    }
    console.log(JSON.stringify(report,null,2));
    if(process.env.TEST_REPORT)fs.writeFileSync(process.env.TEST_REPORT,JSON.stringify(report,null,2)+'\n');
  } finally {await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
