//This loads HTML, CSS before JavaScript & jQuery
$(document).ready(function(){

    //Global variables for user score, wins & losses
        var userScore = 0;
        var wins = 0;
        var losses = 0;

    //This is the initial value of each gem
        var emeraldNumber = 0;
        var opalNumber = 0;
        var rubyNumber = 0;
        var tigerEyeNumber = 0;

    //This is the game start function / on click listener for the Start Button  
    $('.btn-block').on('click', function() {

    //This generates the computer's random numbers from 19 - 120 
        var randomNumber = Math.floor(Math.random()*102 + 19)
            console.log("this generates a random number:" + randomNumber);

    //This displays the scores for the number to tie, wins, losses, and an alert
        $('#scoreToTie').text(randomNumber);
        $('#winScore').text(wins);
        $('#lossScore').text(losses);
        $('#alert').empty();

    //This generates random numbers from 1-12 for each of the four gems
        emeraldNumber = Math.floor(Math.random()*12 + 1)
            console.log("These are random numbers for the emeralds:" + emeraldNumber)
        var emeralds = $('#emeralds');
            emeralds.attr("data-gemValue", emeraldNumber);

        opalNumber = Math.floor(Math.random()*12 + 1)
        var opals = $('#opals');
            opals.attr('data-gemValue', opalNumber);

        rubyNumber = Math.floor(Math.random()*12 + 1)
        var rubies = $('#rubies');
            rubies.attr('data-gemValue', rubyNumber);

        tigerEyeNumber = Math.floor(Math.random()*12 + 1)
        var tigersEyes = $('#tigersEyes');
            tigersEyes.attr('data-gemValue', tigerEyeNumber);

     //This is the function / event listener when the user clicks the gems
        $('.img-thumbnail').on('click', function() {
                var gemValue = ($(this).attr('data-gemValue'));
                gemValue = parseInt(gemValue);
                userScore += gemValue;
            $('#userScore').text(userScore);
            if (userScore === randomNumber) {
                $('#alert').append("You've won !");
                wins ++;
                userScore = 0;
                $('#winScore').text(wins);
            }
            else if (userScore > randomNumber) {
                $('#alert').append("You've lost!");
                losses ++;
                userScore = 0;
                $('#lossScore').text(losses);
            }
        });
    });
}); 