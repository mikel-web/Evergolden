const chart = document.querySelector('#chart').getContext('2d');

// create a new chart instance
new Chart(chart, {
    type: 'line', 
    data :{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
        {
            label: 'Saving Chart',
            data: [29374, 49631, 14000, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 61004],
            borderColor: 'gold',
            backgroundColor: 'rgba(255, 217, 0, 0.42)',
      fill: true,
      tension: 0.4,
      pointStyle: 'circle',
      pointRadius: 5,
      pointBackgroundColor: '#fff',
      pointBorderColor: 'gold',
      pointHoverRadius: 8
        },
    ]
    },
    Options: {
        Responsive: true
    }
})












  