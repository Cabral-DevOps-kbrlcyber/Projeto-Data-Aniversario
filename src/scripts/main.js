AOS.init();

const dataDoEvento = new Date("Nov 13, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStempoAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStempoAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;


    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horaAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutoAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs / 1000));

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horaAteOEvento}h ${minutoAteOEvento}m ${segundosAteOEvento}s`

    if(distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
}, 1000);