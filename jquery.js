$(document).ready(function () {
    $('.log').mouseenter(function () {
        $('.profile').css("display", "block")
    });

    $('.profile').mouseenter(function () {
        $('.profile').css("display", "block")
    });

    $('.log,.profile').mouseleave(function () {
        $('.profile').css("display", "none")
    });



    $('.tre').mouseenter(function () {
        $('.profile1').css("display", "block")
    });

    $('.profile1').mouseenter(function () {
        $('.profile1').css("display", "block")
    });

    $('.tre,.profile1').mouseleave(function () {
        $('.profile1').css("display", "none")
    });




    $('#dbutton').click(function () {
        $('body').css("color", "white");
        $('body').css("background-color", "black");
        $('.nav-link').css("color", "white");
        $('.nav-tabs').css("background-color", "black");
       
        $('.navbar').css("background", "black");
        $('.log').attr("src", "https://thumbs.dreamstime.com/b/user-icon-linear-gray-background-106603449.jpg");
         $('.book-now-section').css("color", "white");
        $('.book-now').css("background-color", "black");
         $('.textcolor').css("color", "white");


    });

    $('#lbutton').click(function () {
        $('body').css("color", "black");
        $('body').css("background-color", "white");
        $('.nav-link').css("color", "transparent");
        $('.navbar').css("background", "white");
        $('.log').attr("src", "https://pic.onlinewebfonts.com/thumbnails/animations_258083.svg?width=12")

    });

});
$(document).ready(function () {
    $('body').click(function () {
        loadGoogleTranslate();
    });
});
function loadGoogleTranslate() {
    new google.translate.TranslateElement("gtrans");

}

    $('.slider-btn-left1').click(function () {
        $('.slidebar11').animate({ scrollLeft: "-=300" }, "fast");
    });

    $('.slider-btn-right1').click(function () {
        $('.slidebar11').animate({ scrollLeft: "+=300" }, "fast");
    });


    