const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', (e) => {
    let formEValido = false;
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente <b>${nomeBeneficiario.value}</b> - conta <b>${numeroContaBeneficiario.value}</b>`;

    formEValido = validaNome(nomeBeneficiario.value);
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector(".success-message");
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
    } else {
        document.querySelector(".error-message").style.display = 'block';
        nomeBeneficiario.style.border = "1px solid Red";
    }
})

nomeBeneficiario.addEventListener("keyup", (e) => {
    formEValido = validaNome(e.target.value);

    if (!formEValido) {
        nomeBeneficiario.classList.add("error");
        document.querySelector('.error-message').style.display = "block";
    } else {
        nomeBeneficiario.classList.remove("error");
        document.querySelector('.error-message').style.display = "none";
    }
})