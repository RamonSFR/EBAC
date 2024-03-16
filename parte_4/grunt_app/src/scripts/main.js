document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-sorteador').addEventListener('submit', (e) => {
        e.preventDefault();
        let numeroMax = document.getElementById('numero-max').value;
        numeroMax = parseInt(numeroMax);

        let numeroAleatorio = Math.floor(((Math.random() * numeroMax) + 1));

        const textoResultado = `O número sorteado foi: <span id="valor_resultado">${numeroAleatorio}</span>`;
        const resultado = document.querySelector('.resultado');
        
        resultado.innerHTML = textoResultado;
        resultado.style.display = 'block';
    })
})