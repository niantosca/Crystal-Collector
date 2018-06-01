$(document).ready(function() {

    var random = Math.floor(Math.random()*102+19);
    
    $("#number").text(random);



var gem1= Math.floor(Math.random()*12+1);
var gem2= Math.floor(Math.random()*12+1);
var gem3= Math.floor(Math.random()*12+1);
var gem4= Math.floor(Math.random()*12+1);
var compTotal= random;
var userTotal= 0;
var wins = 0;
var losses = 0;





$("#image1").click(function() {

    userTotal = userTotal + gem1;
   
    
    if (userTotal === compTotal) {
        wins++;
    }
   
    else if (userTotal > compTotal) {
        losses++;

    }
    
    $("#user").html(userTotal);
    $("#bing").html("Wins: " + wins);
    $("#bong").html("Losses: " + losses);



});

$("#image2").click(function() {

    userTotal = userTotal + gem2;
    console.log(userTotal);

    if (userTotal === compTotal) {
        wins++;
    }

    else if (userTotal > compTotal) {
        losses++;

    }

    $("#user").html(userTotal);
    $("#bing").html("Wins: " + wins);
    $("#bong").html("Losses: " + losses);



});

$("#image3").click(function() {

    userTotal === userTotal + gem2;
    console.log(userTotal);

    if (userTotal === compTotal) {
        wins++;
    }

    else if (userTotal > compTotal) {
        losses;

    }

    $("#user").html(userTotal);
    $("#bing").html("Wins: " + wins);
    $("#bong").html("Losses: " + losses);



});

$("#image4").click(function() {

    userTotal === userTotal + gem2;
    console.log(userTotal);

    if (userTotal === compTotal) {
        wins++;
    }

    else if (userTotal > compTotal) {
        losses++;

    }

    $("#user").html(userTotal);
    $("#bing").html("Wins: " + wins);
    $("#bong").html("Losses: " + losses);



});

//$("#bing").html= "Wins: " + wins;
//$("#bong").html= "Losses: " + losses;





});
        