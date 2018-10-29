$(document).ready(function () {
    var random = Math.floor(Math.random() * 102 + 19);
    $("#number").html("Number: " + random);
    var gem1 = Math.floor(Math.random() * 12 + 1);
    var gem2 = Math.floor(Math.random() * 12 + 1);
    var gem3 = Math.floor(Math.random() * 12 + 1);
    var gem4 = Math.floor(Math.random() * 12 + 1);
    var compTotal = random;
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
//reset function called after a win/loss
    function reset() {
        var random = Math.floor(Math.random() * 102 + 19);
        $("#number").html("Number: " + random);
        gem1 = Math.floor(Math.random() * 12 + 1);
        gem2 = Math.floor(Math.random() * 12 + 1);
        gem3 = Math.floor(Math.random() * 12 + 1);
        gem4 = Math.floor(Math.random() * 12 + 1);
        userTotal = 0;
        $("#user").text("Your Score: " + userTotal);
        } 
  //win alert function and adding wins to the tally
    function winning() {
        alert("You won!");
        wins++; 
        $("#bing").html("Wins: " + wins);
        reset();
        }
  //loss alert function and adding losses to the tally
    function losing() {
        alert ("You lose!");
        losses++;
        $("#bong").html("Losses: " + losses);
        reset();
        }
        //click handler for gem1
    $("#image1").click(function () {
        userTotal = userTotal + gem1;
        console.log(userTotal);
        if (userTotal === compTotal) {
            winning();
        } else if (userTotal > compTotal) {
            losing();
        }
        $("#user").html("Your Score: " + userTotal);
    });
    //click handler for gem2
    $("#image2").click(function () {
        userTotal = userTotal + gem2;
        console.log(userTotal);
        if (userTotal === compTotal) {
            winning();
        } else if (userTotal > compTotal) {
            losing();
        }
        $("#user").html("Your Score: " + userTotal);
    });
    //click handler for gem3
    $("#image3").click(function () {
        userTotal = userTotal + gem3;
        console.log(userTotal);
        if (userTotal === compTotal) {
            winning();
        } else if (userTotal > compTotal) {
            losing();
        }
        $("#user").html("Your Score: " + userTotal);
    });
    //click handler for gem4
    $("#image4").click(function () {
        userTotal = userTotal + gem4;
        console.log(userTotal);
        if (userTotal === compTotal) {
            winning();
        } else if (userTotal > compTotal) {
            losing();
        }
        $("#user").html("Your Score: " + userTotal);
    });





});