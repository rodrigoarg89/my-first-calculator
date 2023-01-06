const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const buttonNumber = document.querySelectorAll('.number');
const buttonOperator = document.querySelectorAll('.operator');

const display = new Display(displayValorAnterior, displayValorActual);

buttonNumber.forEach(button => {
  button.addEventListener('click', () => display.addNumber(button.innerHTML));
});  

buttonOperator.forEach(button => {
  button.addEventListener('click', () => display.computar(button.value))
})