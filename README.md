# João Vittor Lara

Faço sites para pequenos negócios e profissionais autônomos. Este repositório é
o meu próprio site: **[joaovittorlara.vercel.app](https://joaovittorlara.vercel.app)**

![Astro](https://img.shields.io/badge/Astro-7-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![CSS](https://img.shields.io/badge/CSS_puro-663399?style=for-the-badge&logo=css&logoColor=white)
![Lenis](https://img.shields.io/badge/Lenis-184513?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-22.12%2B-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white)

![Prévia do site: João Vittor Lara, sites para pequenos negócios](public/og.png)

## Sobre o site

Página de apresentação, agendamento online e contato pelo WhatsApp, pensados
primeiro para o celular. Sou de Curitiba e atendo online.

O site tem quatro páginas:

- **Início:** o que eu faço, os projetos, as ferramentas que uso, formação e contato.
- **Projetos:** os três projetos empilhados numa página só. Cada card para quando
  chega ao fim da tela, e o próximo sobe por cima.
- **Privacidade:** o que o formulário de contato coleta, por quanto tempo e como
  pedir exclusão.
- **404:** uma página de erro que devolve a pessoa para os projetos ou para o contato.

## Destaques técnicos

- **Fontes auto-hospedadas.** Atkinson Hyperlegible Next e JetBrains Mono são
  baixadas no build e servidas pelo próprio domínio. Nenhuma requisição para o
  Google Fonts.
- **Sem cookie e sem analytics.** Ninguém é rastreado.
- **JavaScript só onde há interação.** O resto é HTML e CSS.
- **Fundo animado só com CSS.** A chuva de luz se move por `transform`, que o
  navegador resolve sem repintar a página.
- **Pilha de projetos com `position: sticky`,** e o recuo do card de trás é uma
  animação ligada à rolagem, nativa do navegador, sem biblioteca.
- **Respeita "reduzir movimento".** Com `prefers-reduced-motion`, todo movimento
  para: chuva, rolagem suave, recuo dos cards e vídeos.
- **Vídeo sob demanda.** O vídeo de cada projeto só é baixado quando aparece na
  tela. Antes disso, a imagem otimizada ocupa o lugar.
- **SEO no build.** Título, descrição e Open Graph por página, dados
  estruturados (`Person` e `Service`), `sitemap.xml` e `robots.txt`.

## Projetos

Os três são projetos conceituais: criei como se fossem para negócios de verdade,
para mostrar como eu trabalho.

| Projeto | O que faz | Stack | Links |
|---|---|---|---|
| **Barbearia Elliot** | O cliente vê o preço de cada serviço e marca o horário sem precisar ligar. | React 19, Vite, TypeScript, Tailwind v4 | [Site](https://barbearia-elliot.vercel.app/) · [Código](https://github.com/JoaoVittorLara/barbearia-elliot) |
| **MovePrime** | Estúdio de personal training: planos com preço lado a lado e pedido de aula experimental. | HTML, CSS e JavaScript, sem dependência | [Site](https://moveprime.vercel.app/) · [Código](https://github.com/JoaoVittorLara/moveprime) |
| **Auróra Arquitetura** | Cinco páginas, portfólio de obras e pedido de orçamento que chega direto no e-mail. | Vite, TypeScript, Tailwind | [Site](https://aurora-arquitetura.vercel.app/) · [Código](https://github.com/JoaoVittorLara/aurora-arquitetura) |

## Estrutura

```text
src/
├── consts.ts            # dados que aparecem em mais de um lugar (URL, contato, formação)
├── content.config.ts    # formato de cada projeto
├── content/projetos/    # um arquivo .md por projeto
├── lib/                 # formatação de medidas e link do WhatsApp
├── layouts/Base.astro   # <head>, SEO, Open Graph, dados estruturados
├── pages/               # início, projetos, privacidade, 404 e robots.txt
├── components/          # cada parte da página em um componente
├── assets/              # imagens e vídeos, otimizados no build
└── styles/global.css    # cores, espaçamentos e tipografia
```

## Rodando localmente

Precisa de Node.js 22.12 ou mais novo.

```sh
npm install
cp .env.example .env   # e coloque a sua chave do Web3Forms no .env
npm run dev            # servidor local em http://localhost:4321
npm run build          # gera o site em ./dist
npm run preview        # abre o build localmente
```

A chave do Web3Forms é pública por desenho: ela vai para o HTML do formulário.
Fica fora do código por organização, não por segurança. A proteção é restringir
o domínio no painel do Web3Forms.

## Contato

- Site: [joaovittorlara.vercel.app](https://joaovittorlara.vercel.app)
- E-mail: [joao.laraa15@gmail.com](mailto:joao.laraa15@gmail.com)
- LinkedIn: [João Vittor](https://www.linkedin.com/in/jo%C3%A3o-vittor-7b445631b/)
- GitHub: [@JoaoVittorLara](https://github.com/JoaoVittorLara)

## Licença

Todos os direitos reservados. O código está aberto para leitura e estudo, mas o
design, os textos, as fotos e as marcas não podem ser reaproveitados sem
autorização.
