const cbrt = require('./index');

test('Cbrt function is defined', () => {
  expect(typeof cbrt).toEqual('function');
});

test('calculates correct cuberoot value for 125', () => {
  expect(cbrt(125)).toEqual(5);
});
