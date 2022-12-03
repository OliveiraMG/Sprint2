// Começo grafico Temperatura 1

const horarioTemp = [
  '12:30:00',
  '12:45:00',
  '13:00:00',
  '14:15:00',
  '14:30:00',
  '14:45:00',
  '15:00:00',
];

const dataTemp = {
  labels: horarioTemp,
  datasets: [{
    label: 'Temperatura (°C)',
    backgroundColor: 'rgba(255, 128, 0, 0.99)',
    borderColor: 'rgba(255, 128, 0, 0.99)',
    data: [27.3, 25.2, 24.1, 19.2, 21.2, 23.7, 18.1, 25.3, 19.9],
  }]
};

const configTemp = {
  type: 'line',
  data: dataTemp,
  options: {
    responsive: true, // Para deixar responsivo com a div
    maintainAspectRatio: false, // Código para desativar a proporção automática do gráfico
  }
};

const myChart2 = new Chart(
  document.getElementById('graficoTemp'),
  configTemp
);
// Termino Gráfico Temperatura 1

// Começo Gráfico Temperatura 2
const horarioTemp2 = [
  '12:15:00',
  '12:30:00',
  '12:45:00',
  '13:00:00',
  '14:15:00',
  '14:30:00',
  '14:45:00',
  '15:00:00',
];

const dataTemp2 = {
  labels: horarioTemp2,
  datasets: [{
    label: 'Temperatura (°C)  Sensor 5',
    backgroundColor: 'rgba(255, 128, 0, 0.99)',
    borderColor: 'rgba(255, 128, 0, 0.99)',
    data: [25.2, 24.1, 19.2, 21.2, 23.7, 18.1, 25.3, 19.9],
  }]
};

const configTemp2 = {
  type: 'line',
  data: dataTemp2,
  options: {
    responsive: true, // Para deixar responsivo com a div
    maintainAspectRatio: false, // Código para desativar a proporção automática do gráfico
  }
};

const myChart3 = new Chart(
  document.getElementById('graficoTemp2'),
  configTemp2
);
// Termino Gráfico Temperatura 2





//mudar de sensor


var x = document.querySelector(".bluralert")
var grafico = document.querySelector(".grafico")
var g1 = document.querySelector("#graf1")
var g2 = document.querySelector("#graf2")
var mudartext = document.querySelector("#maxmin")




function irsensortemp1() {
  g1.style.display = 'flex'
  g2.style.display = 'none'
  x.style.display = 'none'

  mudartext.innerHTML=`Mínima: <ion-icon name="thermometer-outline"></ion-icon> 18.1°C <br>
  Máxima: <ion-icon name="thermometer-outline"></ion-icon> 27.3°C`




}

function irsensortemp5() {
  g2.style.display = 'flex'
  g1.style.display = 'none'
  x.style.display = 'none'

  mudartext.innerHTML=`Mínima: <ion-icon name="thermometer-outline"></ion-icon> 18.1°C <br>
  Máxima: <ion-icon name="thermometer-outline"></ion-icon> 25.3°C`



}