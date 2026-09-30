const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


// Build character array first (ASCII 33-124)
let characters = [];
let foundP = 0;
let randChar = () => characters[Math.floor(Math.random() * characters.length)];
for (let i = 33; i < 125; i++) {
  characters.push({
      char: String.fromCharCode(i)
    })
}

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function runTests() {
  const numCharacters = Number(await askQuestion("How many per string: "));
  const NUM_TESTS = Number(await askQuestion("How many tests per character: "))
  let foundP = 0;
let randChar = () => characters[Math.floor(Math.random() * characters.length)];
  
  // ... rest of your test logic here
  for (let z = 32; z < 92; z++) {
    let lookFor = characters[z].char;
    console.log("Looking for: " + lookFor);
    function semi() {
      let semiCount = 0;
      let fullStr = "";

      for (let i = 0; i < numCharacters; i++) {
        let char = randChar();

        if (char.char == lookFor) {
          semiCount++;
        }
        fullStr += char.char;
      }

      return {
        fullCount: semiCount,
        percent: (semiCount / numCharacters),
        fullString: fullStr
      }
    }


    let totalChars = numCharacters * NUM_TESTS;
    let percentTotal = 0;

    for (let a = 0; a < NUM_TESTS; a++) {
      let test = semi();
      percentTotal += test.fullCount;
    }

    // FIXED: Average count per test divided by characters per test
    // This gives the true probability/proportion
    foundP = (percentTotal / NUM_TESTS) / numCharacters;
    console.log(100 * foundP);



  }


// Fixed final average calculation - remove redundant NUM_TESTS division
let foundT = foundP;  // foundP is already the correct average proportion
console.log("Avg: " + (100 * foundT) + "%");

}

runTests().then(() => rl.close());
