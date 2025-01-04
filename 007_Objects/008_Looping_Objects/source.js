/* ------ EXAMPLES ------ */
const greeting = {
  English: "Hello",
  Japanese: "こんにちは",
  German: "Hallo",
  Russian: "Привет",
  Chinese: "你好",
};

for (const language in greeting) {
  console.log(`Yes, I speak ${language}! ${greeting[language]}!`);
}

/* ----- TESTS ----- */
function keyValSwap(obj) {
  // write your code here
}

// Uncomment the line below to test your keyValSwap function
// console.log(keyValSwap(greeting));
