//Global Variables

// Tracks the attempts the user does to display and check for win.
let attempts = 0;
let hintAttempts = 0;
let successfulAttempts = 0;

// Defines variables for commonly used Document IDs
let gameDisplay = document.getElementById("grid-container");
let instructions = document.getElementById("instructions");
let commentary = document.getElementById("comment-box");

// Defines the array and variable for 'Checking color'
let colors = [];
let colorsChosen = [];
let checkColor = "";
let difficulty;

// Picking Difficulty -- Displays the difficulty buttons and populates the word bank.

function difficultyPick(level) {
  difficulty = level;

  // Easy Word Bank
  if (level === "easy") {
    console.log("Easy is chosen!");

    colors = [
      {
        name: "red",
        colorCSS: "red",
      },
      {
        name: "dark red",
        colorCSS: "darkred",
      },
      {
        name: "maroon",
        colorCSS: "maroon",
      },
      {
        name: "dark orange",
        colorCSS: "darkorange",
      },
      {
        name: "orange",
        colorCSS: "orange",
      },
      {
        name: "yellow",
        colorCSS: "yellow",
      },
      {
        name: "dark green",
        colorCSS: "darkgreen",
      },
      {
        name: "green",
        colorCSS: "green",
      },
      {
        name: "lime",
        colorCSS: "lime",
      },
      {
        name: "dark blue",
        colorCSS: "darkblue",
      },
      {
        name: "blue",
        colorCSS: "blue",
      },
      {
        name: "dark cyan",
        colorCSS: "darkcyan",
      },
      {
        name: "cyan",
        colorCSS: "cyan",
      },
      {
        name: "indigo",
        colorCSS: "indigo",
      },
      {
        name: "dark magenta",
        colorCSS: "darkmagenta",
      },
      {
        name: "magenta",
        colorCSS: "magenta",
      },
      {
        name: "purple",
        colorCSS: "purple",
      },
      {
        name: "dark violet",
        colorCSS: "darkviolet",
      },
      {
        name: "violet",
        colorCSS: "#7f00ff",
      },
      {
        name: "brown",
        colorCSS: "brown",
      },
      {
        name: "white",
        colorCSS: "white",
      },
      {
        name: "grey",
        colorCSS: "grey",
      },
      {
        name: "black",
        colorCSS: "black",
      },
    ];
  }

  // Medium Word Bank
  else if (level === "medium") {
    console.log("Medium is chosen!");

    colors = [
      {
        name: "blanched almond",
        colorCSS: "blanchedalmond",
      },

      {
        name: "aquamarine",
        colorCSS: "aquamarine",
      },

      {
        name: "floral white",
        colorCSS: "floralwhite",
      },

      {
        name: "ghost white",
        colorCSS: "ghostwhite",
      },

      {
        name: "golden rod",
        colorCSS: "goldenrod",
      },

      {
        name: "green yellow",
        colorCSS: "greenyellow",
      },

      {
        name: "crimson",
        colorCSS: "crimson",
      },

      {
        name: "antique white",
        colorCSS: "antiquewhite",
      },

      {
        name: "cornflower blue",
        colorCSS: "cornflowerblue",
      },

      {
        name: "corn silk",
        colorCSS: "cornsilk",
      },

      {
        name: "fuchsia",
        colorCSS: "fuchsia",
      },

      {
        name: "indian red",
        colorCSS: "indianred",
      },

      {
        name: "lawn green",
        colorCSS: "lawngreen",
      },

      {
        name: "coral",
        colorCSS: "coral",
      },

      {
        name: "navajo white",
        colorCSS: "navajowhite",
      },

      {
        name: "mint cream",
        colorCSS: "mintcream",
      },

      {
        name: "misty rose",
        colorCSS: "mistyrose",
      },

      {
        name: "olive drab",
        colorCSS: "olivedrab",
      },

      {
        name: "peach puff",
        colorCSS: "peachpuff",
      },

      {
        name: "rebecca purple",
        colorCSS: "rebeccapurple",
      },

      {
        name: "sandy brown",
        colorCSS: "sandybrown",
      },

      {
        name: "saddle brown",
        colorCSS: "saddlebrown",
      },
    ];
  }

  // Hard Word Bank
  else if (level === "hard") {
    console.log("Hard is chosen!");

    document.getElementById("wordBank").style.fontSize = "1.8em";

    colors = [
      {
        name: "squirt yellow",
        colorCSS: "#f8e432",
      },

      {
        name: "grand canyon brown",
        colorCSS: "#552011",
      },

      {
        name: "gobsmacker green",
        colorCSS: "#59d327",
      },

      {
        name: "deoxyribonucleic acid blue",
        colorCSS: "#ceeafc",
      },

      {
        name: "white..?",
        colorCSS: "#fefefe",
      },

      {
        name: "definitely white",
        colorCSS: "white",
      },

      {
        name: "😛",
        colorCSS: "#d604d6",
      },

      {
        name: "4i√3",
        hint: "math.png",
      },

      {
        name: "king von",
        hint: "kingvon.jpeg",
      },

      {
        name: "coquelicot",
        colorCSS: "#ff3800",
      },

      {
        name: "xanadu",
        colorCSS: "#738678",
      },

      {
        name: "bubblegum pink",
        colorCSS: "#ffc1cc",
      },

      {
        name: "chloroplast",
        colorCSS: "#86b272",
      },

      {
        name: "avocado seed",
        colorCSS: "#543939",
      },

      {
        name: "wine",
        colorCSS: "#73121f",
      },

      {
        name: "big mac meal",
        hint: "bigmac.png",
      },

      {
        name: "💩",
        colorCSS: "#573010",
      },

      {
        name: "zombie",
        colorCSS: "#699682",
      },

      {
        name: "indiana jones red",
        colorCSS: "#ae272e",
      },

      {
        name: "razzmatazz",
        colorCSS: "#ae272e",
      },

      {
        name: "fuzzy wuzzy",
        colorCSS: "#cc6666",
      },
    ];
  }

  // Once difficulty has been chosen, the difficulty screen goes away and instructions shows up
  document.getElementById("difficulty").style.display = "none";
  document.getElementById("instructionsContainer").style.display = "flex";

  // Instructions transition
  instructions.style.transition = "opacity 5s";
  instructions.style.opacity = "20";

  colorDisplay(); // <-- Calls to display all colors
}

// The 'I understand' button in the instructions
function continueGame() {
  document.getElementById("instructionsContainer").style.display = "none";

  gameDisplay.style.filter = "none";
  gameDisplay.style.transition = "filter 0.2s";
}

// Display colors -- This setups all the words in the word bank.

function colorDisplay() {
  // This portion creates a new array that is only names and alphabetical. Easier to read the word bank for user.
  let colorsSorted = colors.map((color) => color.name);
  colorsSorted = colorsSorted.sort();

  colorsSorted.forEach((color) => {
    document.getElementById("wordBank").innerHTML += `${color} <br>`;
  });

  colorRandomizer(); // <-- Calls to randomize colors
}

// Randomize Colors -- Selects 3 colors at random in the 'colors' array.

function colorRandomizer() {
  for (let i = 0; i < 3; i++) {
    // <-- Three times, select a random color object in the color array.
    randomNum = Math.floor(Math.random() * colors.length);
    check = colors[randomNum];
    let colorRemove = colors.splice(randomNum, 1); //<--  This takes out the color from the array to prevent the same color picked twice
    colorsChosen.unshift(check);
    console.log(check);
  }

  console.log(colorsChosen);
  hintGenerator()
}

// This Event Listener here is a short bit of code that allows the user to press the 'Enter' key instead of the on-screen button.

document
  .getElementById("colorInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      colorChecker();
    }
  });

// Check Color! -- Runs when user clicks button to check if input matches.

function colorChecker() {
  let color = document.getElementById("colorInput").value; // <-- Grab user's input
  let colorInput = color.toLowerCase().trim(); // <-- This allows the user to add white space and capitalization without any problem in code.
  checkColor = "";

  if (colorInput !== "") {
    // <-- If the user inputs something, increase the attempt count
    document.getElementById("attemptNum").innerHTML = attempts + 1;
    attempts++;
  }

  if (colorInput === "") {
    // <-- If the user does not type anything in input, they are notified.
    document.getElementById(
      "result"
    ).innerHTML = `Yeah, you got to pick a color...`;
  } else {
    for (i = 0; i < colorsChosen.length; i++) {
      // Creates a loop checking if 'colorInput' matches 'colorsChosen'
      console.log(colorInput);
      console.log(colorsChosen[i].name);
      if (colorsChosen[i].name === colorInput) {
        // If yes
        checkColor = true;
        successfulAttempts++;
        console.log("Successful attempts:", successfulAttempts);
        document.getElementById("successfulAttemptNum").innerHTML =
          successfulAttempts;

        break;
      } else {
        // If no
        checkColor = false;
      }
    }

    console.log(checkColor);

    if (checkColor) {
      // <-- If the color is right, notify user
      document.getElementById(
        "result"
      ).innerHTML = `You got the color ${colorInput}!`;



      // This labelles the hint blocks below so you know which color you got.
      console.log("Color Input ID Div:", document.getElementById(colorInput))
      if (document.getElementById(colorInput) !== null) {
        console.log("1. Passed null test")



        if (colorInput !== "king von") {
          console.log("Passed king von test")
          if (colorInput !== "big mac meal") {
            console.log("Passed big mac test")
            if (colorInput !== "4i√3") {
              console.log("Passed math test")
              document.getElementById(
                colorInput
              ).innerHTML = `<div class="colorBlockText">${colorInput}</div>`;
            }
          }
        }

        if (colorInput === "deoxyribonucleic acid blue") {
          console.log("2. Passed DNA Test")
          document.getElementById(colorInput).innerHTML = `<div class="colorBlockText">DNA Blue</div>`;
        }
    }
    } else {
      // <-- If color is not right, notify user.
      document.getElementById(
        "result"
      ).innerHTML = `You did not get the color...`;
    }
  }

  manCommentary(colorInput); // <-- Calls for man to talk to user
  document.getElementById("colorInput").value = ""; // <-- Resets input back to nothing.
  console.log("Attempts:", attempts);
  checkWin(); // <-- Check if user won
}

// Creating hints by giving color



  function hintGenerator() {
    for (let i = 0 ; i < 3; i++) {
      console.log("Hint loop started")
      console.log(i)
      console.log(colorsChosen[i])
      if (colorsChosen[i].name === "king von") {
        // If the color is king von, do these special instructions:
        document.getElementById("colorBlocks").innerHTML += `
                  <img src="kingvon.jpeg" alt ='king von' style="width: 100px; height: 100px;">
              `;
    
        hintAttempts++;
        console.log(hintAttempts);
      } else if (colorsChosen[i].name === "4i√3") {
        // If the color is the math, do these special instructions:
        document.getElementById("colorBlocks").innerHTML += `
                  <img src="math.png" alt ='answer' style="width: 100px; height: 100px;">
              `;
    
        hintAttempts++;
        console.log(hintAttempts);
      } else if (colorsChosen[i].name === "big mac meal") {
        // If the color is big mac meal, do these special instructions:
        document.getElementById("colorBlocks").innerHTML += `
                  <img src="bigmac.png" alt ='big mac meal' style="width: 100px; height: 100px;">
              `;
    
        hintAttempts++;
        console.log(hintAttempts);
      }

      else {
        let color = colorsChosen[i];
        document.getElementById("colorBlocks").innerHTML += `
                <div style="background-color: ${color.colorCSS}" class="colorBlock" id="${color.name}"></div>
            `;
      }
    }
    }

// You Win Screen
function checkWin() {
  if (successfulAttempts === 3) {
    let winStyle = document.getElementById("youWin"); // Will later be used to style the 'You Win Screen' // Variable for the container of the game.

    // I learned how to use filters in my own time!
    gameDisplay.style.filter = "blur(3px)";

    // Style of the youWin box -- Sets youWin container from 'none' to 'flex' so it shows up.
    winStyle.style.display = "flex";
  }
}

// Win Screen -- Try Again Button

function tryAgain() {
  window.location.reload();
}

// Walter White?????

function manCommentary(color) {
  if (color === "") {
    commentary.innerHTML =
      "You need to use the word bank on the left, it's kinda obvious 🤷‍♂️";
  } else if (attempts === 1 && successfulAttempts === 1) {
    commentary.innerHTML =
      "THE FIRST TRY?! 😲 Touche player, you either got lucky or know your colors! 😉";
  } else if (attempts === 2 && successfulAttempts === 2) {
    commentary.innerHTML =
      "TWO IN A ROW. CALM DOWN PLAYER YOU'RE ON FIRE! 🔥 ONE MORE AND YOU WIN";
  } else {
    if (successfulAttempts === 1 && checkColor === true) {
      document.getElementById(
        "img-container"
      ).innerHTML = `<img src="manhappy.png" alt= "man happy" id="man">`;
      commentary.innerHTML =
        "<b>Player!!!</b> You got your first color! I'm so proud of you! Keep going 🥳";
    } else if (successfulAttempts === 2 && checkColor === true) {
      document.getElementById(
        "img-container"
      ).innerHTML = `<img src="manhappy.png" alt= "man happy" id="man">`;
      commentary.innerHTML =
        "Second color player! Good job you are doing extraordinary! One more and you win!";
    } else if (successfulAttempts === 3 && checkColor === true) {
      document.getElementById(
        "img-container"
      ).innerHTML = `<img src="manhappy.png" alt= "man happy" id="man">`;
      commentary.innerHTML = "YOU DID IT!!!!!!!!!!!!!!!!";
    } else {
      if (attempts > 3) {
        document.getElementById(
          "img-container"
        ).innerHTML = `<img src="man-angry.png" alt= "man angry" id="man">`;
        document.getElementById("wordBank").style.fontSize = "1.6em";
      }

      if (attempts > 14) {
        document.getElementById(
          "img-container"
        ).innerHTML = `<img src="veryangry.jpg" alt= "man angry" id = "man" style="width: 50%;">`;
        document.getElementById("wordBank").style.fontSize = "1.6em";
      }

      if (attempts === 1) {
        commentary.innerHTML =
          "Ok ok your first attempt! Don't worry let's keep going.";
      }

      if (attempts === 2) {
        commentary.innerHTML =
          "Second attempt: Ok ok! You got hints on the bottom btw.";
      }

      if (attempts === 3) {
        commentary.innerHTML =
          "Three attempts.. Unfortunately you couldn't guess all three, but you have unlimited attempts!";
      }

      if (attempts === 4) {
        commentary.innerHTML = `Four attempts... <span style="color: red; font-weight: bold;">Are you colorblind?</span>`;
      }

      if (attempts === 5) {
        commentary.innerHTML =
          "Now we're at five. You know, I heard glasses are a great investment!";
      }

      if (attempts === 6) {
        commentary.innerHTML = `I know colors are pretty difficult player. If only colors were taught in kindergarden.`;
      }

      if (attempts === 7) {
        commentary.innerHTML = `User, if you are having a reallyyy hard time, you can search up the colors online.`;
      }

      if (attempts === 8) {
        commentary.innerHTML = `They would be under <u>CSS colors.</u> If you're in hard mode, unfortunately you're at a loss.`;
      }

      if (attempts === 9) {
        commentary.innerHTML = `Ok user. I'm going to make a deal with you. At 15 attempts, I will give you a <b>big hint</b>. But try a little more.`;
      }

      if (attempts === 10) {
        commentary.innerHTML = `Ready user? 5 more attempts for a big hint!`;
      }

      if (attempts === 15) {
        document.getElementById("wordBank").innerHTML = "";

        let colorsOriginal = colors;

        colorsChosen.forEach((color) => colorsOriginal.unshift(color));

        colorsOriginal = colorsOriginal.sort(function (a, b) {
          if (a.name < b.name) {
            return -1;
          } else if (a.name > b.name) {
            return 1;
          } else {
            return 0;
          }
        });
        console.log(colorsOriginal);

        colorsOriginal.forEach((color) => {
          document.getElementById(
            "wordBank"
          ).innerHTML += `<div class= "attemptBox"style="background-color: ${color.colorCSS}"></div> ${color.name} <br>`;
        });

        if (difficulty === "hard") {
          document.getElementById(
            "wordBank"
          ).innerHTML += `<div style="font-size: 1rem; color: red; text-align: center;"> ⚠ Please note some 'colors' won't be shown because they're pictures. ⚠</div>`;
        }

        commentary.innerHTML = `THERE. NO MORE HINTS. NO MORE ME. <br> Just know the pictures don't have colors.`;
      }
    }
  }
}
