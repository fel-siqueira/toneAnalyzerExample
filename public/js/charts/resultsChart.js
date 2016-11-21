function generateChart(toneValues, toneNames) {
  $("#resultsChart").remove();
  $(".results").append('<canvas id="resultsChart"></canvas>');
  var ctx = document.getElementById("resultsChart");
  var resultsChart = new Chart(
    ctx,
    {
      type: 'bar',
      data: {
        labels: toneNames,
        datasets: [
          {
            label: 'Accuracy %',
            data: toneValues,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(55, 26, 86, 0.2)',
              'rgba(205, 20, 86, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(55, 26, 86, 1)',
              'rgba(205, 20, 86, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    }
  );
}


