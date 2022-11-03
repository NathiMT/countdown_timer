const dataFinal = new Date("August 01, 2023 00:00:00").getTime();

const timer = () =>  {
    const tempoAtual = new Date().getTime();
    let diferenca = dataFinal - tempoAtual;

    let dias = Math.floor(diferenca/(1000*60*60*24));
    let horas = Math.floor(diferenca%(1000*60*60*24)/(1000*60*60));
    let minutos = Math.floor(diferenca%(1000*60*60)/(1000*60));
    let segundos = Math.floor(diferenca%(1000*60)/1000);

    dias <= 9 ? dias = `0${dias}` : dias;
    horas <= 9 ? horas = `0${horas}` : horas;
    minutos <= 9 ? minutos = `0${minutos}` : minutos;
    segundos <= 9 ? segundos = `0${segundos}` : segundos;

    document.querySelector(".days").textContent = dias;
    document.querySelector(".hours").textContent = horas;
    document.querySelector(".minutes").textContent = minutos;
    document.querySelector(".seconds").textContent = segundos;
}

timer();
setInterval(timer, 1000);
