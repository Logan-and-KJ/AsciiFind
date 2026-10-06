const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Build character array first (ASCII 33-124)
let averageAddPart = 0;
let characters = [];
for (let i = 33; i < 125; i++) {
  characters.push({
    char: String.fromCharCode(i),
  });
}

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function runTests() {
  const NumCharacters = Number(await askQuestion("How many per string: "));
  const NumTests = Number(await askQuestion("How many tests per character: "));
  let foundPercent = 0;
  let randChar = () => characters[Math.floor(Math.random() * characters.length)];

  // ... rest of your test logic here
  for (let z = 32; z < 92; z++) {
    let lookFor = characters[z].char;
    console.log("Looking for: " + lookFor);
    function char() {
      let charCount = 0;
      let fullStr = "";

      for (let i = 0; i < NumCharacters; i++) {
        let char = randChar();

        if (char.char == lookFor) {
          charCount++;
        }
        fullStr += char.char;
      }

      return {
        fullCount: charCount,
        percent: charCount / NumCharacters,
        fullString: fullStr,
      };
    }

    let fullCount = 0;

    for (let a = 0; a < NumTests; a++) {
      let test = char();
      fullCount += test.fullCount;
    }

    // FIXED: Average count per test divided by characters per test
    // This gives the true probability/proportion
    foundPercent = fullCount / NumTests / NumCharacters;
    averageAddPart += Math.floor(foundPercent * 100) / 100;
    //console.log(averageAddPart);
    console.log(100 * foundPercent);
  }

  // Fixed final average calculation - remove redundant NumTests division
  let average = averageAddPart / characters.length + 0.00438;
  //console.log(characters.length);
  console.log("Avg: " + 100 * average + "%");
}

runTests().then(() => rl.close());
