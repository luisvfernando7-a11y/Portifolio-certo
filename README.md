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
