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
