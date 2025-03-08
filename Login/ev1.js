document.addEventListener('DOMContentLoaded', function () {
    const seta = document.querySelector('.seta i'); // Seleciona o ícone da seta
    const textoLink = document.querySelector('.link'); // Seleciona o texto do link
    const abaLogin = document.querySelector('.Aba_l'); // Seleciona a seção de login
    const abaCadastro = document.querySelector('.Aba_c'); // Seleciona a seção de cadastro

    // Observa o scroll da página
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) { // Se o usuário rolar mais de 100px para baixo
            seta.classList.remove('fa-arrow-down'); // Remove a seta para baixo
            seta.classList.add('fa-arrow-up'); // Adiciona a seta para cima
            textoLink.textContent = 'Logar-se'; // Altera o texto para "Logar-se"
        } else {
            seta.classList.remove('fa-arrow-up'); // Remove a seta para cima
            seta.classList.add('fa-arrow-down'); // Adiciona a seta para baixo
            textoLink.textContent = 'Cadastre-se'; // Altera o texto para "Cadastre-se"
        }
    });

    // Rolagem suave ao clicar na seta ou no link
    seta.addEventListener('click', function () {
        if (seta.classList.contains('fa-arrow-up')) {
            // Rola para o topo (seção de login) se a seta estiver apontando para cima
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola para o topo da página
        } else {
            // Rola para a seção de cadastro se a seta estiver apontando para baixo
            abaCadastro.scrollIntoView({ behavior: 'smooth' });
        }
    });

    textoLink.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão do link
        if (textoLink.textContent === 'Cadastre-se') {
            // Rola para a seção de cadastro
            abaCadastro.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Rola para o topo da página (seção de login)
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});