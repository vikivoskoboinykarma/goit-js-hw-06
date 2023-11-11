
  const controlsContainer = document.getElementById('controls');
  const input = controlsContainer.querySelector('input');
  const createButton = controlsContainer.querySelector('[data-create]');
  const destroyButton = controlsContainer.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  const initialSize = 30;
  const step = 10;
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${initialSize + i * step}px`;
    box.style.height = `${initialSize + i * step}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  boxesContainer.append(...boxes);
}
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createButton.addEventListener('click', () => {
  const amount = input.value;
  createBoxes(amount);
});

destroyButton.addEventListener('click', destroyBoxes);
