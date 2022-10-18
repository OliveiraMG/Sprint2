
// ANIMAÇÃO VALORES DAS KPIs --------- TOPO DA TELA PRINCIPAL---------------------------- 


function mudarkpi() {

    //"animação" mostra e muda as metricas de temperatura e umidade, setinterval- intervalo de tempo, setimeout - executa depois de um certo tempo
    // 2000 são 2 segundos

   setInterval(() => {
            setTimeout(() => {
                tTempreal.innerHTML = `Sensor 2`
                tempreal.innerHTML = `17.1°C`
            }, 2000);
            setTimeout(() => {
                tTempreal.innerHTML = `Sensor 3`
                tempreal.innerHTML = `20.6ºC`     //"animação" que muda o valor de temperatura "em tempo real" 
            }, 4000);
            setTimeout(() => {
                tTempreal.innerHTML = `Sensor 4`
                tempreal.innerHTML = `19.2°C`
            }, 6000);
            setTimeout(() => {
                tTempreal.innerHTML = `Sensor 5`
                tempreal.innerHTML = `22.7°C`
            }, 8000);
            setTimeout(() => {
                tTempreal.innerHTML = `Sensor 6`
                tempreal.innerHTML = `22.1°C`
            }, 10000);
            setTimeout(() => {
                tTempreal.innerHTML = `Sensor 7`
                tempreal.innerHTML = `19.3°C`
            }, 12000);
            setTimeout(() => {
                tTempreal.innerHTML = `Sensor 8`
                tempreal.innerHTML = `17.9°C`
            }, 14000);
            setTimeout(() => {
                tTempreal.innerHTML = `Sensor 9`
                tempreal.innerHTML = `19.8°C`
            }, 16000);
            setTimeout(() => {
                tTempreal.innerHTML = `Sensor 1`
                tempreal.innerHTML = `18.6°C`
            }, 18000);
    }, 20000);

       setInterval(() => {
            setTimeout(() => {
                tUmidreal.innerHTML = `Sensor 2`
                umidReal.innerHTML = `48.5%`
            }, 2000);
            setTimeout(() => {
                tUmidreal.innerHTML = `Sensor 3`
                umidReal.innerHTML = `48.3%`     //"animação" que muda o valor de temperatura "em tempo real" 
            }, 4000);
            setTimeout(() => {
                tUmidreal.innerHTML = `Sensor 4`
                umidReal.innerHTML = `47.2%`
            }, 6000);
            setTimeout(() => {
                tUmidreal.innerHTML = `Sensor 5`
                umidReal.innerHTML = `46.8%`
            }, 8000);
            setTimeout(() => {
                tUmidreal.innerHTML = `Sensor 6`
                umidReal.innerHTML = `48.2%`
            }, 10000);
            setTimeout(() => {
                tUmidreal.innerHTML = `Sensor 7`
                umidReal.innerHTML = `49.1%`
            }, 12000);
            setTimeout(() => {
                tUmidreal.innerHTML = `Sensor 8`
                umidReal.innerHTML = `49.4%`
            }, 14000);
            setTimeout(() => {
                tUmidreal.innerHTML = `Sensor 9`
                umidReal.innerHTML = `49.8%`
            }, 16000);
            setTimeout(() => {
                tUmidreal.innerHTML = `Sensor 1`
                umidReal.innerHTML = `47.2%`
            }, 18000);
    }, 20000);
    //---------------------------------------------------------------


    //"animação" mostra e muda as metricas de temperatura e umidade, setinterval- intervalo de tempo, setimeout - executa depois de um certo tempo
    setInterval(() => {

        setTimeout(() => {
            p1.innerHTML = `18.0°C`
            p2.innerHTML = `19.5°C`
            p3.innerHTML = `22.5°C`
            p4.innerHTML = `25.5°C`
            p5.innerHTML = `27.0°C`

        }, 0);


        setTimeout(() => {
            p1.innerHTML = `46%`
            p2.innerHTML = `47%`
            p3.innerHTML = `50%`
            p4.innerHTML = `53%`
            p5.innerHTML = `54%`

        }, 9000);

    }, 18000);

}

// ABRIR E FECHAR AREA DE MUDAR DE SENSORES-------------------------------

var x = document.querySelector(".bluralert")

function fechar() {
    x.style.display = 'none'        //fechar area que tem os botoes para mudar de sensor (altera o CSS)
}

function abrir() {

    if (x.style.display != 'flex') {
        x.style.display = 'flex'              //abrir e fechar area que tem os botoes para mudar de sensor (altera o CSS)
    } else {
        x.style.display = 'none'
    }

}

