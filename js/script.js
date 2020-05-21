
$(".header__slider").slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2500,
  dots: true
});

// var elem = document.getElementByClassName("header__slider")[0];
// if (elem.requestFullscreen) {
//   elem.requestFullscreen();
// } else if (elem.msRequestFullscreen) {
//   elem.msRequestFullscreen();
// } else if (elem.mozRequestFullScreen) {
//   elem.mozRequestFullScreen();
// } else if (elem.webkitRequestFullscreen) {
//   elem.webkitRequestFullscreen();
// }

// wow.init();

$("#send__button").click(function() {
  Swal.fire(
    "Successfully sent!",
    "We will call you back within 24hours!",
    "success"
  );
});

$(".section__nine-slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  dots: false
});

$("#send__button2").click(function() {
  Swal.fire(
    "Thank you for your request!",
    "We will get in touch with you with hours!",
    "success"
  );
});
