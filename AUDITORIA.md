# Auditoria do portfólio

| Decisão | Escopo |
| --- | --- |
| Mantido | Next.js App Router, TypeScript, metadados, projetos cadastrados, BrainSoil, trabalhos para terceiros, Sobre, palestras e galerias. |
| Descartado | Download de currículo em navegação, Hero e Contato; PDF publicado; GitHub como contato; contatos duplicados no rodapé; ícones multicoloridos, flutuação e status pulsante; rolagem Lenis e autoplay do vídeo; carregamento externo de fontes. |
| Criado / substituído | Certificados e item no menu; cadastro tipado de certificados; campo CURRENT_ROLE para novo cargo; contatos centralizados; tokens branco/preto/azul; menu responsivo; link para pular conteúdo, foco visível e controles acessíveis. |

## Achados

- CSS usava diretivas Tailwind 3, mas o PostCSS e as dependências usam Tailwind 4.
  Corrigido com `@import "tailwindcss"` e `@theme`; geração restrita a `src`.
  Referência: https://tailwindcss.com/docs/upgrade-guide
- Downloads de currículo existiam no Hero, menu desktop/mobile e Contato.
- Ícones do Hero e indicadores do BrainSoil incluíam verde, laranja e vermelho.
- Havia overflow horizontal oculto, foco do carrossel removido e alvos pequenos.
  Removido o mascaramento de overflow; adicionados quebra de texto, min-width: 0,
  espaçamentos fluidos e controles com 44px.
- Scroll Lenis mantinha um loop de requestAnimationFrame após desmontagem.
  Substituído por scroll nativo e MotionConfig com reducedMotion="user".
- Experiência continha somente projetos e formação; não há dados do novo emprego.

## Paleta CSS / Tailwind

| Variável CSS | Cor | Classe Tailwind |
| --- | --- | --- |
| --white | #FFFFFF | bg-white / text-white |
| --black | #000000 | text-black |
| --blue | #1D4ED8 | bg-blue / text-blue |
| --blue-hover | #1E40AF | hover:bg-blue-hover |
| --blue-navy | #0F172A | text-blue-navy |
| --blue-slate | #334155 | text-blue-slate |
| --blue-surface | #EFF6FF | bg-blue-surface |
| --blue-border | #BFDBFE | border-blue-border |

Sem gradientes e efeitos glow. Fotografias e vídeo são exibidos em escala de cinza;
arquivos originais foram preservados. Fontes locais do sistema eliminam downloads externos.

## Conteúdo atualizado

- Lider Computadores: Técnico de Suporte de TI (Estágio), Out/2026 – Momento.
- Galvani Studio: Founder / Desenvolvedor Full Stack & Arquiteto, Jul/2026 – Momento.
- Cinco certificados AWS de 18 de Setembro, 2026, com imagens originais em `public/certificates`.
- Certificados abrem em modal nativo: foco contido, Escape, fechamento por botão e retorno ao card.
- Contatos oficiais em `src/data/contact.ts`: LinkedIn corrigido para `/in/luis-galvani`, Vercel e E-mail.
- Header em `src/components/Header.tsx`; `Nav.tsx` mantém compatibilidade com imports antigos.
- A pasta `teste1/` é uma cópia arquivada preservada e excluída do ESLint/TypeScript do aplicativo.

## Validação

ESLint em `src`, TypeScript e build de produção aprovados com Node 20.20.2.
O build exigiu execução fora do sandbox porque o Turbopack abre uma porta local.
Não foi realizada validação visual em navegador; não se afirma conformidade WCAG completa
ou ausência de quebras em todos os dispositivos sem essa verificação.

ESLint completo (`npm run lint`), TypeScript (`tsc --noEmit`) e build final aprovados.
As imagens Redshift (160 × 124 px) e Serverless (160 × 125 px) são pequenas;
a ampliação preserva o conteúdo original e não recupera detalhes ausentes.
