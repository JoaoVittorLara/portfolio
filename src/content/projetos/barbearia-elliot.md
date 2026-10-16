---
titulo: Barbearia Elliot
resumo: Site de barbearia em que o cliente vê o preço de cada serviço e marca o horário sem precisar ligar.
tipo: conceitual
problema: Levar o visitante ao agendamento.
destaques:
  - Preço e duração de cada serviço
  - Agendamento online com o serviço já escolhido
  - WhatsApp com a mensagem pronta para cada serviço
stack:
  - React 19
  - Vite
  - TypeScript
  - Tailwind v4
demo: https://barbearia-elliot.vercel.app/
repo: https://github.com/JoaoVittorLara/barbearia-elliot
pesoKb: 591.2
jsKb: 105.2
loadS: 0.6
desafio: >-
  A ideia original era pôr o iframe do Cal.com no fim da landing. Dois problemas
  apareceram: o cliente só descobriria o preço ao chegar na barbearia, porque o
  site não mostraria os preços nem os serviços disponíveis, o que poderia causar
  desavenças; e o iframe deixava o site lento. Depois de analisar sites e
  agregadores de barbearias reais do Paraná, virou uma lista com serviços,
  horários, preços e duração. O embed passou a carregar só depois do clique, e
  cada botão leva a um agendamento com o preço já pronto. Mantive dois caminhos,
  um botão de WhatsApp e outro de agendamento pelo Cal.com: como este projeto
  foi feito com o mesmo planejamento e a mesma pesquisa de um projeto real, os
  dois ficam no mesmo site para mostrar que eu faço tanto o atendimento pelo
  WhatsApp quanto o agendamento automatizado, sem precisar de outra página ou
  outro projeto.
screenshotAlt: >-
  Hero da Barbearia Elliot: barbearia em luz baixa, com o título Corte perfeito,
  Barba alinhada em serifada branca e amarela.
periodo: ago/set 2026
ordem: 1
---

`cal.com` aparece **0 vezes** no HTML inicial. O defer funciona.

Também tem 12 links `wa.me` com mensagem pré-preenchida por serviço, para quem
prefere resolver pelo WhatsApp em vez de abrir o agendamento.
