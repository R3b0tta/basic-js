const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const messageUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < messageUpper.length; i++) {
      const messageChar = messageUpper[i];
      if (alphabet.includes(messageChar)) {
        const messageIndex = alphabet.indexOf(messageChar);
        const keyChar = keyUpper[keyIndex % keyUpper.length];
        const keyIndexValue = alphabet.indexOf(keyChar);
        const encryptedChar = alphabet[(messageIndex + keyIndexValue) % alphabet.length];
        result += encryptedChar;
        keyIndex++;
      } else {
        result += messageChar;
      }
    }
    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const encryptedUpper = encryptedMessage.toUpperCase();
    const keyUpper = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedUpper.length; i++) {
      const encryptedChar = encryptedUpper[i];
      if (alphabet.includes(encryptedChar)) {
        const encryptedIndex = alphabet.indexOf(encryptedChar);
        const keyChar = keyUpper[keyIndex % keyUpper.length];
        const keyIndexValue = alphabet.indexOf(keyChar);
        const decryptedChar = alphabet[(encryptedIndex - keyIndexValue + alphabet.length) % alphabet.length];
        result += decryptedChar;
        keyIndex++;
      } else {
        result += encryptedChar;
      }
    }
    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
