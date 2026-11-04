import assert from 'node:assert/strict';
import fs from 'node:fs';
const pt = JSON.parse(fs.readFileSync(new URL('../messages/pt-BR.json',import.meta.url),'utf8'));
const flatten = (object, prefix='') => Object.fromEntries(Object.entries(object).flatMap(([key,value]) => typeof value==='string' ? [[prefix+key,value]] : Object.entries(flatten(value,prefix+key+'.'))));
const base = flatten(pt);
for(const locale of ['en','es']){
  const messages=flatten(JSON.parse(fs.readFileSync(new URL(`../messages/${locale}.json`,import.meta.url),'utf8')));
  assert.deepEqual(Object.keys(messages).sort(),Object.keys(base).sort(),`${locale}: message keys`);
  for(const key of Object.keys(base)){
    assert.ok(messages[key].trim(),`${locale}: empty ${key}`);
    const placeholders=value=>(value.match(/\{\w+\}/g)||[]).sort();
    assert.deepEqual(placeholders(messages[key]),placeholders(base[key]),`${locale}: interpolation ${key}`);
  }
}
for(const name of fs.readdirSync('src/components').filter(name=>name.endsWith('.tsx'))){
  const text=fs.readFileSync(`src/components/${name}`,'utf8');
  // Most components use root message keys; namespaced components have their own small dictionaries.
  const namespace=text.match(/useTranslations\('([^']+)'\)/)?.[1];
  for(const match of text.matchAll(/\bt\('([^']+)'/g)) assert.ok(base[(namespace ? namespace+'.' : '')+match[1]],`${name}: missing ${match[1]}`);
}
console.log(`Content checks passed: ${Object.keys(base).length} messages in three locales, matching interpolation and static UI keys.`);
// The original Portuguese remains authoritative for every translated data field.
const registrySource=fs.readFileSync('src/i18n/content-keys.ts','utf8');
const registry=JSON.parse(registrySource.slice(registrySource.indexOf(' = ')+3));
for(const [original,key] of Object.entries(registry))assert.equal(base[key],original,`Original content drift: ${key}`);
console.log(`Original content verified: ${Object.keys(registry).length} explicit data translations.`);
