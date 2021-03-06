// jQuery to control game logic
// Also jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    playerCash = 100;

    //Updates Player's cash each time it is called
    var updatePlayerCash = function () {
        $('.money').text(playerCash);
    };

    //Reload the bet options to the player
    var newMatch = function () {
        $('.number-label').hide();
        $('.btn-guess').hide();
        $('.bet-label').show();
        $('.btn-bet').show();
        $('.score-label').show();  
    };

    //Compare the choice of the player with the computer choice and update results
    var compareResults = function(player1Choice, player2Choice) {
        if (player1Choice === player2Choice) {
            var win = playerBet * 2;
            playerCash = playerCash + win;
            updatePlayerCash();
            $('<h2 class="message message-right-guess">')
                .appendTo(".navbar")
                .text("Nice play! You won $" + win)
                .fadeOut(3000);
            newMatch();          
        } else if (player1Choice === player2Choice -1 || player1Choice === player2Choice + 1) {
            updatePlayerCash();
            $('<h2 class="message message-close-guess">')
                .appendTo(".navbar")
                .text("Almost! You will keep your bet.")
                .fadeOut(3000);
            newMatch(); 
        } else {
            var lost = playerBet;
            playerCash = playerCash - playerBet;
            updatePlayerCash();
            $('<h2 class="message message-wrong-guess">')
                .appendTo(".navbar")
                .text("Wrong choice. You have lost $" + playerBet)
                .fadeOut(3000);
            newMatch(); 
        }
    }

    //Check if user clicked on the Start Game button
    $('.brand-heading').on('click', function() {
        $(this).hide();
        $('.btn-circle').hide();
        $('.bet-label').show();
        $('.btn-bet').show();
        $('.score-label').show();
    });

    //Check if user clicked on the Bet button and if the play is allowed
    $('.btn-bet').on('click', function() {
        if (playerCash > 0) {
            playerBet = $(this).data("bet");
            $('.btn-bet').hide();
            $('.bet-label').hide();
            $('.number-label').show();
            $('.btn-guess').show();
        } else {
            alert("Game Over! You have lost all your money");
            $('.btn-bet').hide();
            $('.bet-label').hide();
            $('.score-label').hide();
            $('.brand-heading').show();
            playerCash = 100;
            updatePlayerCash();
        }
    });

    //Check if user clicked on the Guess Number button and start the comparisons
    $('.btn-guess').on('click', function() {
        playerChoice = $(this).data("guess");
        computerChoice = Math.ceil(Math.random()*10);
        $(".message").remove();
        compareResults(computerChoice, playerChoice);         
    });

});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});