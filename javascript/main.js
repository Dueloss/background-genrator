const colorPicker1 = document.getElementsByClassName('color')[0];
const colorPicker2 = document.getElementsByClassName("color")[1];
const body = document.getElementById("gradient");
const css = document.querySelector('h3');

window.addEventListener('DOMContentLoaded', (event) => {
  setColor();
  colorPicker1.addEventListener("input", setColor);
  colorPicker2.addEventListener("input", setColor);
});
const setColor = () => {
  console.log("clicked");
  body.style.background = `linear-gradient(to right, ${colorPicker1.value}, ${colorPicker2.value})`;
  css.textContent = body.style.background;
}
