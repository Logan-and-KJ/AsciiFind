let characters = [];
let numCharacters = 5000;
let NUM_TESTS = 70000;
let foundP = 0;
let randChar = () => characters[Math.floor(Math.random() * characters.length)];
let eConsole = document.getElementById("console");

document.getElementById("button").onclick = function () {
  let numCharacters = document.getElementById("num-chars").value;
  let NUM_TESTS = document.getElementById("num-tests").value;
  eConsole.innerHTML = "";
  // Build character array (ASCII 33-124)
  for (let i = 33; i < 125; i++) {
    characters.push({
      char: String.fromCharCode(i),
    });
  }

  // Test specific character range
  for (let z = 32; z < 92; z++) {
    let lookFor = characters[z].char;
    eConsole.innerHTML += "<br>" + "&gt; Looking for: " + lookFor + "<br>";
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
        percent: semiCount / numCharacters,
        fullString: fullStr,
      };
    }

    let totalChars = numCharacters * NUM_TESTS;
    let percentTotal = 0;

    for (let a = 0; a < NUM_TESTS; a++) {
      let test = semi();
      percentTotal += test.fullCount;
    }

    // FIXED: Average count per test divided by characters per test
    // This gives the true probability/proportion
    foundP = percentTotal / NUM_TESTS / numCharacters;
    console.log("${100 * foundP}%");
    eConsole.innerHTML += "<br>" + 100 * foundP + "%&nbsp;";
  }

  // Fixed final average calculation - remove redundant NUM_TESTS division
  let foundT = foundP; // foundP is already the correct average proportion
  console.log("Avg: " + 100 * foundT + "%");
  eConsole.innerHTML += "Average: " + 100 * foundT + "%";
};
