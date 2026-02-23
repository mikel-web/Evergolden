// DROPDOWN FOR SELECT BANK
const dropdown = document.querySelector(".select-bank-dropdown");
const input = document.getElementById("select-bank-dropdownInput");
const menu = document.getElementById("dropdownMenu");
const selectedValue = document.getElementById("selectedValue");

input.addEventListener("click", () => {
  dropdown.classList.toggle("open");
});

menu.querySelectorAll("li").forEach(item => {
  item.addEventListener("click", () => {
    selectedValue.textContent = item.dataset.value;
    selectedValue.style.color = "#111";
    dropdown.classList.remove("open");
  });
});

/* Close when clicking outside */
document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("open");
  }
});

// END OF DROPDOWN FOR SELECT BANK