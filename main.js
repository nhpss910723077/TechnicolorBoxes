$(document).ready(function () {

    for (var i = 0; i < 81; i++) {
        $("#main").append("<div class='box'></div>")
    }
    
    function randomColor() {
        return "#" + Math.random().toString(16).slice(2, 8);
    };

    $(".box").on("mouseenter", function () {
        $(this).css("background-color", randomColor());
        $(this).css("box-shadow", "0 0 8px white");
        $(this).css("z-index", "2");
    });

    $(".box").on("mouseleave", function () {
        $(this).css("box-shadow", "none");
        $(this).css("z-index", "1");
    });
});