protectPage();

const user = getLoggedInUser();

const ctx = document.querySelector('#chart').getContext('2d');

const months = Object.keys(users.savingsByMonth);
const amounts = Object.values(users.savingsByMonth);

new Chart(ctx, {
  type: 'line',
  data: {
    labels: months,
    datasets: [{
      label: `${users.name}'s Savings`,
      data: amounts,
      borderColor: 'gold',
      backgroundColor: 'rgba(255, 217, 0, 0.42)',
      fill: true,
      tension: 0.4,
      pointRadius: 5,
      pointBackgroundColor: '#fff',
      pointBorderColor: 'gold',
      pointHoverRadius: 8
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});












  