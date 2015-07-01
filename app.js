// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    playerCash = 100;

    //Updates Player's cash each time it is called
    var updatePlayerCash = function () {
        $('.money').text(playerCash);
    };

    var showResults = function () {
        $('.number-label').hide();
        $('.btn-guess').hide();
        $('.bet-label').show();
        $('.btn-bet').show();
        $('.score-label').show();  
    };

    //Compare the choices of the players
    var compareResults = function(player1Choice, player2Choice) {
        if (player1Choice === player2Choice) {
            var win = playerBet * 2;
            playerCash = playerCash + win;
            updatePlayerCash();
            $('<h2 class="message">').appendTo(".intro-body").text("Nice play! You won $" + win).css('color', 'green');
            showResults();          
            // alert("Computer choice was: " + player1Choice + ". Your choice was: " + player2Choice + ". Nice play! You won $" + win + ". Your cash is now $" + playerCash);

        } else if (player1Choice === player2Choice -1 || player1Choice === player2Choice + 1) {
            updatePlayerCash();
            $('<h2 class="message">').appendTo(".intro-body").text("Almost! You will keep your bet.").css('color', 'orange');
            showResults(); 
            // alert("Computer choice was: " + player1Choice + ". Your choice was: " + player2Choice + ". Almost! You will keep your bet. Your cash is now $" + playerCash);
        } else {
            var lost = playerBet;
            playerCash = playerCash - playerBet;
            updatePlayerCash();
            $('<h2 class="message">').appendTo(".intro-body").text("Wrong choice. You have lost $" + playerBet).css('color', 'red');
            showResults(); 
            // alert("Computer choice was: " + player1Choice + ". Your choice was: " + player2Choice + ". You have lost your bet! Your cash is now $" + playerCash);
        }
    }

    var match = function() {
        compareResults(computerChoice, playerChoice); 
    }

    $('.brand-heading').on('click', function() {
        $(this).hide();
        $('.btn-circle').hide();
        $('.bet-label').show();
        $('.btn-bet').show();
        $('.score-label').show();
    });

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
        }
    });

    $('.btn-guess').on('click', function() {
        playerChoice = $(this).data("guess");
        computerChoice = Math.ceil(Math.random()*10);
        match();
    });

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

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});