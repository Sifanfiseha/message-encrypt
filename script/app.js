console.log("we are ");
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function caesarCipher(originalText, shiftAmount, encodeOrDecode) {
  let newText = "";

  // Adjust the shift direction if decoding
  if (encodeOrDecode === "decode") {
    shiftAmount *= -1;
  }

  for (let letter of originalText) {
    if (/[a-z]/i.test(letter)) {
      // Check if the character is a letter
      const isUpperCase = letter === letter.toUpperCase();
      const lowerCaseLetter = letter.toLowerCase();
      const shiftedPosition =
        (alphabet.indexOf(lowerCaseLetter) + shiftAmount) % alphabet.length;
      const correctedPosition =
        shiftedPosition < 0
          ? shiftedPosition + alphabet.length
          : shiftedPosition;
      const newLetter = alphabet[correctedPosition];
      newText += isUpperCase ? newLetter.toUpperCase() : newLetter;
    } else {
      newText += letter; // Keep non-alphabetic characters as they are
    }
  }

  return newText;
}

document.querySelector("button:nth-child(1)").addEventListener("click", () => {
  const inputText = document.querySelector("#input").value;
  const shiftAmount = 3; // Default shift value
  const result = caesarCipher(inputText, shiftAmount, "encode");
  document.querySelector("#result").textContent = result;
});

document.querySelector("button:nth-child(3)").addEventListener("click", () => {
  const inputText = document.querySelector("#input").value;
  const shiftAmount = 3; // Default shift value
  const result = caesarCipher(inputText, shiftAmount, "decode");
  document.querySelector("#result").textContent = result;
});
