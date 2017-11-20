$(document).ready(function () {

    var counter1 = Math.floor((Math.random() * 11) + 1);
    var counter2 = Math.floor((Math.random() * 11) + 1);
    var counter3 = Math.floor((Math.random() * 11) + 1);
    var counter4 = Math.floor((Math.random() * 11) + 1);
    // random target number generates below the min number
    var targetNumber = Math.floor((Math.random() * 119 - 19) + 1);
    var scoreTotal = 0
    // var playerTotal = 0
    // parseInt(counter1) + parseInt(counter2) + parseInt(counter3) + parseInt(counter4);
    var wins = 0
    var losses = 0


    $(".crystal1").on("click", function () {
        scoreTotal = scoreTotal + counter1;
        $("#loot").html(scoreTotal);
        console.log("new total= " + scoreTotal);
    });

    $(".crystal2").on("click", function () {
        scoreTotal = scoreTotal + counter2;
        $("#loot").html(scoreTotal);
        console.log("new total= " + scoreTotal);
    });

    $(".crystal3").on("click", function () {
        scoreTotal = scoreTotal + counter3;
        $("#loot").html(scoreTotal);
        console.log("new total= " + scoreTotal);
    });

    $(".crystal4").on("click", function () {
        scoreTotal = scoreTotal + counter4;
        $("#loot").html(scoreTotal);
        console.log("new total= " + scoreTotal);
    });


    $("#loot").val(scoreTotal);
    console.log(scoreTotal)


    $("#target").text(targetNumber);


    // this loop is not working
    if (scoreTotal === targetNumber) {
        alert(person +" is triumphant!");
       $("#wins").html(wins++); 


    } else if (scoreTotal >= targetNumber) {
        alert(person + " fails.");
        losses++
    }

    // $("#loot").html(scoreTotal);


    var person = prompt("What is thy name brave one?");
    $("#adventurer").append(person);
});

// still need a game reset
// working on the addition of the clicks to create a running score total
// accounting for victories and losses
