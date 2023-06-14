const stringLength = require('./functions');

test('Tests string length provided', () => {
  expect(stringLength('Test')).toBe(4);
  expect(() => {
    stringLength('This is an invalid test');
  }).toThrow('invalid string size');
});