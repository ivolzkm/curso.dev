// models/calculadora.js

function somar(numero1, numero2) {
  // Validação de entrada
  if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
    throw new TypeError('Ambos os parâmetros devem ser números');
  }

  if (!isFinite(numero1) || !isFinite(numero2)) {
    throw new RangeError('Os números devem ser finitos');
  }

  return numero1 + numero2;
}

function subtrair(numero1, numero2) {
  if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
    throw new TypeError('Ambos os parâmetros devem ser números');
  }

  if (!isFinite(numero1) || !isFinite(numero2)) {
    throw new RangeError('Os números devem ser finitos');
  }

  return numero1 - numero2;
}

function multiplicar(numero1, numero2) {
  if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
    throw new TypeError('Ambos os parâmetros devem ser números');
  }

  if (!isFinite(numero1) || !isFinite(numero2)) {
    throw new RangeError('Os números devem ser finitos');
  }

  return numero1 * numero2;
}

function dividir(numero1, numero2) {
  if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
    throw new TypeError('Ambos os parâmetros devem ser números');
  }

  if (!isFinite(numero1) || !isFinite(numero2)) {
    throw new RangeError('Os números devem ser finitos');
  }

  if (numero2 === 0) {
    throw new Error('Divisão por zero não é permitida');
  }

  return numero1 / numero2;
}

function potencia(base, expoente) {
  if (typeof base !== 'number' || typeof expoente !== 'number') {
    throw new TypeError('Ambos os parâmetros devem ser números');
  }

  if (!isFinite(base) || !isFinite(expoente)) {
    throw new RangeError('Os números devem ser finitos');
  }

  return Math.pow(base, expoente);
}

function raizQuadrada(numero) {
  if (typeof numero !== 'number') {
    throw new TypeError('O parâmetro deve ser um número');
  }

  if (!isFinite(numero)) {
    throw new RangeError('O número deve ser finito');
  }

  if (numero < 0) {
    throw new Error('Não é possível calcular raiz quadrada de número negativo');
  }

  return Math.sqrt(numero);
}

function porcentagem(valor, percentual) {
  if (typeof valor !== 'number' || typeof percentual !== 'number') {
    throw new TypeError('Ambos os parâmetros devem ser números');
  }

  if (!isFinite(valor) || !isFinite(percentual)) {
    throw new RangeError('Os números devem ser finitos');
  }

  return (valor * percentual) / 100;
}

exports.somar = somar;
exports.subtrair = subtrair;
exports.multiplicar = multiplicar;
exports.dividir = dividir;
exports.potencia = potencia;
exports.raizQuadrada = raizQuadrada;
exports.porcentagem = porcentagem;
