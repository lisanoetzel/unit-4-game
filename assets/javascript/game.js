//This loads HTML, CSS before JavaScript & jQuery
$(document).ready(function(){
    //This generates random numbers from 19 - 120
        var randomNumber = Math.floor(Math.random()*102 + 19)
            //console.log("this generates a random number:" + randomNumber);
    //This displays the random number on the screen
        $('#scoreToTie').text(randomNumber);
    //This generates random numbers from 1-12 for each of the four gems
        var randomEmeraldNumber = Math.floor(Math.random()*12 + 1)
        var randomOpalNumber = Math.floor(Math.random()*12 + 1)
        var randomRubyNumber = Math.floor(Math.random()*12 + 1)
        var randomTigerEyeNumber = Math.floor(Math.random()*12 + 1)
            //console.log("These are random numbers:" + randomEmeraldNumber);  
    //Variables for user score, wins & losses
        var userInitialScore = 0;
        var wins = 0;
        var losses = 0;
    //This displays the wins or losses on the screen
        $('#wins').text(wins);
        $('#losses').text(losses);
    //This is the game function
        function game () {
            randomNumber = Math.floor(Math.random()*102 + 19)
            $('#scoreToTie').text(randomNumber);
            randomEmeraldNumber = Math.floor(Math.random()*12 + 1)
            randomOpalNumber = Math.floor(Math.random()*12 + 1)
            randomRubyNumber = Math.floor(Math.random()*12 + 1)
            randomTigerEyeNumber = Math.floor(Math.random()*12 + 1)
            userInitialScore = 0;
            $('#userFinalScore').text(userInitialScore);
        }
    //This is the winner's notice
        function youWin() {
            alert("You have won!");
            wins++;
            $('#wins').text(wins);
            game()
        }
        //This is the loser's notice
        function youLose() {
            alert("You have lost!");
            losses++;
            $('#losses').text(losses);
            game()
        }
    //These are the on click events/listeners when the user clicks the gems
        $(.emeralds).on('click', function() {
            userInitialScore = userInitialScore + randomEmeraldNumber;
            console.log("Your score currently is " + userInitialScore);
            $('#userFinalScore').text(userInitialScore);
            if (userInitialScore === randomNumber) {
                youWin();
            else (userInitialScore > randomNumber){
                youLose();
            }
        })
        $(.opals).on('click', function() {
            userInitialScore = userInitialScore + randomOpalNumber;
            console.log("Your score currently is " + userInitialScore);
            $('#userFinalScore').text(userInitialScore);
            if (userInitialScore === randomNumber) {
                youWin();
            else (userInitialScore > randomNumber){
                youLose();
            }
        })
        $(.rubies).on('click', function() {
            userInitialScore = userInitialScore + randomRubyNumber;
            console.log("Your score currently is " + userInitialScore);
            $('#userFinalScore').text(userInitialScore);
            if (userInitialScore === randomNumber) {
                youWin();
            else (userInitialScore > randomNumber){
                youLose();
            }
        })
        $(.tigersEyes).on('click', function() {
            userInitialScore = userInitialScore + randomTigerEyeNumber;
            console.log("Your score currently is " + userInitialScore);
            $('#userFinalScore').text(userInitialScore);
            if (userInitialScore === randomNumber) {
                youWin();
            else (userInitialScore > randomNumber){
                youLose();
            }
        });
});