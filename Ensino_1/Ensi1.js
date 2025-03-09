document.addEventListener('DOMContentLoaded', function () {
    const accessBtn = document.querySelector('.access-btn');
    const tituloPrincipal = document.querySelector('.level-container');
    const conteudoPrincipal = document.querySelector('.content');
    const novaPagina = document.getElementById('nova-pagina');
    const backBtn = document.querySelector('.back-btn');

    // Função para alternar para a nova página
    if (accessBtn && tituloPrincipal && conteudoPrincipal && novaPagina) {
        accessBtn.addEventListener('click', function () {
            // Oculta a página principal
            tituloPrincipal.classList.add('hidden');
            conteudoPrincipal.classList.add('hidden');
            // Exibe a nova página
            novaPagina.classList.remove('hidden');
            novaPagina.classList.add('visible');
        });
    }

    // Função para voltar à página principal
    if (backBtn && tituloPrincipal && conteudoPrincipal && novaPagina) {
        backBtn.addEventListener('click', function () {
            // Oculta a nova página
            novaPagina.classList.add('hidden');
            novaPagina.classList.remove('visible');
            // Exibe a página principal
            tituloPrincipal.classList.remove('hidden');
            conteudoPrincipal.classList.remove('hidden');
        });
    }

    // Função para expandir/recolher os módulos
    const botoesMateria = document.querySelectorAll('.sub-title');
    botoesMateria.forEach(botao => {
        botao.addEventListener('click', function () {
            const listaAulas = botao.nextElementSibling;
            if (listaAulas.style.display === "none" || listaAulas.style.display === "") {
                listaAulas.style.display = "block";
                botao.classList.add('open');
            } else {
                listaAulas.style.display = "none";
                botao.classList.remove('open');
            }
        });
    });

    // Oculta todas as listas de aulas inicialmente
    const listasAulas = document.querySelectorAll('.lessons');
    listasAulas.forEach(lista => {
        lista.style.display = "none";
    });
});