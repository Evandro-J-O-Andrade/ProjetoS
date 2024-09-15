// Selecionar o formulário e adicionar um evento de envio
document.querySelector('form').addEventListener('submit', function(event) {
    // Evitar o comportamento padrão de recarregar a página
    event.preventDefault();

    // Capturar os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;

    // Exibir um alerta com os dados preenchidos
    alert(`Nome: ${nome}\nMensagem: ${mensagem}`);

    // Limpar o formulário após o envio
    document.getElementById('nome').value = '';
    document.getElementById('mensagem').value = '';
});
