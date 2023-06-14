function stringLength(string) {
  if (string.length < 1 || string.length > 10) {
    throw new Error('invalid string size');
  } else {
    return string.length;
  }
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  addition() {
    return this.num1 + this.num2;
  }

  subtraction() {
    return this.num1 - this.num2;
  }

  multiplication() {
    return this.num1 * this.num2;
  }

  division() {
    if (this.num2 === 0) {
      throw new Error('cannot divide by zero');
    } else {
      return parseFloat((this.num1 / this.num2).toFixed(2));
    }
  }
}

function capitalizeString(string) {
  return string[0].toUpperCase() + string.slice(1);
}

module.exports = {
  stringLength,
  reverseString,
  Calculator,
  capitalizeString,
};
