// Gráficos Dashboard Principal
const horarioPrin = [
    '08:00:00',
    '08:15:00',
    '08:30:00',
    '08:45:00',
    '09:00:00',
    '09:15:00',
    '09:30:00',
    '09:45:00',
    '10:00:00',
  ];

  const dataPrin = {
    labels: horarioPrin,
    datasets: [{
      label: 'Temperatura',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [18.6, 17.10, 20.6, 19.2, 22.7, 22.1, 19.3, 17.9, 19.8],
    }, {   
      label: 'Umidade',
      backgroundColor: 'rgb(000, 99, 132)',
      borderColor: 'rgb(000, 99, 132)',
      data: [47.2, 48.5, 48.3, 47.2, 46.8, 48.2, 49.1, 49.4, 49.80],
    }]
  };

  const configPrin = {
    type: 'line',
    data: dataPrin,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('graficoPrin'),
    configPrin
  );
// Termino Gráfico principal

// Começo grafico Temperatura1

const horarioTemp = [
  '10:15:00',
  '10:30:00',
  '10:45:00',
  '11:00:00',
  '11:15:00',
  '11:30:00',
  '11:45:00',
  '12:00:00',
];

const dataTemp = {
  labels: horarioTemp,
  datasets: [{
    label: 'Temperatura (°C)',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [24.5, 25.2, 18.10, 20.10, 26.5, 20.7, 21.4, 27.3],
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
// Termino Gráfico Temperatura1

// Começo Gráfico Temperatura2
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
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
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
// Termino Gráfico Temperatura2
