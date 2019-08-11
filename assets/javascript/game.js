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

        var randomNumber;

    //New game function
        function newGame() {
            
    //This generates the computer's random numbers from 19 - 120 
        randomNumber = Math.floor(Math.random()*102 + 19)
        console.log("this generates a random number:" + randomNumber);
        userScore = 0;

    //This displays the scores for the number to tie, wins, losses, and an alert
        $('#scoreToTie').text(randomNumber);
        $('#winScore').text(wins);
        $('#lossScore').text(losses);
        $('#alert').empty();
        $('#userScore').text(userScore);

    // //This generates random numbers from 1-12 for each of the four gems
    //     emeraldNumber = Math.floor(Math.random()*12 + 1)
    //         console.log("These are random numbers for the emeralds:" + emeraldNumber)
    //     var emeralds = $('#emeralds');
    //         emeralds.attr("data-gemValue", emeraldNumber);

    //     opalNumber = Math.floor(Math.random()*12 + 1)
    //     var opals = $('#opals');
    //         opals.attr('data-gemValue', opalNumber);

    //     rubyNumber = Math.floor(Math.random()*12 + 1)
    //     var rubies = $('#rubies');
    //         rubies.attr('data-gemValue', rubyNumber);

    //     tigerEyeNumber = Math.floor(Math.random()*12 + 1)
    //     var tigersEyes = $('#tigersEyes');
    //         tigersEyes.attr('data-gemValue', tigerEyeNumber);
     
    //jQuery each method to cut down on repetitive coding - this loops over the class img-thumbnail
            $('.img-thumbnail').each(function() {
                var random = Math.floor(Math.random()*12 + 1)
                $(this).attr('data-gemValue', random);
            })
        }

    //This is the game start function / on click listener for the Start Button  
    $('.btn-block').on('click', newGame)

      //This is the function / event listener when the user clicks the gems
      $('.img-thumbnail').on('click', function() {

        //this prevents NaN appearing when clicking on gem image
        if (!randomNumber) {
            return false
        }
        var gemValue = ($(this).attr('data-gemValue'));
        gemValue = parseInt(gemValue);
        userScore += gemValue;
    $('#userScore').text(userScore);
    if (userScore === randomNumber) {
        $('#alert').append("You've won !");
        wins ++;
        newGame();
    }
    else if (userScore > randomNumber) {
        $('#alert').append("You've lost!");
        losses ++;
        newGame();
    }
});
    
});

