// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

(function(){
    playerCash = 100;

    var bet = function() {
        computerChoice = Math.ceil(Math.random()*10);
        playerBet = prompt("What is your bet, between $5 and $10?");
        while (playerBet < 5 || playerBet > 10) {
            alert("Invalid bet. Please try again");
            playerBet = prompt("What is your bet, between $5 and $10?");    
        }        
        playerChoice = prompt("Choose a number between 1 and 10:");
        while (playerChoice < 1 || playerChoice > 10) {
            alert("Invalid number. Please try again");
            playerChoice = prompt("Choose a number between 1 and 10:");
        }
    }

    var compareResults = function(player1Choice, player2Choice) {
        if (player1Choice === player2Choice) {
            var win = playerBet * 2;
            playerCash = playerCash + win;
            alert("Computer choice was: " + player1Choice + ". Your choice was: " + player2Choice + ". Nice play! You won $" + win + ". Your cash is now $" + playerCash);
        } else if (player1Choice === player2Choice -1 || player1Choice === player2Choice + 1) {
            alert("Computer choice was: " + player1Choice + ". Your choice was: " + player2Choice + ". Almost! You will keep your bet. Your cash is now $" + playerCash);
        } else {
            var lost = playerBet;
            playerCash = playerCash - playerBet;
            alert("Computer choice was: " + player1Choice + ". Your choice was: " + player2Choice + ". You have lost your bet! Your cash is now $" + playerCash);
        }
    }

    var match = function() {
        while (playerCash > 0) {
          bet();
          compareResults(computerChoice, playerChoice); 
        }
        alert("Game Over! You have lost all your money");
    }

    match();
}());

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});



