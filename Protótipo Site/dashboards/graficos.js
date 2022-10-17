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