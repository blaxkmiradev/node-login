const readline = require("readline");
const { MAX_TRIES, PASSWORD } = require("./config");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tries = 0;

function askPassword() {
  rl.question("Enter password: ", (input) => {
    if (input === PASSWORD) {
      console.log("Login successful");
      rl.close();
    } else {
      tries++;
      const remaining = MAX_TRIES - tries;

      if (remaining === 0) {
        console.log("Too many requests. Exiting...");
        rl.close();
      } else {
        console.log(`Wrong password. You have ${remaining} tries left.`);
        askPassword();
      }
    }
  });
}

askPassword();
