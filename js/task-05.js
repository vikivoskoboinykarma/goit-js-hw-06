const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', (event) => {
  // Використовуємо trim() для видалення зайвих пробілів 
  const inputValue = event.target.value.trim();
  
  // Перевіряємо, чи є введений текст порожнім
  if (inputValue === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = inputValue;
  }
});