function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeButton = document.querySelector('.change-color');
const body = document.querySelector('body');
const spanColorValue = document.querySelector('.color');


changeButton.addEventListener('click', event => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColorValue.textContent = color;
})