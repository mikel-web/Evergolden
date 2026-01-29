  const planRadios = document.querySelectorAll('input[name="plan"]');
const goalSection = document.getElementById('goalSection');

planRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    goalSection.style.display =
      radio.value === 'goal' ? 'block' : 'none';
  });
});