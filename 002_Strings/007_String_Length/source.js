const message = "The brave knight battled the fierce, fire-breathing dragon.";
const messageNoSpaces = "Thebraveknightbattledthefierce,fire-breathingdragon.";
const messageNoPunctuation =
  "The brave knight battled the fierce fire breathing dragon";

/**
 * Create three variables:
 *   - `lengthMessage`, and assign to it the length of `message`
 *   - `lengthNoSpaces`, and assign to it the length of `messageNoSpaces`
 *   - `lengthNoPunctuation`, and assign to it the length of `messageNoPunctuation`
 */

console.log(
  `Is the length the same when the spaces are removed? ${message.length === messageNoSpaces.length}`,
);
console.log(
  `Is the length the same when the punctuation is removed? ${message.length === messageNoPunctuation.length}`,
);
