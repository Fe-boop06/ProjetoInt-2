
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
/*----------------------------------------------------------------------*/
function openEditProfileModal() {
    const modal = document.getElementById("editProfileModal");
    modal.style.display = "flex"; // Exibe o modal
}

// Função para fechar o modal
function closeEditProfileModal() {
    const modal = document.getElementById("editProfileModal");
    modal.style.display = "none"; // Esconde o modal
}

// Adiciona o evento de clique ao botão "Editar Perfil"
document.querySelector(".EditPerfil").addEventListener("click", openEditProfileModal);

// Adiciona o evento de clique ao botão de fechar (×)
document.querySelector(".close-modal").addEventListener("click", closeEditProfileModal);

// Fecha o modal se clicar fora dele
window.addEventListener("click", (event) => {
    const modal = document.getElementById("editProfileModal");
    if (event.target === modal) {
        closeEditProfileModal();
    }
});

/*---------------------------------------------------------------------------------*/

// Função para abrir o modal de comentário
function openCommentModal() {
    const modal = document.getElementById("commentModal");
    document.getElementById("commentInput").value = ""; // Sempre começa vazio
    modal.style.display = "flex"; // Exibe o modal
}

// Função para salvar o comentário
function saveComment() {
    const commentText = document.getElementById("commentInput").value; // Pega o texto do textarea
    document.querySelector(".Destaque").innerText = commentText; // Atualiza o texto no "Comentáriozinho"
    closeCommentModal(); // Fecha o modal
}

// Função para fechar o modal de comentário
function closeCommentModal() {
    const modal = document.getElementById("commentModal");
    modal.style.display = "none"; // Esconde o modal
}

// Adiciona o evento de clique ao "Comentáriozinho"
document.querySelector(".Destaque").addEventListener("click", openCommentModal);

// Adiciona o evento de clique ao botão "Salvar"
document.getElementById("saveComment").addEventListener("click", saveComment);

// Adiciona o evento de clique ao botão de fechar (×)
document.querySelectorAll(".close-modal").forEach(button => {
    button.addEventListener("click", closeCommentModal);
});

// Fecha o modal se clicar fora dele
window.addEventListener("click", (event) => {
    const modal = document.getElementById("commentModal");
    if (event.target === modal) {
        closeCommentModal();
    }
});