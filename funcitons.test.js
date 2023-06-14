const myFunctions = require('./functions');

test('Tests string length provided', () => {
  expect(myFunctions.stringLength('Test')).toBe(4);
  expect(() => {
    myFunctions.stringLength('This is a longer string length');
  }).toThrow('invalid string size');
});

test('Testing string reverse function', () => {
  expect(myFunctions.reverseString('Test')).toBe('tseT');
});

const CalculatorObjectone = new myFunctions.Calculator(5, 6);
const CalculatorObjecttwo = new myFunctions.Calculator(5, 0);
const CalculatorObjectthree = new myFunctions.Calculator(0, 7);
describe('Testing Calculator Functions', () => {
  test('Testing Addition Function', () => {
    expect(CalculatorObjectone.addition()).toBe(11);
    expect(CalculatorObjecttwo.addition()).toBe(5);
    expect(CalculatorObjectthree.addition()).toBe(7);
  });
  test('Testing Subtraction Function', () => {
    expect(CalculatorObjectone.subtraction()).toBe(-1);
    expect(CalculatorObjecttwo.subtraction()).toBe(5);
    expect(CalculatorObjectthree.subtraction()).toBe(-7);
  });
  test('Testing MUltiplication Function', () => {
    expect(CalculatorObjectone.multiplication()).toBe(30);
    expect(CalculatorObjecttwo.multiplication()).toBe(0);
    expect(CalculatorObjectthree.multiplication()).toBe(0);
  });
  test('Testing Division Function', () => {
    expect(CalculatorObjectone.division()).toBe(0.83);
    expect(() => {
      CalculatorObjecttwo.division();
    }).toThrow('cannot divide by zero');
  });
  expect(CalculatorObjectthree.division()).toBe(0);
});
