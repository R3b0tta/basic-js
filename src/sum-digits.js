const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits( n) {
  let result = 0;
  const number = n.toString();
  for (let i = 0; i < number.length; i++) {
    result += Number(number[i]);
    if (result >= 10) {
      result = result % 10 + 1;
    }
  }
  return result;
}

module.exports = {
  getSumOfDigits
};
