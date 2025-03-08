document.addEventListener('DOMContentLoaded', function () {
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

    const listasAulas = document.querySelectorAll('.lessons');
    listasAulas.forEach(lista => {
        lista.style.display = "none";
    });
});