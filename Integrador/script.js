function activateTab(button) {
    // Remove a classe 'active' de todos os botões
    const buttons = document.querySelectorAll(".filter-tabs button");
    buttons.forEach((btn) => btn.classList.remove("active"));

    // Adiciona a classe 'active' ao botão selecionado
    button.classList.add("active");
}
