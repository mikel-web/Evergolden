if (users && users.savingprogress) {
  const saved = users.savingprogress.saved;
  const goal = users.savingprogress.goal;

  const percent = Math.min((saved / goal) * 100, 100).toFixed(0);

  document.getElementById("progressFill").style.width = percent + "%";
  document.getElementById("percentText").textContent = percent + "%";
  document.getElementById("progressText").textContent =
    `$${saved.toLocaleString()} of $${goal.toLocaleString()}`;

  // User name
  document.querySelector(".user-name").textContent = users.name;
}
