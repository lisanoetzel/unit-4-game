//This loads HTML, CSS before JavaScript & jQuery
$(document).ready(function(){
    //This generates random numbers from 19 - 120
        var randomNumber = Math.floor(Math.random()*102 + 19)
            //console.log("this generates a random number:" + randomNumber);
    //This displays the random number on the screen
        $('#scoreToTie').text(randomNumber);
            
})