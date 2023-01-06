class Display {
  constructor(displayValorAnterior, displayValorActual) {
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.calculator = new Calculator();
    this.typeOperation = undefined;
    this.valorActual = '';
    this.valorAnterior = '';
    this.signos = {
      add: '+',
      subtract: '-',
      split: '/',
      multiply: 'x'
    }
  }

  delete() {
    this.valorActual = this.valorActual.toString().slice(0,-1);
    this.printValue();
  }

  deleteAll() {
    this.valorActual = '';
    this.valorAnterior = '';
    this.typeOperation = undefined;
    this.printValue();
  }

  computar(type) {
    this.typeOperation !== 'igual' && this.calculate();
    this.typeOperation = type;
    this.valorAnterior = this.valorActual || this.valorAnterior;
    this.valorActual = '';
    this.printValue();
  }

  addNumber(number) {
    if (number === '.' && this.valorActual.includes('.')) return;
    this.valorActual = this.valorActual.toString() + number.toString();
    this.printValue();
  }

  printValue() {
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.typeOperation] || ''}`;
  }

  calculate() {
    const valorAnterior = parseFloat(this.valorAnterior);
    const valorActual = parseFloat(this.valorActual);

    if (isNaN (valorActual) || isNaN (valorAnterior) ) return;
    this.valorActual = this.calculator[this.typeOperation](valorAnterior, valorActual);
  }
} 

