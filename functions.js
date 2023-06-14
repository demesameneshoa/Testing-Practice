function stringLength(string) {
  if (string.length < 1 || string.length > 10) {
    throw new Error('invalid string size');
  } else {
    return string.length;
  }
}

module.exports = stringLength;