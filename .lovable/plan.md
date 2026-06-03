## Mudanças

### 1. Favicon
- Subir a imagem anexada para CDN: `lovable-assets create --file /mnt/user-uploads/image.png --filename favicon.png > src/assets/favicon.png.asset.json`
- Em `src/routes/__root.tsx`, dentro de `head().links`, adicionar:
  ```ts
  { rel: "icon", type: "image/png", href: favicon.url }
  { rel: "apple-touch-icon", href: favicon.url }
  ```
  (importando `favicon from "../assets/favicon.png.asset.json"`).

### 2. Botões Behance + GitHub no SiteFooter
Em `src/components/SiteFooter.tsx`, no rodapé preto (bloco final `<footer>`), adicionar ao lado direito — antes do bloco de copyright — dois botões circulares/quadrados com ícones brancos linkando para Behance e GitHub:
- Behance → `https://www.behance.net/` (placeholder até o usuário fornecer URL real)
- GitHub → `https://github.com/` (placeholder)

Layout: logo à esquerda · ícones sociais ao centro/direita · copyright à direita, mantendo flex-wrap responsivo. Ícones em SVG inline (Be + Octocat), `h-6 w-6`, hover com `text-primary`.

Como o SiteFooter é compartilhado, a mudança aparece automaticamente em Home, /code e /design-ux.

## Critério de sucesso
- Aba do navegador mostra o novo favicon "FÁBIO DANTAS".
- Footer preto em todas as páginas exibe os ícones Behance e GitHub clicáveis, ao lado do copyright.
