$( document ).ready(function(){
    var goal = $(".goal");
    // random number between 1 and 6
    var randomNumber = Math.floor((Math.random() * 6) + 1);
    var grassWidth = $(".grassTile").width();
    var left = parseInt($(".goal").css("left"));

    switch(randomNumber) {
        case 1:
            $(".goal").addClass("row1");
            break;

        case 2:
            $(".goal").addClass("row1");
            $(".goal").css("left", left + grassWidth + "px");
            break;

        case 3:
            $(".goal").addClass("row1");
            $(".goal").css("left", left + (grassWidth * 2) + "px");
            break;

        case 4:
            $(".goal").addClass("row2");
            $(".goal").css("left", left + grassWidth + "px");
            break;

        case 5:
            $(".goal").addClass("row2");
            $(".goal").css("left", left + (grassWidth * 2) + "px");
            break;

        case 6:
            $(".goal").addClass("row3");
            $(".goal").css("left", left + (grassWidth * 2) + "px");
            break;
        
        default:
            $(".goal").addClass("row1");
            $(".goal").css("left", left + (grassWidth * 2) + "px");
            break;
    }
});

document.addEventListener('keydown', function (event) {
    var grassWidth = $(".grassTile").width();
    var marginTop = parseInt($(".robot").css("margin-top"));
    var left = parseInt($(".robot").css("left"));

    if (event.keyCode === 37 || event.keyCode === 39 || event.keyCode === 38 || event.keyCode === 40 || event.keyCode === 65 || event.keyCode === 68 || event.keyCode === 87 || event.keyCode === 83)
    {
        $(".step").trigger("play");
    }

    if (event.keyCode === 37) {
        // left
        $(".robot").css("left", left - grassWidth + "px");
    }
    else if (event.keyCode === 39) {
        // right
        $(".robot").css("left", left + grassWidth + "px");
    }
    else if (event.keyCode === 38) {
        // up
        $(".robot").css("margin-top", marginTop - 220 + "px");
    }
    else if (event.keyCode === 40) {
        // down
        $(".robot").css("margin-top", marginTop + 220 + "px");
    }
    else if (event.keyCode === 65) {
        // a
        $(".robot").removeClass("forward");
        $(".robot").removeClass("right");
        $(".robot").addClass("left");
    }
    else if (event.keyCode === 68) {
        // d
        $(".robot").removeClass("left");
        $(".robot").removeClass("forward");
        $(".robot").addClass("right");
    }
    else if (event.keyCode === 87) {
        // w
        $(".robot").removeClass("left");
        $(".robot").removeClass("right");
        $(".robot").removeClass("forward");
    }
    else if (event.keyCode === 83) {
        // s
        $(".robot").removeClass("left");
        $(".robot").removeClass("right");
        $(".robot").addClass("forward");
    }
    else if (event.keyCode === 13) {
        // enter
        $(".background").trigger("pause");
        $(".reachGoal").trigger("play");

        setTimeout(function(){
            $(".reachGoal").trigger("pause");
            animation();
        }, 2500);
    }
});

function animation() {
    // random number between 1 and 4
    var randomNumberSound = Math.floor((Math.random() * 4) + 1);
    // random number between 1 and 12
    var randomNumberAnimation = Math.floor((Math.random() * 12) + 1);

    switch(randomNumberSound) {
        case 1:
            $(".sound1").trigger("play");
            break;

        case 2:
            $(".sound2").trigger("play");
            break;

        case 3:
            $(".sound3").trigger("play");
            break;

        case 4:
            $(".sound4").trigger("play");
            break;
        
        default:
            $(".sound1").trigger("play");
            break;
    }
    
    switch(randomNumberAnimation) {
        case 1:
            $(".animation1").fadeIn();
            break;

        case 2:
            $(".animation2").fadeIn();
            break;

        case 3:
            $(".animation3").fadeIn();
            break;

        case 4:
            $(".animation4").fadeIn();
            break;
        
        case 5:
            $(".animation5").fadeIn();
            break;

        case 6:
            $(".animation6").fadeIn();
            break;

        case 7:
            $(".animation7").fadeIn();
            break;

        case 8:
            $(".animation8").fadeIn();
            break;

        case 9:
            $(".animation9").fadeIn();
            break;

        case 10:
            $(".animation10").fadeIn();
            break;

        case 11:
            $(".animation11").fadeIn();
            break;

        case 12:
            $(".animation12").fadeIn();
            break;
        
        default:
            $(".animation1").fadeIn();
            break;
    }
}
