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

/*-------------------------------------------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    // Mapeamento das páginas (ordem de navegação)
    const pages = [
        "../Inicio/index-1.html", // Página inicial
        "../Materiais/mate.html", // Materiais
        "../Ensino_1/ensin_1.html", // Ensino 1
        "../Ensino2/ensino2.html" // Ensino 2
    ];

    // Função para encontrar o índice da página atual no array
    function getCurrentPageIndex() {
        const currentPage = window.location.pathname.split("/").pop(); // Obtém o nome da página atual
        return pages.findIndex(page => page.includes(currentPage)); // Retorna o índice da página atual
    }

    // Função para navegar para a próxima página
    function goToNextPage() {
        const currentIndex = getCurrentPageIndex();
        if (currentIndex < pages.length - 1) { // Verifica se não está na última página
            window.location.href = pages[currentIndex + 1]; // Redireciona para a próxima página
        }
    }

    // Função para navegar para a página anterior
    function goToPreviousPage() {
        const currentIndex = getCurrentPageIndex();
        if (currentIndex > 0) { // Verifica se não está na primeira página
            window.location.href = pages[currentIndex - 1]; // Redireciona para a página anterior
        }
    }

    // Função para marcar o ícone ativo
    function loadActiveIcon() {
        const currentPage = window.location.pathname.split("/").pop(); // Obtém o nome da página atual
        const activeIconHref = pages.find(page => page.includes(currentPage)); // Encontra o caminho correspondente

        if (activeIconHref) {
            // Remove a classe "active" de todos os ícones
            document.querySelectorAll('.menu div a, .side-menu a').forEach(icon => {
                icon.classList.remove('active');
            });

            // Adiciona a classe "active" ao ícone correspondente
            const activeMenuIcon = document.querySelector(`.menu div a[href="${activeIconHref}"]`);
            const activeSideMenuIcon = document.querySelector(`.side-menu a[href="${activeIconHref}"]`);

            if (activeMenuIcon) activeMenuIcon.classList.add('active');
            if (activeSideMenuIcon) activeSideMenuIcon.classList.add('active');

            // Armazena o estado no localStorage
            localStorage.setItem('activeIcon', activeIconHref);
        }
    }

    // Captura o evento de teclado
    document.addEventListener("keydown", function (event) {
        switch (event.key) {
            case "ArrowRight": // Tecla de seta para a direita
                goToNextPage();
                break;
            case "ArrowLeft": // Tecla de seta para a esquerda
                goToPreviousPage();
                break;
        }
    });

    // Carrega o ícone ativo ao iniciar a página
    loadActiveIcon();
});


(function () {
    // Verifica se os elementos necessários estão presentes na página
    const perfilImg = document.querySelector('.perfil img');
    const perfilLink = document.querySelector('.perfil a');
    const perfilSideLink = document.querySelector('.side-menu a[href="../Perfil/perfil_index.html"]');
    const menuIcons = document.querySelectorAll('.menu div a');
    const sideMenuIcons = document.querySelectorAll('.side-menu a');
    const hamburger = document.getElementById('hamburger');
    const sideMenu = document.getElementById('side-menu');

    // Se algum dos elementos essenciais não existir, o script não será executado
    if (!perfilImg || !perfilLink || !perfilSideLink || !menuIcons.length || !sideMenuIcons.length || !hamburger || !sideMenu) {
        console.error("Elementos necessários não encontrados. O script não será executado.");
        return;
    }

    // Função para desmarcar todos os ícones
    function desmarcarTodosIcones() {
        menuIcons.forEach(icon => icon.classList.remove('active'));
        sideMenuIcons.forEach(icon => icon.classList.remove('active'));
    }

    // Função para marcar o ícone ativo
    function setActiveIcon(clickedIcon) {
        desmarcarTodosIcones();
        clickedIcon.classList.add('active');

        const href = clickedIcon.getAttribute('href');
        const correspondingIcon = document.querySelector(`.menu div a[href="${href}"], .side-menu a[href="${href}"]`);
        if (correspondingIcon) {
            correspondingIcon.classList.add('active');
        }

        localStorage.setItem('activeIcon', href);

        if (clickedIcon.closest('.side-menu')) {
            const menuPrincipalIcon = document.querySelector(`.menu div a[href="${href}"]`);
            if (menuPrincipalIcon) {
                menuPrincipalIcon.classList.add('active');
            }
        }
    }

    // Função para marcar o perfil como ativo
    function setPerfilActive() {
        desmarcarTodosIcones();
        perfilLink.classList.add('active');
        perfilSideLink.classList.add('active');
        localStorage.setItem('activeIcon', 'perfil_index.html');
    }

    // Função para carregar o ícone ativo ao iniciar a página
    function loadActiveIcon() {
        const activeIconHref = localStorage.getItem('activeIcon');
        if (activeIconHref) {
            if (activeIconHref === 'perfil_index.html') {
                perfilLink.classList.add('active');
                perfilSideLink.classList.add('active');
            } else {
                const activeMenuIcon = document.querySelector(`.menu div a[href="${activeIconHref}"]`);
                const activeSideMenuIcon = document.querySelector(`.side-menu a[href="${activeIconHref}"]`);

                if (activeMenuIcon) activeMenuIcon.classList.add('active');
                if (activeSideMenuIcon) activeSideMenuIcon.classList.add('active');
            }
        }
    }

    // Evento de clique na imagem do perfil
    perfilImg.addEventListener('click', () => {
        setPerfilActive();
        perfilImg.classList.toggle('perfil-active');
    });

    // Evento de clique no link do perfil no side-menu
    perfilSideLink.addEventListener('click', () => {
        setPerfilActive();
        perfilImg.classList.toggle('perfil-active');
    });

    // Eventos de clique nos ícones do menu principal
    menuIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            setActiveIcon(icon);
            perfilImg.classList.remove('perfil-active');
        });
    });

    // Eventos de clique nos ícones do menu lateral
    sideMenuIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            setActiveIcon(icon);
            perfilImg.classList.remove('perfil-active');
        });
    });

    // Carrega o ícone ativo ao iniciar a página
    loadActiveIcon();

    // Lógica para o menu hambúrguer
    hamburger.addEventListener('click', () => {
        sideMenu.classList.add('active');
        hamburger.style.visibility = 'hidden';
    });

    document.addEventListener('click', (event) => {
        if (!sideMenu.contains(event.target) && !hamburger.contains(event.target)) {
            sideMenu.classList.remove('active');
            hamburger.style.visibility = 'visible';
        }
    });

    sideMenu.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    
})();


document.addEventListener("DOMContentLoaded", function () {
    // Simulação de dados (futuramente podem vir do banco de dados)
    const metricas = [
        { disciplina: "Geral", progresso: 32 },
        { disciplina: "Matemática Básica", progresso: 100 },
        { disciplina: "Frações", progresso: 50 },
        { disciplina: "Equações do 1º Grau", progresso: 25 },
        { disciplina: "Funções", progresso: 10 },
        { disciplina: "Equações do 2º Grau", progresso: 5 },
        { disciplina: "Geometria Plana", progresso: 2 }
    ];

    // Obtendo o elemento onde as métricas serão exibidas
    const listaMetricas = document.getElementById("lista-metricas");

    // Criando os elementos dinamicamente
    metricas.forEach(metrica => {
        let item = document.createElement("l");
        
        // Verificando se a disciplina é "Geral" para dar destaque
        if (metrica.disciplina === "Geral") {
            item.classList.add("destaque-geral");  // Adiciona uma classe CSS para destaque
        }

        item.innerHTML = `
            <strong>${metrica.disciplina}</strong>
            <div class="progress-bar">
                <div class="progress" style="width: ${metrica.progresso}%; background-color: ${getColor(metrica.progresso)};">
                    ${metrica.progresso}%
                </div>
            </div>
        `;
        listaMetricas.appendChild(item);
    });

    // Função para definir cor com base no progresso
    function getColor(valor) {
        return "green"; // Mantenha verde como cor de progresso
    }
});

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const button = document.querySelector(".toggle-mode");

    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "Modo Claro";
        localStorage.setItem("darkMode", "enabled");
    } else {
        button.textContent = "Modo Escuro";
        localStorage.setItem("darkMode", "disabled");
    }
}

// Verifica se o usuário já ativou o modo escuro anteriormente
window.onload = function () {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enabled") {
        document.body.classList.add("dark-mode");
        document.querySelector(".toggle-mode").textContent = "Modo Claro";
    }
};