window.onload = obterDadosGrafico(1); 

function obterDadosGrafico(idSensor) {

    fetch(`/medidas/umidade/1`, { cache: 'no-store' }).then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

          alertasUmidade(resposta, idSensor)

        });
      } else {
        console.error('Nenhum dado encontrado ou erro na API');
      }
    })
      .catch(function (error) {
        console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
      });


    fetch(`/medidas/temperatura/1`, { cache: 'no-store' }).then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          // console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

          alertasTemperatura(resposta, idSensor)

        });
      } else {
        console.error('Nenhum dado encontrado ou erro na API');
      }
    })
      .catch(function (error) {
        console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
      });

  }



  function alertasUmidade(resposta, idSensor) {

    var criticoUmidade = false
    var idUmidade = []
    var posicaoUmidade = 0
    var alertaU = []

    for (i = 0; i < resposta.length; i++) {
      var registro = resposta[i];

      console.log("registros que vieram")
      console.log(registro)

      alertaU.push(registro.umidadeAtual);

      console.log('dados do alerta Umidade')
      console.log(alertaU)

      if (alertaU[i] <= 47 || alertaU[i] >= 53) {
        posicaoUmidade = i
        criticoUmidade = true
        idUmidade.push(registro.idSensor);
      }

    }

    if (criticoUmidade) {
      console.log("entrei no critico umidade")
      umidade.style.display = "block"
    }

    console.log("o sensor que deu bom Umidade ")

    var listaDeSensoresUmidade = idUmidade.filter((element, index) => {
      return idUmidade.indexOf(element) === index;
    })

        if(listaDeSensoresUmidade.length == 0){

            exibirSensorUmidade.innerHTML = 'Sensores ok'

        } else{ 

            exibirSensorUmidade.innerHTML = `Sensor ${listaDeSensoresUmidade}`
            exibirUmidade.innerHTML = `${alertaU[posicaoUmidade]}ºC`        
        }


    console.log('SENSOR DE UMIDADE COM PROBLEMA')
    console.log(listaDeSensoresUmidade)

  }

  function alertasTemperatura(resposta, idSensor) {
    var criticoTemperatura = false
    var idTemperatura = []
    var alertaT = []
    var posicaoTemperatura = 0


    for (i = 0; i < resposta.length; i++) {
      var registro = resposta[i];

      console.log("registros que vieram")
      console.log(registro)

      alertaT.push(registro.temperaturaAtual);

      console.log('dados do alerta Temperatura')
      console.log(alertaT)

      if (alertaT[i] <= 19.5 || alertaT[i] >= 25.5) {

        idTemperatura.push(registro.idSensor);
        criticoTemperatura = true
        posicaoTemperatura = i
      }

    }

    if (criticoTemperatura) {
      console.log("entrei no critico temperatura")
      temperatura.style.display = "block"
    }

    console.log("o sensor que deu bom")

    var listaDeSensoresTemperatura = idTemperatura.filter((element, index) => {
      return idTemperatura.indexOf(element) === index;
    })

    if(listaDeSensoresTemperatura.length == 0){

        exibirSensorTemperatura.innerHTML= 'Sensores ok'

    } else {

        exibirSensorTemperatura.innerHTML = `Sensor ${listaDeSensoresTemperatura}`
        exibirTemperatura.innerHTML = `${alertaT[posicaoTemperatura]}ºC`  
    }
    


  }