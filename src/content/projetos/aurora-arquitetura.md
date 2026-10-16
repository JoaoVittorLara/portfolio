---
titulo: Auróra Arquitetura
resumo: Site de cinco páginas para um escritório de arquitetura, com portfólio de obras e pedido de orçamento que chega direto no e-mail.
tipo: conceitual
problema: Apresentar o escritório e receber pedidos de orçamento.
destaques:
  - "Cinco páginas: início, projetos, sobre, serviços e contato"
  - Portfólio de obras com ano, tipo e bairro
  - Pedido de orçamento que já pergunta o tipo de projeto
stack:
  - Vite
  - TypeScript
  - Tailwind
demo: https://aurora-arquitetura.vercel.app/
repo: https://github.com/JoaoVittorLara/aurora-arquitetura
pesoKb: 593.4
jsKb: 1.0
loadS: 0.5
desafio: >-
  Primeira vez montando várias páginas e integrando o Web3Forms nessa stack. Eu
  já tinha conhecimento prévio de Vite e TypeScript, então peguei o jeito rápido,
  mas as múltiplas páginas foram complexas.
screenshotAlt: >-
  Hero da Auróra Arquitetura: sala de estar clara com um cartão sobreposto onde
  se lê Espaços que contam histórias.
periodo: 3 semanas, jul 2026
duracaoSemanas: 3
ordem: 3
---

**1,0 KB de JavaScript próprio.** Junto com o Elliot, é o mais pesado dos três em
bytes, 593,4 KB, e mesmo assim carrega em 0,5 segundo. Quase todo o peso são
quatro fotos de um serviço de imagens (498 KB): uma no topo e três com
carregamento preguiçoso. Peso alto não é o mesmo que lentidão.

O formulário usa Web3Forms, então o site continua estático e sem backend.
