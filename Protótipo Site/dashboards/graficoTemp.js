// Começo grafico Temperatura 1

const horarioTemp = [
  '10:15:00',
  '10:30:00',
  '10:45:00',
  '11:00:00',
  '11:15:00',
  '11:30:00',
  '11:45:00',
  '12:00:00',
  '12:15:00',
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
    data: [24.5, 25.2, 18.10, 20.10, 26.5, 20.7, 21.4, 27.3, 25.2, 24.1, 19.2, 21.2, 23.7, 18.1, 25.3, 19.9],
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
    label: 'Temperatura (°C)',
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
var tm = document.querySelector(".tm")


function irsensortemp1() {
  tm.style.flexDirection = "column"
  x.style.display = 'none'

}

function irsensor5temp() {
  tm.style.flexDirection = "column-reverse"
  x.style.display = 'none'
  

}