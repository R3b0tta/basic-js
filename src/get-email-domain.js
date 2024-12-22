const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const emailArr = email.split('');
  let result;
  for (let i = emailArr.length - 1; i >= 0; i--) {
    if (emailArr[i] === '@') {
      result = emailArr.splice(i + 1);
      break;
    }
  }
  return result.join('');
}

module.exports = {
  getEmailDomain
};
