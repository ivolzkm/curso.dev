const calculadora = require('../models/calculadora');

test('Deve retornar 5 quando somar 2 e 3', () => {
  const resultado = calculadora.somar(2, 3);
  expect(resultado).toBe(5);
});
test('Deve retornar 105 quando somar 100 e 5', () => {
  const resultado = calculadora.somar(100, 5);
  expect(resultado).toBe(105);
});
