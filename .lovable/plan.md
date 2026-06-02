## Objetivo
Construir um portfólio de página única para **Fábio Dantas** (Code & Design/UX) replicando fielmente o layout Figma fornecido, totalmente responsivo.

## Estrutura da página (`src/routes/index.tsx`)

1. **Header**
   - Logo (imagem fornecida pelo Figma) à esquerda
   - Nav central: "CODE" · "Design / UX"
   - Bandeiras Brasil / EUA à direita (placeholder de troca de idioma, sem lógica)

2. **Seção SOBRE** (faixa azul `#275DAB`)
   - Título "SOBRE" em Agdasima azul
   - Texto "WELCOME TO MY PORTFÓLIO!" + lorem ipsum à esquerda
   - Foto com borda preta à direita (imagem do Figma)

3. **Seção "Conheça meu portfólio"**
   - Título em fonte cursiva Playwrite CU
   - Dois cartões pretos lado a lado: "Fábio Dantas CODE" e "Fábio Dantas Design"
   - (Sem páginas internas — apenas os cartões visuais como no modelo)

4. **Rodapé simples** com créditos.

## Design tokens (`src/styles.css`)
- `--background`: `#FBFAF9` (off-white)
- `--foreground`: `#10120E` (quase preto)
- `--primary`: `#275DAB` (azul Figma)
- Fontes via Google Fonts no `__root.tsx` head: **Agdasima** (display), **Advent Pro** (texto/nav), **Playwrite CU** (cursiva)

## SEO
- `head()` no index com title "Fábio Dantas — Portfólio", description, OG tags, og:image = foto do portfólio.

## Considerações técnicas
- Imagens consumidas direto das URLs do Builder.io fornecidas no HTML do Figma (sem precisar baixar).
- Layout responsivo com Tailwind (flex/grid) — abandonar `position:absolute` do Figma.
- Mobile: header colapsa, seção SOBRE empilha texto sobre foto, cartões empilhados.
- Sem backend, sem Lovable Cloud.

## Arquivos a alterar/criar
- `src/routes/index.tsx` — página completa
- `src/routes/__root.tsx` — adicionar `<link>` Google Fonts + atualizar título padrão
- `src/styles.css` — tokens de cor + utilitários de fonte