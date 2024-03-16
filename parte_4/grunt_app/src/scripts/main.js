document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-sorteador').addEventListener('submit', (e) => {
        e.preventDefault();
        let numeroMax = document.getElementById('numero-max').value;
        numeroMax = parseInt(numeroMax);

        let numeroAleatorio = Math.round((Math.random() * numeroMax));

        const textoResultado = `O número sorteado foi: <span id="valor_resultado">${numeroAleatorio}</span>`;
        document.querySelector('.resultado').innerHTML = textoResultado;
    })
})