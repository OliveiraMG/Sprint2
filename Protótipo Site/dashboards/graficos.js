
    // parametros dos graficos
    
    
    const labels = [     //grafico 1
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
    ];

    const labels2 = [    //grafico 2
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
    ];

    
  
    const data = {       //grafico 1
      labels: labels,
      datasets: [{
        label: 'Temperatura',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [30, 29, 28, 25, 22, 23],
      },{
        label: 'Umidade',
        backgroundColor: 'rgb(0,191,255)',
        borderColor: 'rgb(0,191,255)',
        data: [80, 82, 80, 85, 80, 83],
      }
      
    
    ]
    };

    const datas = {                //grafico 2
      labels: labels2,
      datasets: [{
        label: 'Temperatura Média',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [22, 24, 27, 23, 20, 18],
      },{
        label: 'Umidade Média',
        backgroundColor: 'rgb(0,191,255)',
        borderColor: 'rgb(255, 99, 132)',
        data: [90, 89, 93, 87, 88, 82],
      }
      
    
    ]
    };

    const dataa = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };

    //configurar o tipo do graficos 
  
    const config = {       //grafico 1
      type: 'line',
      data: data,
      options: {}
    };

    const config2 = {     //grafico 2
      type: 'bar',
      data: datas,
      options: {}
    };

    const config3 = {
        type: 'doughnut',
        data: dataa,
      };


    // exibir os graficos



    const myChart = new Chart(
      document.getElementById('myChart'),      //grafico 1
      config
    );

    const myChart2 = new Chart(
      document.getElementById('myChart2'),     //grafico 2
      config2
    );

    const myChart3 = new Chart(
        document.getElementById('myChart3'),
        config3
      );
  
