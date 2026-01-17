// tests/calculadora.test.js
const {
  somar,
  subtrair,
  multiplicar,
  dividir,
  potencia,
  raizQuadrada,
  porcentagem,
} = require('../../models/calculadora');

// ===== TESTES DA FUNÇÃO SOMAR =====
describe('Função somar', () => {
  // Casos básicos
  test('soma dois números positivos', () => {
    expect(somar(2, 3)).toBe(5);
  });

  test('soma números negativos', () => {
    expect(somar(-5, -3)).toBe(-8);
  });

  test('soma número positivo com negativo', () => {
    expect(somar(10, -5)).toBe(5);
  });

  test('soma com zero', () => {
    expect(somar(5, 0)).toBe(5);
    expect(somar(0, 5)).toBe(5);
    expect(somar(0, 0)).toBe(0);
  });

  // Casos com decimais
  test('soma números decimais', () => {
    expect(somar(0.1, 0.2)).toBeCloseTo(0.3);
    expect(somar(1.5, 2.5)).toBe(4);
  });

  // Casos extremos
  test('soma números muito grandes', () => {
    expect(somar(1000000, 2000000)).toBe(3000000);
  });

  test('soma números muito pequenos', () => {
    expect(somar(0.0001, 0.0002)).toBeCloseTo(0.0003);
  });

  // Validações
  test('lança erro com parâmetros não numéricos', () => {
    expect(() => somar('2', 3)).toThrow(TypeError);
    expect(() => somar(2, '3')).toThrow(TypeError);
    expect(() => somar('a', 'b')).toThrow(TypeError);
    expect(() => somar(null, 5)).toThrow(TypeError);
    expect(() => somar(undefined, 5)).toThrow(TypeError);
  });

  test('lança erro com Infinity', () => {
    expect(() => somar(Infinity, 5)).toThrow(RangeError);
    expect(() => somar(5, -Infinity)).toThrow(RangeError);
  });

  test('lança erro com NaN', () => {
    expect(() => somar(NaN, 5)).toThrow(RangeError);
  });
});

// ===== TESTES DA FUNÇÃO SUBTRAIR =====
describe('Função subtrair', () => {
  test('subtrai dois números positivos', () => {
    expect(subtrair(5, 3)).toBe(2);
  });

  test('subtrai resultando em negativo', () => {
    expect(subtrair(3, 5)).toBe(-2);
  });

  test('subtrai números negativos', () => {
    expect(subtrair(-5, -3)).toBe(-2);
  });

  test('subtrai com zero', () => {
    expect(subtrair(5, 0)).toBe(5);
    expect(subtrair(0, 5)).toBe(-5);
  });

  test('subtrai números decimais', () => {
    expect(subtrair(5.5, 2.3)).toBeCloseTo(3.2);
  });

  test('lança erro com parâmetros inválidos', () => {
    expect(() => subtrair('5', 3)).toThrow(TypeError);
    expect(() => subtrair(Infinity, 5)).toThrow(RangeError);
  });
});

// ===== TESTES DA FUNÇÃO MULTIPLICAR =====
describe('Função multiplicar', () => {
  test('multiplica dois números positivos', () => {
    expect(multiplicar(3, 4)).toBe(12);
  });

  test('multiplica por zero', () => {
    expect(multiplicar(5, 0)).toBe(0);
    expect(multiplicar(0, 5)).toBe(0);
  });

  test('multiplica números negativos', () => {
    expect(multiplicar(-3, 4)).toBe(-12);
    expect(multiplicar(-3, -4)).toBe(12);
  });

  test('multiplica números decimais', () => {
    expect(multiplicar(2.5, 4)).toBe(10);
    expect(multiplicar(0.1, 0.2)).toBeCloseTo(0.02);
  });

  test('lança erro com parâmetros inválidos', () => {
    expect(() => multiplicar('3', 4)).toThrow(TypeError);
    expect(() => multiplicar(Infinity, 5)).toThrow(RangeError);
  });
});

// ===== TESTES DA FUNÇÃO DIVIDIR =====
describe('Função dividir', () => {
  test('divide dois números positivos', () => {
    expect(dividir(10, 2)).toBe(5);
  });

  test('divide resultando em decimal', () => {
    expect(dividir(10, 3)).toBeCloseTo(3.333, 3);
  });

  test('divide números negativos', () => {
    expect(dividir(-10, 2)).toBe(-5);
    expect(dividir(-10, -2)).toBe(5);
  });

  test('divide por um', () => {
    expect(dividir(5, 1)).toBe(5);
  });

  test('lança erro ao dividir por zero', () => {
    expect(() => dividir(10, 0)).toThrow('Divisão por zero não é permitida');
  });

  test('lança erro com parâmetros inválidos', () => {
    expect(() => dividir('10', 2)).toThrow(TypeError);
    expect(() => dividir(Infinity, 5)).toThrow(RangeError);
  });
});

// ===== TESTES DA FUNÇÃO POTENCIA =====
describe('Função potencia', () => {
  test('calcula potência com expoente positivo', () => {
    expect(potencia(2, 3)).toBe(8);
    expect(potencia(5, 2)).toBe(25);
  });

  test('calcula potência com expoente zero', () => {
    expect(potencia(5, 0)).toBe(1);
  });

  test('calcula potência com expoente negativo', () => {
    expect(potencia(2, -2)).toBe(0.25);
  });

  test('calcula potência com base negativa', () => {
    expect(potencia(-2, 3)).toBe(-8);
    expect(potencia(-2, 2)).toBe(4);
  });

  test('calcula potência decimal', () => {
    expect(potencia(4, 0.5)).toBe(2);
  });

  test('lança erro com parâmetros inválidos', () => {
    expect(() => potencia('2', 3)).toThrow(TypeError);
    expect(() => potencia(Infinity, 2)).toThrow(RangeError);
  });
});

// ===== TESTES DA FUNÇÃO RAIZ QUADRADA =====
describe('Função raizQuadrada', () => {
  test('calcula raiz quadrada de número positivo', () => {
    expect(raizQuadrada(9)).toBe(3);
    expect(raizQuadrada(16)).toBe(4);
  });

  test('calcula raiz quadrada de zero', () => {
    expect(raizQuadrada(0)).toBe(0);
  });

  test('calcula raiz quadrada de decimal', () => {
    expect(raizQuadrada(2.25)).toBe(1.5);
  });

  test('lança erro com número negativo', () => {
    expect(() => raizQuadrada(-9)).toThrow(
      'Não é possível calcular raiz quadrada de número negativo',
    );
  });

  test('lança erro com parâmetros inválidos', () => {
    expect(() => raizQuadrada('9')).toThrow(TypeError);
    expect(() => raizQuadrada(Infinity)).toThrow(RangeError);
  });
});

// ===== TESTES DA FUNÇÃO PORCENTAGEM =====
describe('Função porcentagem', () => {
  test('calcula porcentagem de um valor', () => {
    expect(porcentagem(100, 10)).toBe(10);
    expect(porcentagem(200, 50)).toBe(100);
  });

  test('calcula porcentagem decimal', () => {
    expect(porcentagem(100, 5.5)).toBe(5.5);
  });

  test('calcula porcentagem de zero', () => {
    expect(porcentagem(0, 10)).toBe(0);
  });

  test('calcula zero por cento', () => {
    expect(porcentagem(100, 0)).toBe(0);
  });

  test('calcula porcentagem maior que 100', () => {
    expect(porcentagem(50, 200)).toBe(100);
  });

  test('lança erro com parâmetros inválidos', () => {
    expect(() => porcentagem('100', 10)).toThrow(TypeError);
    expect(() => porcentagem(Infinity, 10)).toThrow(RangeError);
  });
});

// ===== TESTES DE INTEGRAÇÃO =====
describe('Testes de integração', () => {
  test('combina múltiplas operações', () => {
    const resultado1 = somar(multiplicar(2, 3), 4); // (2 * 3) + 4 = 10
    expect(resultado1).toBe(10);

    const resultado2 = dividir(subtrair(20, 5), 3); // (20 - 5) / 3 = 5
    expect(resultado2).toBe(5);
  });

  test('calcula expressão complexa', () => {
    // (5 + 3) * 2 - 4 = 12
    const resultado = subtrair(multiplicar(somar(5, 3), 2), 4);
    expect(resultado).toBe(12);
  });
});
