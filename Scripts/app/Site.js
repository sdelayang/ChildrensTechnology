document.addEventListener('keydown', function (event) {
    var marginTop = parseInt($(".robot").css("margin-top"));
    var left = parseInt($(".robot").css("left"));
    if (event.keyCode === 37) {
        // left
        $(".robot").css("left", left - 350 + "px");
    }
    else if (event.keyCode === 39) {
        // right
        $(".robot").css("left", left + 350 + "px");
    }
    else if (event.keyCode === 38) {
        // up
        $(".robot").css("margin-top", marginTop - 220 + "px");
    }
    else if (event.keyCode === 40) {
        // down
        $(".robot").css("margin-top", marginTop + 220 + "px");
    }
});
