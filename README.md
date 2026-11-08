# MM — Mundo Melípona

Portal editorial em português sobre abelhas nativas sem ferrão, meliponicultura, plantas e biodiversidade, com início editorial pelo Espírito Santo.

## Executar

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## Rotas principais

- `/`
- `/conheca-as-abelhas` e `/abelhas/:slug`
- `/meliponicultura` e `/meliponicultura/:slug`
- `/plantas-para-abelhas`
- `/curiosidades` e `/curiosidades/:slug`
- `/artigos/:slug`
- `/diario`, `/nosso-projeto`, `/contato`, `/privacidade`
- `/aviso-iscas`, `/admin`

O conteúdo está estruturado em `src/data/content.ts` e servido pela interface `src/services/contentService.ts`, pronta para substituição por uma API. O painel de edição não está habilitado: uma API e autenticação real são necessárias antes de expor operações administrativas.

Para gerar sitemap com URLs públicas, defina `VITE_SITE_URL=https://seu-dominio` antes de `npm run build`. O aviso com QR Code solicita a imagem ao gerador externo apenas após a geração e deve ser usado com o endereço HTTPS publicado.

A foto de Jataí na Home é de Carlos Eduardo Joos, CC BY 2.0, com crédito e licença linkados na própria página. Outras fichas de demonstração aparecem sinalizadas como pendentes de validação.


## Publicação no GitHub Pages

O fluxo automático está em `.github/workflows/deploy-pages.yml`. Ele compila o portal, gera o sitemap para o endereço do repositório e publica a pasta `dist` quando há um envio para `main` ou execução manual do workflow. O caminho base é calculado para repositórios de projeto e para sites `owner.github.io`.

No GitHub, configure `Settings → Pages → Build and deployment → Source: GitHub Actions`. Depois de conectar um repositório e enviar a branch `main`, o workflow publica o site. O catálogo usa `HashRouter` para que as páginas internas funcionem em hospedagem estática.
