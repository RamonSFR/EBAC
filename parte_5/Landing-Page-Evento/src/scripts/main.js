AOS.init();

const dataEvento = new Date("May 12, 2024 19:00:00");
const timeStampDoEvento = dataEvento.getTime();

const contaAsHoras = setInterval(() => {
    const dataAtual = new Date();
    const timeStampAtual = dataAtual.getTime();
    const diferenca = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(diferenca / diaEmMs);
    const horasAteOEvento = Math.floor((diferenca % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((diferenca % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((diferenca % minutoEmMs) / 1000);

    const timerFinal = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
    document.getElementById("contador").innerHTML = timerFinal;
}, 1000)