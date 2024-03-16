document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-sorteador').addEventListener('submit', (e) => {
        e.preventDefault();
        let numeroMax = document.getElementById('numero-max').value;
        numeroMax = parseInt(numeroMax);

        let numeroAleatorio = Math.random() * numeroMax;
        alert(numeroAleatorio);
    })
})