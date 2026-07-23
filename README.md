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
- **Animação:** Framer Motion (scroll-linked animations) + Lenis (smooth scroll)
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
    Nav.tsx
    Hero.tsx
    BrainSoil.tsx       # projeto de TCC em destaque, com zoom-on-scroll
    Talks.tsx           # palestras, com carrossel de fotos
    Carousel.tsx
    Projects.tsx
    ClientWork.tsx
    About.tsx
    Timeline.tsx        # trajetória, com linha animada no scroll
    Contact.tsx
    Footer.tsx
    icons.tsx
  data/                  # conteúdo separado da apresentação
    theme.ts
    projects.ts
    talks.ts
    clientwork.ts
    experience.ts
  lib/
    SmoothScroll.tsx     # provider do Lenis, respeita prefers-reduced-motion
public/
  about/                 # foto da seção Sobre
  talks/                 # fotos das palestras
  assets/                # currículo em PDF, vídeo demo, previews
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
