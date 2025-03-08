// Função para expandir/recolher o conteúdo da matéria
function toggleMateria(id) {
    const conteudo = document.getElementById(id);
    const toggleIcon = conteudo.previousElementSibling.querySelector(".toggle-icon");

    if (conteudo.style.maxHeight) {
        conteudo.style.maxHeight = null;
        conteudo.style.padding = "0 20px";
        toggleIcon.style.transform = "rotate(0deg)";
    } else {
        conteudo.style.maxHeight = conteudo.scrollHeight + "px";
        conteudo.style.padding = "10px 20px 20px 20px";
        toggleIcon.style.transform = "rotate(180deg)";
    }
}
