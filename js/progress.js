  const saved = 450;
const goal = 1000;

const percent = Math.min((saved / goal) * 100, 100).toFixed(0);

document.getElementById("progressFill").style.width = percent + "%";
document.getElementById("percentText").textContent = percent + "%";
document.getElementById("progressText").textContent =
  `$${saved.toLocaleString()} of $${goal.toLocaleString()}`;

  