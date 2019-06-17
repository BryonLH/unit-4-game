
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
var gameOver = false;

//randomize number for the crystals 1-12 and number for goal 19-120
newGame = function (e) {
    while (crystalVals.length < 4) {
        var number = Math.floor(Math.random() * 12) + 1;
        if ($.inArray(number, crystalVals) == -1) {
            crystalVals.push(number);
            console.log(crystalVals);
        }
        crystal1 = crystalVals[0];
        crystal2 = crystalVals[1];
        crystal3 = crystalVals[2];
        crystal4 = crystalVals[3];
    }
    randomNum = Math.floor(Math.random() * 101) + 19;
    score = 0;
    $("#score").text(score);
    $("#random-number").html("Target Gem Power: <span class='number-highlight'>" + randomNum + "</span>");
    $("#losses").text("Losses: " + losses);
    $("#wins").text("Wins: " + wins);
    $("#your-score").html("Your gem's magic power is <span class='number-highlight'>" + score + "</span>");
}

newGame();
console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);
console.log(randomNum);
console.log("Score: " + score);

updateGame = function (e) {
    $("#your-score").html("Your gem's magic power is <span class='number-highlight'>" + score + "</span>");
    if (score === randomNum) {
        console.log("You win!");
        wins++;
        $("#wins").text("Wins: " + wins);
        newGame();
    } else if (score > randomNum) {
        console.log("you lose!");
        losses++;
        $("#losses").text("Losses: " + losses);
        newGame();
    } else {
        
    }
}

$("#crystal1").on("click", function (e) {
    score = score + crystal1;
    console.log("Score: " + score);
    updateGame();
});

$("#crystal2").on("click", function (e) {
    score = score + crystal2;
    console.log("Score: " + score);
    updateGame();
});

$("#crystal3").on("click", function (e) {
    score = score + crystal3;
    console.log("Score: " + score);
    updateGame();
});

$("#crystal4").on("click", function (e) {
    score = score + crystal4;
    console.log("Score: " + score);
    updateGame();
});

