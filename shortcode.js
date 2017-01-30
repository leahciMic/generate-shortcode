const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

module.exports = function createShortCode() {
  let word = '';
  for (let i = 0; i < 11; i += 1) {
    word += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return word;
};

