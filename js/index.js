$(function() {
    var current = $("nav > a"); // pega o primeiro elemento do menu.

    $("nav a").on("click", function() {
        $(current).removeClass("active"); // remove a classe do elemento atual
        current = $(this);
        $(current).addClass("active");
    });
});

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500, function() {
                // Callback after animation
                // Must change focus!
                /*var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                  return false;
                } else {
                  $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                  $target.focus(); // Set focus again
                };*/
            });
        }
    }
});

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("content-slide");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

var myIndex2 = 0;
carousel2();

function carousel2() {
    var i;
    var x = document.getElementsByClassName("content-slide2");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex2++;
    if (myIndex2 > x.length) { myIndex2 = 1 }
    x[myIndex2 - 1].style.display = "block";
    setTimeout(carousel2, 2000); // Change image every 2 seconds
}
