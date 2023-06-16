$(function () {
  $(window).on("scroll", function () {
    let sct = $(window).scrollTop();
    sct > 0 ? $(".header").addClass("on") : $(".header").removeClass("on");
  });

  $(".la_chg span").on("click", function () {
    $(this).toggleClass("on");
    $(this).next().toggleClass("on");
  });
  $(".main_slide").slick({
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  $(".main_product_slide").on("init afterChange", function (e, s, c) {
    $(".main_product .itm").eq(c).addClass("on").siblings().removeClass("on");

    $(".main_product .slide_num span").text(c ? c + 1 : 1);
    $(".main_product .slide_num strong").text(s.slideCount);
  });

  $(".main_product_slide").slick({
    arrows: false,
    fade: true,
    asNavFor: ".main_product_list_slide",
  });

  $(".main_product_list_slide").slick({
    slidesToShow: 3,
    asNavFor: ".main_product_slide",
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".main_product .arrows .left").on("click", function () {
    $(".main_product_slide").slick("slickPrev");
  });
  $(".main_product .arrows .right").on("click", function () {
    $(".main_product_slide").slick("slickNext");
  });

  $(".to_top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
  });

  $(window).on("scroll", function () {
    let sct = $(window).scrollTop();
    sct > 50 ? $(".to_top").addClass("on") : $(".to_top").removeClass("on");
  });

  $(".tab_link li").on("click", function (event) {
    event.preventDefault();

    let idx = $(this).index();

    $(this).addClass("on").siblings().removeClass("on");

    $(".tab_content .con").eq(idx).addClass("on").siblings().removeClass("on");
  });
});
