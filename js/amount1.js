const input = document.getElementById("amountInput");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");

const step = 5;
const minAmount = 0;

/* Normalize value */
function getAmount() {
  return Math.max(minAmount, parseInt(input.value) || 0);
}

/* Plus button */
plusBtn.addEventListener("click", () => {
  input.value = getAmount() + step;
});

/* Minus button */
minusBtn.addEventListener("click", () => {
  input.value = Math.max(minAmount, getAmount() - step);
});

/* Typing validation */
input.addEventListener("input", () => {
  if (input.value < minAmount) {
    input.value = minAmount;
  }
});