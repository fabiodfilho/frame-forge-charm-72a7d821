
## Problemas a resolver
1. Trocar idioma na Home não muda os textos hardcoded (seção SOBRE).
2. Não há feedback visual ao alternar idioma.
3. Footer (a partir de "contato") está duplicado em `index.tsx` e `code.tsx`, e ausente em `design-ux.tsx`. Precisa ser unificado, usando a versão de `code.tsx` como referência.

## Mudanças

### 1. `src/lib/i18n.tsx` — novas chaves PT/EN
- `about.p1`, `about.p2`, `about.p3`, `about.p4` (4 parágrafos do SOBRE)
- `project.ieccm.title` ("Projetos de IECCM" / "IECCM Projects")
- `lang.changed.pt` ("Idioma alterado para Português")
- `lang.changed.en` ("Language changed to English")

### 2. Novo componente `src/components/SiteFooter.tsx`
Extrair, a partir de `code.tsx`, o bloco que começa na seção `#contato` e vai até o `<footer>` final (CONTATO + OBRIGADO + FOOTER preto). Todos os textos via `t()`. Esse será o footer canônico.

### 3. `src/routes/index.tsx`
- Remover blocos CONTATO/OBRIGADO/FOOTER atuais.
- Importar e renderizar `<SiteFooter />` no final.
- Trocar os 4 parágrafos hardcoded da seção SOBRE por `t("about.p1..p4")`.

### 4. `src/routes/code.tsx`
- Remover blocos CONTATO/OBRIGADO/FOOTER (agora estão em `SiteFooter`).
- Renderizar `<SiteFooter />` no final.

### 5. `src/routes/design-ux.tsx`
- Renderizar `<SiteFooter />` no final da página (atualmente não tem).

### 6. `src/components/SiteHeader.tsx`
- No `onClick` das bandeiras, disparar `toast.success(...)` do `sonner` com a mensagem traduzida (`t("lang.changed.pt"|"lang.changed.en")`).

### 7. `src/routes/__root.tsx`
- Garantir `<Toaster richColors position="top-center" />` do `sonner` montado dentro do `LanguageProvider`.

## Critério de sucesso
- Trocar bandeiras traduz 100% dos textos visíveis na Home, /code e /design-ux.
- Aparece um toast confirmando a troca de idioma.
- Home, /code e /design-ux exibem exatamente o mesmo footer (contato + obrigado + rodapé preto).
