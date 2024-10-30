$(document).ready(function () {
  $(".log").mouseenter(function () {
    $(".profile").css("display", "block");
  });

  $(".profile").mouseenter(function () {
    $(".profile").css("display", "block");
  });

  $(".log,.profile").mouseleave(function () {
    $(".profile").css("display", "none");
  });

  $(".tre").mouseenter(function () {
    $(".profile1").css("display", "block");
  });

  $(".profile1").mouseenter(function () {
    $(".profile1").css("display", "block");
  });

  $(".tre,.profile1").mouseleave(function () {
    $(".profile1").css("display", "none");
  });

 $(document).ready(function() {
    // Check for saved theme in local storage and apply it
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      applyTheme(savedTheme);
    }

    $("#dbutton").click(function () {
      applyTheme('dark'); // Save the theme to local storage
      localStorage.setItem('theme', 'dark'); // Save the selected theme
    });

    $("#lbutton").click(function () {
      applyTheme('light'); // Save the theme to local storage
      localStorage.setItem('theme', 'light'); // Save the selected theme
    });

    // Function to apply theme
    function applyTheme(theme) {
      if (theme === 'dark') {
        $("body").css("color", "white");
        $("body").css("background-color", "rgb(44,44,42)");
        $(".nav-link").css("color", "white");
        $(".nav-tabs").css("background-color", "rgb(44,44,42)");
        $(".navbar").css("background", "rgb(44,44,42)");
        $(".log").attr("src", "https://thumbs.dreamstime.com/b/user-icon-linear-gray-background-106603449.jpg");
        $(".book-now-section").css("color", "rgb(249,249,249)");
        $(".book-now-section").css("background-color", "rgb(44,44,42)");
        $(".book-now").css("background-color", "rgb(44,44,42)");
        $(".textcolor").css("color", "white");
        $(".second-custom-carousel-card").css("background", "rgb(44,44,42)");
        $(".timeline-content").css("color", "rgb(249,249,249)");
        $(".plantext").css("color", "rgb(249,249,249)");
        $(".logoo").css("filter", "invert(1) brightness(1.2)");
      } else {
        $("body").css("color", "black");
        $("body").css("background-color", "rgb(249,249,249)");
        $(".nav-link").css("color", "transparent"); // Changed from transparent to black
        $(".navbar").css("background", "white");
        $(".log").attr("src", "https://pic.onlinewebfonts.com/thumbnails/animations_258083.svg?width=12");
        $(".textcolor").css("color", "transparent"); // Changed from transparent to black
        $(".second-custom-carousel-card").css("background", "rgb(249,249,249)");
        $(".book-now-section").css("color", "rgb(44,44,42)");
        $(".book-now-section").css("background-color", "rgb(249,249,249)");
        $(".timeline-content").css("color", "rgb(44,44,42)");
        $(".plantext").css("color", "rgb(44,44,42)");
        $(".logoo").css("filter", "none");
        $(".nav-tabs").css("background-color", "white");
      }
    }
  });
});
$(document).ready(function () {
  $("body").click(function () {
    loadGoogleTranslate();
  });
});
function loadGoogleTranslate() {
  new google.translate.TranslateElement("gtrans");
}

$(".slider-btn-left1").click(function () {
  $(".slidebar11").animate({ scrollLeft: "-=300" }, "fast");
});

$(".slider-btn-right1").click(function () {
  $(".slidebar11").animate({ scrollLeft: "+=300" }, "fast");
});
