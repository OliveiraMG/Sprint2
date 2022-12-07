window.onload = obterDadosGrafico(1); 

function obterDadosGrafico(idSensor) {

  fetch(`/medidas/metricas`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (resposta) {
        console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
        resposta.reverse();

        alertasUmidade(resposta, idSensor)
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
    var legendaUmidade = document.getElementById('legendaUmidade');
    var exibirSensorUmidade = document.getElementById('exibirSensorUmidade');
    var exibirUmidade = document.getElementById('exibirUmidade');
    var umidade = document.getElementById('umidade');

    for (i = 0; i < resposta.length; i++) {
      var registro = resposta[i];

      // console.log("registros que vieram")
      // console.log(registro)

      alertaU.push(registro.umidadeAtual);

      console.log('dados do alerta Umidade')
      console.log(alertaU)

      if (alertaU[i] <= 47 || alertaU[i] >= 53) {
        posicaoUmidade = i
        criticoUmidade = true
        idUmidade.push(registro.idSensor);
      }

    }

    if (criticoUmidade && umidade != null) {
      umidade.style.display = "block"
    }

    var listaDeSensoresUmidade = idUmidade.filter((element, index) => {
      return idUmidade.indexOf(element) === index;
    })

        if(listaDeSensoresUmidade.length == 0){
          
          if(legendaUmidade != null) {

            legendaUmidade.innerHTML='Último Registro'

          }
          

          if(exibirSensorUmidade != null) {

            exibirSensorUmidade.innerHTML = `Sensor ${registro.idSensor}`

          }
          
          if(exibirUmidade != null) {

            exibirUmidade.innerHTML = `${alertaU[posicaoUmidade]}` 
          }

          

        } else if (listaDeSensoresUmidade.length > 1){

         
          if(legendaUmidade != null){

            legendaUmidade.innerHTML='Sensores em risco'

          }
          
          for (let index = 0; index < listaDeSensoresUmidade.length; index++) {
            const element = listaDeSensoresUmidade[index];
    
            if( exibirSensorUmidade != null) {
              exibirSensorUmidade.innerHTML += `Sensor ${element} <br>` 
            }
            

          }
    
        }else{ 

            if(legendaUmidade != null){

            legendaUmidade.innerHTML='Sensor em risco'

          }
            if(exibirSensorUmidade != null) {

              exibirSensorUmidade.innerHTML = `Sensor ${listaDeSensoresUmidade}`

            }
            if(exibirUmidade != null) {

             exibirUmidade.innerHTML = `${alertaU[posicaoUmidade]}` 
          }
                   
        }

  }

  function alertasTemperatura(resposta, idSensor) {
    var criticoTemperatura = false
    var idTemperatura = []
    var alertaT = []
    var posicaoTemperatura = 0
    var legendaTemperatura = document.getElementById('legendaTemperatura');
    var exibirSensorTemperatura = document.getElementById('exibirSensorTemperatura');
    var exibirTemperatura = document.getElementById('exibirTemperatura');
    var temperatura = document.getElementById('temperatura');

    for (i = 0; i < resposta.length; i++) {
      var registro = resposta[i];

      // console.log("registros que vieram")
      // console.log(registro)

      alertaT.push(registro.temperaturaAtual);

      console.log('dados do alerta Temperatura')
      console.log(alertaT)

      if (alertaT[i] <= 19.5 || alertaT[i] >= 25.5) {

        idTemperatura.push(registro.idSensor);
        criticoTemperatura = true
        posicaoTemperatura = i
      }

    }
    if (criticoTemperatura && temperatura != null) {

      temperatura.style.display = "block"

    }


    var listaDeSensoresTemperatura = idTemperatura.filter((element, index) => {
      return idTemperatura.indexOf(element) === index;
    })


    if(listaDeSensoresTemperatura.length == 0){
      
      if (legendaTemperatura != null){
        legendaTemperatura.innerHTML='Último Registro'
      }

      if( exibirSensorTemperatura !=  null) {
        exibirSensorTemperatura.innerHTML = `Sensor ${registro.idSensor}`
      }
     
      if (exibirTemperatura != null){

        exibirTemperatura.innerHTML = `${alertaT[posicaoTemperatura]}ºC` 

      }
      

    } else if (listaDeSensoresTemperatura.length > 1){

      if( legendaTemperatura != null) {
        legendaTemperatura.innerHTML='Sensores em risco'
      }
    
      for (let index = 0; index < listaDeSensoresTemperatura.length; index++) {
        const element = listaDeSensoresTemperatura[index];
        
        if( exibirSensorTemperatura !=  null) {
          exibirSensorTemperatura.innerHTML += `Sensor ${element}<br>`
        }
      }

    } else {
      if (legendaTemperatura != null){
        legendaTemperatura.innerHTML='Sensor em risco'
      }
        
        
        if( exibirSensorTemperatura !=  null) {
          exibirSensorTemperatura.innerHTML = `Sensor ${listaDeSensoresTemperatura}`
        }
        
        if (exibirTemperatura != null){
          exibirTemperatura.innerHTML = `${alertaT[posicaoTemperatura]}ºC`
        } 
          
        
    }
    
    console.log("depois do listaDeSensoresTemperatura.length")


  }