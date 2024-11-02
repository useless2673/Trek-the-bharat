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
 $(document).ready(function () {
    const toggleButton = document.getElementById('toggleButton');
    const icon = document.getElementById('icon');

    // Check for saved theme in local storage and apply it
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // Toggle theme on button click
    toggleButton.addEventListener('click', () => {
      const currentTheme = $("body").hasClass('dark-mode') ? 'light' : 'dark';
      applyTheme(currentTheme);
      localStorage.setItem('theme', currentTheme);
    });

    // Function to apply theme
    function applyTheme(theme) {
      if (theme === 'dark') {
        $("body").addClass('dark-mode');
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
        // $(".logoo").css("filter", "invert(1) brightness(1.2)");

        // Set icon to sun for dark mode
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        icon.style.color = '#FFD700';
      } else {
        $("body").removeClass('dark-mode');
        $("body").css("color", "black");
        $("body").css("background-color", "rgb(249,249,249)");
        $(".nav-link").css("color", "transparent"); // Change to black
        $(".navbar").css("background", "white");
        $(".log").attr("src", "https://pic.onlinewebfonts.com/thumbnails/animations_258083.svg?width=12");
        $(".textcolor").css("color", "transparent"); // Change to black
        $(".second-custom-carousel-card").css("background", "rgb(249,249,249)");
        $(".book-now-section").css("color", "rgb(44,44,42)");
        $(".book-now-section").css("background-color", "rgb(249,249,249)");
        $(".timeline-content").css("color", "rgb(44,44,42)");
        $(".plantext").css("color", "rgb(44,44,42)");
        $(".logoo").css("filter", "none");
        $(".nav-tabs").css("background-color", "white");

        // Set icon to moon for light mode
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        icon.style.color = 'black';
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
