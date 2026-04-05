const generateSWIFT = () => {
  // Example SWIFT: 8 or 11 characters: 4-letter bank code + 2-letter country + 2-letter location + optional 3 letters branch
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomLetters = (length) =>
    Array.from(
      { length },
      () => letters[Math.floor(Math.random() * letters.length)],
    ).join("");

  return `${randomLetters(4)}GB${randomLetters(2)}${randomLetters(3)}`;
};

module.exports = generateSWIFT;
