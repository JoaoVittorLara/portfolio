/* =============================================
   PORTFÓLIO — João Vittor Lara
   script.js — JavaScript puro (vanilla JS)
   Nenhuma biblioteca usada aqui!

   Funções implementadas:
   1. toggleTheme()           — alterna tema claro/escuro
   2. toggleMenu()            — abre/fecha o menu mobile
   3. validateForm(event)     — valida o formulário de contato
   4. highlightActiveSection()— destaca o link do menu da seção visível
   ============================================= */


/* =============================================
   1. TOGGLE THEME — TEMA CLARO / ESCURO
   Adiciona ou remove a classe "dark-mode" no body.
   Salva a preferência no localStorage para que,
   na próxima vez que o usuário abrir a página,
   o tema preferido já esteja ativo.
   ============================================= */
function toggleTheme() {
    var body = document.body;
    var btnTema = document.getElementById('btnTema');

    /* Alterna a classe dark-mode no body */
    body.classList.toggle('dark-mode');

    /* Verifica se agora está no modo escuro e atualiza o ícone e o localStorage */
    if (body.classList.contains('dark-mode')) {
        btnTema.textContent = '☀️';
        localStorage.setItem('tema', 'escuro');
    } else {
        btnTema.textContent = '🌙';
        localStorage.setItem('tema', 'claro');
    }
}

/* Carrega o tema salvo quando a página abre — assim o usuário não
   perde a preferência ao recarregar */
function carregarTemaSalvo() {
    var temaSalvo = localStorage.getItem('tema');
    var btnTema = document.getElementById('btnTema');

    if (temaSalvo === 'escuro') {
        document.body.classList.add('dark-mode');
        btnTema.textContent = '☀️';
    }
}


/* =============================================
   2. TOGGLE MENU — MENU HAMBURGUER MOBILE
   Abre e fecha o menu de navegação no mobile.
   Fecha automaticamente quando o usuário clica
   em qualquer link do menu.
   ============================================= */
function toggleMenu() {
    var navLista = document.getElementById('navLista');
    var btnHamburguer = document.getElementById('btnHamburguer');

    /* Alterna as classes de aberto/fechado */
    navLista.classList.toggle('menu-aberto');
    btnHamburguer.classList.toggle('aberto');
}

/* Fecha o menu quando clica em qualquer link — sem isso
   o menu ficava aberto na versão mobile e ficava feio */
function fecharMenuAoClicar() {
    var links = document.querySelectorAll('.nav__link');
    var navLista = document.getElementById('navLista');
    var btnHamburguer = document.getElementById('btnHamburguer');

    links.forEach(function(link) {
        link.addEventListener('click', function() {
            navLista.classList.remove('menu-aberto');
            btnHamburguer.classList.remove('aberto');
        });
    });
}


/* =============================================
   3. VALIDATE FORM — VALIDAÇÃO DO FORMULÁRIO
   Impede o envio padrão do formulário (que
   recarregaria a página) e faz a validação
   de cada campo manualmente.

   Regras de validação:
   - Nome: não pode estar vazio
   - Email: deve ter formato válido (regex básica)
   - Mensagem: não pode estar vazia

   Feedback visual:
   - Borda vermelha + texto de erro no campo falho
   - Mensagem de sucesso verde quando tudo ok
   ============================================= */
function validateForm(event) {
    /* Impede o comportamento padrão de recarregar a página */
    event.preventDefault();

    /* Pega os valores dos campos */
    var nome     = document.getElementById('nome').value.trim();
    var email    = document.getElementById('email').value.trim();
    var mensagem = document.getElementById('mensagem').value.trim();

    /* Variável para controlar se o formulário é válido */
    var valido = true;

    /* Limpa os erros anteriores antes de validar de novo */
    limparErros();

    /* Valida o nome — só verifica se está vazio */
    if (nome === '') {
        mostrarErro('nome', 'erroNome', 'Por favor, informe seu nome.');
        valido = false;
    }

    /* Valida o email — regex básica para checar formato usuario@dominio.com
       Aprendi que a regex /^[^\s@]+@[^\s@]+\.[^\s@]+$/ funciona bem para a maioria dos casos */
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        mostrarErro('email', 'erroEmail', 'Por favor, informe seu e-mail.');
        valido = false;
    } else if (!regexEmail.test(email)) {
        mostrarErro('email', 'erroEmail', 'Informe um e-mail válido (ex: nome@dominio.com).');
        valido = false;
    }

    /* Valida a mensagem — só verifica se está vazia */
    if (mensagem === '') {
        mostrarErro('mensagem', 'erroMensagem', 'Por favor, escreva sua mensagem.');
        valido = false;
    }

    /* Se todos os campos passaram na validação, simula o envio */
    if (valido) {
        simularEnvio();
    }
}

/* Mostra a mensagem de erro de um campo específico */
function mostrarErro(idCampo, idErro, mensagem) {
    var campo = document.getElementById(idCampo);
    var spanErro = document.getElementById(idErro);

    campo.classList.add('campo--invalido');
    spanErro.textContent = mensagem;
}

/* Remove todos os erros — chamado antes de validar de novo */
function limparErros() {
    var inputs = document.querySelectorAll('.campo__input');
    inputs.forEach(function(input) {
        input.classList.remove('campo--invalido');
    });

    document.getElementById('erroNome').textContent = '';
    document.getElementById('erroEmail').textContent = '';
    document.getElementById('erroMensagem').textContent = '';

    /* Esconde a mensagem de sucesso também */
    document.getElementById('formSucesso').classList.remove('visivel');
}

/* Simula o envio: limpa os campos e mostra a mensagem de confirmação */
function simularEnvio() {
    /* Limpa os campos do formulário */
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';

    /* Mostra a mensagem de sucesso (não uso alert() — aprendi que é melhor
       usar um elemento na página, fica mais profissional) */
    var divSucesso = document.getElementById('formSucesso');
    divSucesso.classList.add('visivel');

    /* Sobe a tela até a mensagem de sucesso */
    divSucesso.scrollIntoView({ behavior: 'smooth', block: 'center' });
}


/* =============================================
   4. HIGHLIGHT ACTIVE SECTION — MENU ATIVO
   Ao rolar a página, verifica qual seção está
   visível e adiciona a classe "ativo" no link
   correspondente no menu de navegação.

   Uso getBoundingClientRect() para saber a posição
   de cada seção em relação à tela — aprendi isso
   na aula de JavaScript do DOM
   ============================================= */
function highlightActiveSection() {
    /* IDs das seções que existem no portfólio */
    var secoes = ['sobre', 'formacao', 'portfolio', 'contato'];

    /* Altura do header fixo — preciso descontar isso para não errar
       a posição (o header cobre 64px do topo) */
    var alturaHeader = 80;

    var secaoAtual = '';

    /* Percorre cada seção e verifica qual está visível */
    secoes.forEach(function(id) {
        var secao = document.getElementById(id);
        if (secao) {
            var rect = secao.getBoundingClientRect();
            /* Se o topo da seção já passou pelo ponto de referência, ela é a ativa */
            if (rect.top <= alturaHeader) {
                secaoAtual = id;
            }
        }
    });

    /* Atualiza as classes "ativo" nos links do menu */
    var links = document.querySelectorAll('.nav__link');
    links.forEach(function(link) {
        link.classList.remove('ativo');
        /* Compara o atributo data-secao do link com a seção atual */
        if (link.getAttribute('data-secao') === secaoAtual) {
            link.classList.add('ativo');
        }
    });
}


/* =============================================
   INICIALIZAÇÃO
   Tudo que roda quando a página termina de carregar
   ============================================= */
document.addEventListener('DOMContentLoaded', function() {

    /* Carrega o tema salvo no localStorage (se houver) */
    carregarTemaSalvo();

    /* Configura o fechamento automático do menu mobile ao clicar nos links */
    fecharMenuAoClicar();

    /* Remove o erro de um campo quando o usuário começa a digitar nele —
       melhora muito a experiência: o erro some assim que a pessoa corrige */
    var inputs = document.querySelectorAll('.campo__input');
    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            this.classList.remove('campo--invalido');
            /* Limpa a mensagem de erro correspondente ao campo */
            var idErro = 'erro' + this.id.charAt(0).toUpperCase() + this.id.slice(1);
            var spanErro = document.getElementById(idErro);
            if (spanErro) {
                spanErro.textContent = '';
            }
        });
    });

});

/* Listener de scroll — roda a função de highlight a cada rolagem */
window.addEventListener('scroll', function() {
    highlightActiveSection();
});
