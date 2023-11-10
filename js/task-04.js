document.addEventListener("DOMContentLoaded", function () {
    let counterValue = 0;
const valueSpan = document.getElementById("value");
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  updateCounterValue();
});

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  updateCounterValue();
});

function updateCounterValue() {
  valueSpan.textContent = counterValue;
}
});

