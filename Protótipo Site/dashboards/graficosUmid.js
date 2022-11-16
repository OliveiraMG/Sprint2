// Começo Gráfico Umidade 1

const horarioUmid = [
    '10:15:00',
    '10:30:00',
    '10:45:00',
    '11:00:00',
    '11:15:00',
    '11:30:00',
    '11:45:00',
    '12:00:00',
  ];
  
  const dataUmid = {
    labels: horarioUmid,
    datasets: [{
      label: 'Umidade (%)',
      backgroundColor: 'rgba(0, 157, 255, 0.99)',
      borderColor: 'rgba(0, 157, 255, 0.99)',
      data: [50.6, 51.3, 48.2, 52.6, 53.7, 54.2, 53.3, 51.7]
    }]
  };
  
  const configUmid = {
    type: 'line',
    data: dataUmid,
    options: {
      responsive: true, // Para deixar responsivo com a div
      maintainAspectRatio: false, // Código para desativar a proporção automática do gráfico
    }
  };
  
  const myChart1 = new Chart(
    document.getElementById('graficoUmid'),
    configUmid
  );

  // Término Gráfico Umidade 1

  // Começo Gráfico Umidade 1

const horarioUmid2 = [
    '12:15:00',
    '12:30:00',
    '12:45:00',
    '13:00:00',
    '13:15:00',
    '13:30:00',
    '13:45:00',
    '14:00:00',
  ];
  
  const dataUmid2 = {
    labels: horarioUmid2,
    datasets: [{
      label: 'Umidade (%)',
      backgroundColor: 'rgba(0, 157, 255, 0.99)',
      borderColor: 'rgba(0, 157, 255, 0.99)',
      data: [48.3, 47.5, 50.2, 49.1, 54.7, 45.5, 51.6, 48.2]
    }]
  };
  
  const configUmid2 = {
    type: 'line',
    data: dataUmid2,
    options: {
      responsive: true, // Para deixar responsivo com a div
      maintainAspectRatio: false, // Código para desativar a proporção automática do gráfico
    }
  };
  
  const myChart2 = new Chart(
    document.getElementById('graficoUmid2'),
    configUmid2
  );

  // Término Gráfico Umidade 1







var x = document.querySelector(".bluralert")
var tm = document.querySelector(".tm")

var g1 = document.querySelector("#graficosensor1")
var g2 = document.querySelector("#graficosensor2")
var mudartext = document.querySelector("#maxmin")


function irsensorumid1() {
  g1.style.display = 'flex'
  g2.style.display = 'none'
  x.style.display = 'none'

  mudartext.innerHTML=`Mínima: <ion-icon name="thermometer-outline"></ion-icon> 18.1°C <br>
  Máxima: <ion-icon name="thermometer-outline"></ion-icon> 25.3°C`

}

function irsensorumid5() {
  g1.style.display = 'none'
  g2.style.display = 'flex'
  x.style.display = 'none'

  mudartext.innerHTML=`Mínima: <ion-icon name="thermometer-outline"></ion-icon> 18.1°C <br>
  Máxima: <ion-icon name="thermometer-outline"></ion-icon> 25.3°C`
  

}

