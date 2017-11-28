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
        $(".robot").removeClass("back");
        $(".robot").removeClass("right");
        $(".robot").addClass("left");
    }
    else if (event.keyCode === 68) {
        // d
        $(".robot").removeClass("left");
        $(".robot").removeClass("back");
        $(".robot").addClass("right");
    }
    else if (event.keyCode === 87) {
        // w
        $(".robot").removeClass("left");
        $(".robot").removeClass("right");
        $(".robot").addClass("back");
    }
    else if (event.keyCode === 83) {
        // s
        $(".robot").removeClass("left");
        $(".robot").removeClass("right");
        $(".robot").removeClass("back");
    }
    else if (event.keyCode === 13) {
        // enter
        
    }
});
