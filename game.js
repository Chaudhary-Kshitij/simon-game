var gamePattern = [];

var userChosenPattern = [];

var buttonColours = ["green", "red", "yellow", "blue"];

var randomChosenColour;

var level = 0;

$("body").one("keypress",function(event) { 
    autoRun();
});

$(".btn").click(function() {
    var userChosenColor = this.id;
    playSound(userChosenColor);
    animatePress(userChosenColor);
    userChosenPattern.push(userChosenColor);
    checkAnswer(userChosenPattern.length);
    console.log(userChosenPattern);
    
 });

 function autoRun() { 
    randomChosenColour = buttonColours[nextSequence()];
    // console.log(randomChosenColour);

    gamePattern.push(randomChosenColour);
    console.log(gamePattern);

     $("h1").text("Level "+level);
     
    $('#' + randomChosenColour).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}

function checkAnswer(currentLevel) {

    for (var j = 0; j < currentLevel; j++)
        {
    if (gamePattern[j] == userChosenPattern[j])
    {
        console.log(userChosenPattern.length);
        console.log(level);

        if (j+1 == level) {
                setTimeout(function () {
                    autoRun();
                    }, 1000);
                }
    
        
        console.log("success");
    }
    else
    {
   
        $("h1").text("Game Over, Press Any Key to Restart");
        console.log("Failure");
            $("body").addClass("game-over");
            var over = new Audio("sounds/wrong.mp3");
            over.play();
            setTimeout(function () {
                $("body").removeClass("game-over");
            }, 100);
        $("body").one("keypress", function () { 
        level = 0;
        userChosenPattern = [];
        gamePattern = [];    
        autoRun();
        });
        }
        }
}

    // console.log(gamePattern);
    // console.log(userChosenPattern);
    // console.log(gamePattern[userChosenPattern.length-1]);
    // console.log(userChosenPattern[userChosenPattern.length-1]);
    // if (gamePattern[userChosenPattern.length-1] != userChosenPattern[userChosenPattern.length-1])
    // {
    //     level = 0;
    //     $("h1").text("Game Over");
    //     return;
    // }
    // else
    // {
       
    //     }

    // if (currentLevel == userChosenPattern.length)
    // {
    //     userChosenPattern = [];
    //      setTimeout(function () {
    //     autoRun();
    // }, 1000);
    //     }



 function playSound(name) {
     var audio = new Audio("sounds/"+name+".mp3");
     audio.play();
 }

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4)
    level++;
    userChosenPattern = [];
    return randomNumber;
}