function enviarFormulario(event) {

    event.preventDefault();

    const mensagem =
        document.getElementById("mensagem");

    mensagem.textContent =
        "Mensagem enviada com sucesso!";

    event.target.reset();

}