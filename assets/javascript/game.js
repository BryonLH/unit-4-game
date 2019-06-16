
//Global variables here
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var crystalVals = [];
var randomNum = 0;
var score = 0;
var wins = 0;
var losses = 0;

//randomize number for goal 19-120


//randomize number for the crystals 1-12
newGame = function (e) {
    while (crystalVals.length < 4) {
      var number = Math.floor(Math.random() * 13) + 1;
      if ($.inArray(number, crystalVals) == -1) {
        crystalVals.push(number);
        // $("#random-number").text(crystalVals);
        console.log(crystalVals);
      }
      crystal1 = crystalVals[0];
      crystal2 = crystalVals[1];
      crystal3 = crystalVals[2];
      crystal4 = crystalVals[3];
    }
    randomNum = Math.floor(Math.random() * 101) + 19;
  }

  newGame();
  console.log(crystal1);
  console.log(crystal2);
  console.log(crystal3);
  console.log(crystal4);
  console.log(randomNum);
  console.log("Score: " + score);

  $("#crystal1").on("click", function (e) {
    //   console.log("you clicked crystal1");
    score = score + crystal1;
    console.log("Score: " + score);

  });

  if (score === randomNum) {
      console.log("You win!");

  } else if (score > randomNum) {
      console.log("you lose!");
  }