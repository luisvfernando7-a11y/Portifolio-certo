# Luis Galvani — Portfólio

Portfólio pessoal desenvolvido com Next.js, TypeScript e Tailwind CSS. Apresenta trajetória
acadêmica, projetos, palestras técnicas e experiência prática em desenvolvimento backend e
engenharia de dados.

🔗 **Site no ar:** [luisgalvani.vercel.app](https://luisgalvani.vercel.app)

---

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS + estilos inline com tokens centralizados (`src/data/theme.ts`)
- **Animação:** Framer Motion com preferência de movimento reduzido + scroll nativo
- **Deploy:** Vercel

---

## Estrutura do projeto

```
src/
  app/
    page.tsx          # orquestra a ordem das seções
    layout.tsx
    globals.css        # design tokens (cores, tipografia, spacing)
  components/           # um componente por seção da página
    Header.tsx         # navegação e contatos rápidos
    Nav.tsx            # alias de compatibilidade
    Hero.tsx
    BrainSoil.tsx       # projeto de TCC em destaque, com vídeo controlado
    Talks.tsx           # palestras, com carrossel de fotos
    Carousel.tsx
    Projects.tsx
    ClientWork.tsx
    About.tsx
    Timeline.tsx        # trajetória, com linha animada no scroll
    Certificates.tsx   # cards de certificados AWS e modal acessível
    Contact.tsx
    Footer.tsx
    icons.tsx
  data/                  # conteúdo separado da apresentação
    theme.ts
    projects.ts
    talks.ts
    clientwork.ts
    experience.ts       # cargos atuais e trajetória acadêmica
    certificates.ts     # certificados
    contact.ts          # LinkedIn, GitHub e E-mail
  lib/
    SmoothScroll.tsx     # provider do Framer Motion, respeita prefers-reduced-motion
public/
  about/                 # foto da seção Sobre
  talks/                 # fotos das palestras
  assets/                # vídeo demo, previews
```

Cada seção é um componente isolado e o conteúdo (textos, links, dados de projetos e palestras)
fica em `src/data/`, separado da apresentação. Para atualizar informações, normalmente basta
editar os arquivos em `data/` — não é necessário mexer nos componentes.

---

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de produção
npm run lint    # checagem de lint
```

---

## Variáveis de ambiente

Nenhuma variável de ambiente é necessária para rodar o projeto atualmente. Se `.env.local`
existir localmente, ele **não é versionado** (está no `.gitignore`).

---

## Deploy

Deploy contínuo via Vercel: todo push para a branch principal gera um novo deploy de produção
automaticamente.

---

## Licença

Código aberto para fins de estudo e portfólio. Sinta-se à vontade para se inspirar na
estrutura — pediria apenas que não copiasse o conteúdo textual/pessoal diretamente.

## Refatoração e auditoria

Veja [AUDITORIA.md](./AUDITORIA.md) para decisões, paleta e dados pendentes.
Requer Node.js 20.9 ou superior. Os tokens e a configuração do Tailwind 4 estão em
`src/app/globals.css`; `src/data/theme.ts` fornece aliases para os componentes existentes.

## Apresentação e faixa de tecnologias

Visual branco, preto e cinza. A apresentação separa o título profissional das tecnologias.
`StackCarousel.tsx` exibe SVGs locais em loop para a direita, com pausa e movimento reduzido.
As stacks nas outras seções permanecem textuais; o vídeo mantém as cores originais.
Logos: [Devicon](https://github.com/devicons/devicon), licença MIT em `public/stack/LICENSE`.

## Idiomas e SEO

A homepage usa componentes compartilhados e `next-intl`: português brasileiro em `/`, inglês
em `/en` e espanhol em `/es`. Não há detecção obrigatória do idioma do navegador nem cookie
para seleção de idioma. As âncoras existentes permanecem iguais nas três versões.

- `messages/{pt-BR,en,es}.json`: interface, metadados e traduções do conteúdo.
- `src/i18n/routing.ts`: idiomas, caminhos e origem pública canônica.
- `src/i18n/content-keys.ts`: associação explícita dos textos originais dos dados às mensagens.
  Ao editar uma descrição ou adicionar conteúdo traduzível, atualizar essa associação e os três
  dicionários. Nomes próprios, marcas e títulos oficiais de certificados permanecem originais.
- `src/app/(pt)/` e `src/app/[locale]/`: rotas explícitas, sem rewrite ou proxy.
  `LocaleDocument` e `Portfolio` compartilham documento, componentes e conteúdo.
- `src/components/StructuredData.tsx`: Person, WebSite e ProfilePage baseados no conteúdo público.
- `public/social-card.svg`: fonte editável da imagem social `social-card.png` (1200 × 630).

`/intro.html` redireciona permanentemente para `/`: é uma apresentação antiga, sem referências
no aplicativo ativo. O arquivo original foi preservado. O sitemap contém somente as três URLs
canônicas; datas de alteração não são inventadas a cada build.

Os novos projetos Helena Morelin e Raccolto Galvani usam capturas reais dos sites publicados.
As stacks indicam HTML, CSS e JavaScript. WordPress e AWS são contexto de estudo do Raccolto,
não infraestrutura comprovada da demonstração pública.

## Verificação da implementação

Use uma versão Node compatível com o projeto (os testes desta implementação usam Node 20.20.2).

```bash
npm run lint
npm run typecheck
npm run test:content
npm run build
npm run start -- --port 3100
# Em outro terminal, com o servidor de produção acima em execução:
npm run test:browser
```

Os testes usam Playwright e axe. Por padrão, utilizam `/usr/bin/google-chrome` se disponível;
caso contrário, requerem o Chromium do Playwright. É possível informar `CHROME_BIN` e
`TEST_ORIGIN`. `TEST_REPORT=/tmp/portfolio-check.json` grava um relatório opcional e
`TEST_SCREENSHOTS=/tmp/portfolio-shots` habilita capturas. A fixture pública do BrainSoil
permite verificar que texto, vídeo e links em português foram preservados.

Em ambientes restritos que bloqueiam a porta interna do Turbopack, valide o build com
`npm run build -- --webpack`. O servidor local e o Chrome precisam de permissão para abrir
portas e processos; falhas `EPERM` nessa etapa são restrições do ambiente.

O teste automatizado de acessibilidade não certifica conformidade WCAG integral. Legendas
ou alternativas do vídeo original ainda dependem de revisão manual do conteúdo audiovisual.
Nenhum analytics, formulário ou mecanismo de rastreamento foi adicionado.
