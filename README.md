# Portfólio Profissional - Luís Fernando

Portfólio desenvolvido com Next.js para apresentar experiência como desenvolvedor backend com foco em Python e machine learning.

---

## Visão Geral

Portfólio profissional moderno e responsivo, construído com tecnologias contemporâneas de desenvolvimento web. Apresenta projetos, habilidades técnicas e informações de contato de forma clara e direta.

---

## Tecnologias Utilizadas

- **Framework**: Next.js 16.0.10 com Turbopack
- **Linguagem**: TypeScript com React
- **Estilização**: CSS customizado com variáveis CSS
- **Tipografia**: Syne (display), DM Sans (body), DM Mono (mono)
- **Deploy**: Vercel
- **Gerenciador de pacotes**: npm

---

## Seções do Site

**Hero** — Apresentação principal com título, bio profissional e tecnologias principais.

**Projetos** — Portfólio de trabalhos desenvolvidos, incluindo AgroSense IoT (TCC em progress).

**Sobre** — Informações pessoais, trajetória, timeline de eventos e habilidades técnicas.

**Contato** — Forma direta de comunicação via e-mail.

---

## Como Executar Localmente

### Requisitos

- Node.js 18.x ou superior
- npm ou yarn

### Passos

1. **Clonar e acessar o repositório**
```bash
git clone <url-do-repositorio>
cd Portifolio-certo
```

2. **Instalar dependências**
```bash
npm install
```

3. **Executar em desenvolvimento**
```bash
npm run dev
```
Acesse em `http://localhost:3000`

4. **Build para produção**
```bash
npm run build
npm run start
```

---

## Estrutura do Projeto

```
src/
├── app/
│   ├── page.tsx           # Página principal
│   ├── layout.tsx         # Layout global
│   ├── globals.css        # Estilos globais
│   └── api/
│       └── chat/route.ts  # Endpoint opcional
├── components/
│   ├── Navbar.tsx         # Navegação principal
│   ├── Hero.tsx           # Seção principal
│   ├── Projects.tsx       # Projetos
│   ├── About.tsx          # Sobre
│   ├── Contact.tsx        # Contato
│   ├── Skills.tsx         # Habilidades
│   ├── Footer.tsx         # Rodapé
│   └── IntroAnimation.tsx # Animação de entrada
└── context/
    └── LanguageContext.tsx # Contexto de idioma
```

---

## Paleta de Cores

| Papel | Cor | Código |
|------|-----|--------|
| Fundo | Preto | #000000 |
| Superfície | Cinza escuro | #0D0D14 |
| Texto | Branco | #FFFFFF |
| Texto muted | Cinza claro | #AAAAB8 |
| Accent | Azul | #378ADD |
| Verde | Verde menta | #2DD4A0 |

---

## Deploy na Vercel

O projeto está pronto para deploy automático na Vercel.

### Passos

1. Conecte o repositório ao seu painel da Vercel
2. Configure variáveis de ambiente (se necessário)
3. Deploy automático a cada push para `main`

```bash
vercel deploy
```

---

## Contato

Email: [luisvfernando7@gmail.com](mailto:luisvfernando7@gmail.com)

---

## Licença

Projeto pessoal - uso exclusivamente como portfólio profissional.

1. Clone the repository:

    git clone https://github.com/paulorag/portfolio.git

2. Navigate to the project directory:

    cd portfolio

3. Install dependencies:

    npm install

    # or

    yarn install

4. Run the development server:

    npm run dev

5. Open your browser:
   Visit http://localhost:3000 to see the application running.

---

## 📂 Project Structure

    src/
    ├── app/              # App Router pages and layout
    ├── components/       # Reusable UI components
    │   ├── layout/       # Header, Footer
    │   ├── sections/     # Hero, About, Projects
    │   └── ui/           # Buttons, Scroll wrappers
    ├── context/          # React Context (Language/i18n)
    ├── lib/              # Utilities and Dictionary data
    └── public/           # Static assets (images, icons)

---

## 📫 Contact

Developed by **Paulo Gomes**.

-   **LinkedIn:** [Paulo Gomes](https://linkedin.com/in/paulorag)
-   **GitHub:** [paulorag](https://github.com/paulorag)
-   **Email:** devpaulorag@gmail.com

---

© 2025 Paulo Gomes. All rights reserved.
