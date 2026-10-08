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

## Paleta anterior CSS / Tailwind (substituída pela atualização visual abaixo)

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
- Galvani Studio: Founder, Jul/2026 – Momento.
- Cinco certificados AWS de 18 de Setembro, 2026, com imagens originais em `public/certificates`.
- Certificados abrem em modal nativo: foco contido, Escape, fechamento por botão e retorno ao card.
- Contatos oficiais em `src/data/contact.ts`: LinkedIn corrigido para `/in/luis-galvani`, GitHub e E-mail.
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

Correção de nitidez: imagens importadas estaticamente com dimensões originais;
previews usam object-scale-down e o modal respeita a largura nativa do documento.
Imagens são servidas sem recompressão (unoptimized). Para leitura ampliada,
os arquivos pequenos precisam ser substituídos pelo PDF ou imagem original em alta resolução.

## Atualização visual: branco, preto e cinza

A direção visual atual substitui a paleta azul anterior por branco, preto e cinzas neutros.
O Hero usa título profissional próprio, sem depender do nome do cargo do estágio.
A faixa de tecnologias exibe logos SVG locais do Devicon em escala de cinza, com
movimento contínuo para a direita, ciclo de 68 segundos, botão de pausa e pausa por hover.
A preferência por movimento reduzido exibe uma lista estática sem repetições.
As stacks nas outras seções continuam textuais. O vídeo mantém as cores originais.
Fonte dos logos: https://github.com/devicons/devicon (licença MIT em public/stack).

Validação visual da apresentação no Chrome headless em 390 × 1000 e 1440 × 1000.
ESLint e build de produção aprovados. Os ícones são SVGs locais, sem CDN em runtime.

## Retomada e validação final

As imagens de Redshift e Serverless foram substituídas por versões de
1170 × 910 px e 1170 × 917 px, respectivamente, superando a limitação
dos arquivos anteriores. Os demais certificados têm 484 × 374 px.

Na retomada, ESLint completo, TypeScript e build de produção passaram.
As capturas anteriores de mobile e desktop continuam disponíveis em /tmp.

## Refinamento da apresentação

Hero com título profissional completo e carrossel logo abaixo das competências.
Ícones de 56 px com nomes visíveis, deslocamento contínuo para a direita de
25 px/s (ciclo de 96 segundos), pausa por botão/hover e modo estático com movimento reduzido.
Branco permanece predominante; preto e cinza compõem tipografia, linhas e controles.
Entradas sutis nas seções e interações de hover respeitam movimento reduzido.

Certificados com quadros 4:3 consistentes, conteúdo integral sem recorte, cores
originais, modal responsivo e link para abrir o documento original. A padronização
é de apresentação: os pixels dos arquivos originais foram preservados, sem
afirmação de recuperação de detalhes nos certificados de 484 × 374 px.

ESLint e build de produção aprovados; Hero conferido em 390 × 1000 e 1440 × 1000.

Verificação no Chrome via DevTools: cinco documentos carregados no modal, sem
overflow horizontal em desktop/mobile; animação do carrossel em movimento,
pausa funcional e ausência de animação/repetição com movimento reduzido.
