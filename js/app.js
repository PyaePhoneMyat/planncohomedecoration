$(document).ready(function () {
  // Start back to top
  $(".btn-backtotops").hide();
  $(window).scroll(function () {
    let getscrolltop = $(this).scrollTop();
    // console.log(getscrolltop);

    if (getscrolltop >= 740) {
      $(".btn-backtotops").fadeIn(1000);
    } else {
      $(".btn-backtotops").fadeOut(1000);
    }
  });
  // End back to top

  // Start Header

  // Start nav

  //for bugger
  $(".navbuttons").click(function () {
    $(".navbuttons").toggleClass("crossxs");
  });

  //for nav
  $(window).scroll(function () {
    let getscrolltop = $(this).scrollTop();

    // console.log(getscrolltop);
    if (getscrolltop >= 200) {
      $(".navbar").addClass("navmenus");
    } else {
      $(".navbar").removeClass("navmenus");
    }
  });
  // End nav

  // End Header

  // Start Properties
  $(".propertylists").click(function () {
    //For active item

    // $(this).addClass("activeitems");
    // $(this).siblings().removeClass("activeitems");
    $(this).addClass("activeitems").siblings().removeClass("activeitems");

    //For filter

    let getattvalue = $(this).attr("data-filter");
    // console.log(getattvalue);

    if (getattvalue === "all") {
      $(".filters").show("slide", 500);
    } else {
      $(".filters").hide();

      // $(".filters").not(`.${getattvalue}`).hide("slide", 500);

      $(".filters").filter(`.${getattvalue}`).show("slide", 500);
    }
  });

  lightbox.option({
    showImageNumberLabel: false,
    wrapAround: true,
    alwaysShowNavOnTouchDevices: true,
  });
  // End Properties

  // Start Ads
  $(window).scroll(function () {
    let getScrollTop = $(this).scrollTop();
    // console.log(getScrollTop);

    if (getScrollTop >= 900) {
      $(".advimages").addClass("fromlefts");
      $(".advtexts").addClass("fromrights");
    } else {
      $(".advimages").removeClass("fromlefts");
      $(".advtexts").removeClass("fromrights");
    }
  });
  // End Adv

  // Start Footer Section
  const getyear = $("#getyear");
  const getfullyear = new Date().getUTCFullYear();
  getyear.text(getfullyear);
  // End Footer Section
});
