document.addEventListener("DOMContentLoaded", () => {
  protectPage();

  const user = getLoggedInUser();
  if (!user || !user.savingsByMonth) {
    console.error("No user or savings data found");
    return;
  }

  const canvas = document.getElementById("chart");
  if (!canvas) {
    console.error("Canvas with id='chart' not found");
    return;
  }

  const ctx = canvas.getContext("2d");

  const months = Object.keys(user.savingsByMonth);
  const amounts = Object.values(user.savingsByMonth);

  new Chart(ctx, {
    type: "line",
    data: {
      labels: months,
      datasets: [{
        label: `${user.name}'s Savings`,
        data: amounts,
        borderColor: "gold",
        backgroundColor: "rgba(255, 215, 0, 0.35)",
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#fff",
        pointBorderColor: "gold",
        pointHoverRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});
