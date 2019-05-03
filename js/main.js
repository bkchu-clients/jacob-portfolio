(function() {
  var rotation = 0;

  jQuery.fn.rotate = function(degrees) {
    $(this).css({
      '-webkit-transform': 'rotate(' + degrees + 'deg)',
      '-moz-transform': 'rotate(' + degrees + 'deg)',
      '-ms-transform': 'rotate(' + degrees + 'deg)',
      transform: 'rotate(' + degrees + 'deg)' 
    });
    return $(this);
  };

  // start gallery
  if ($('.lightgallery')) {
    $('.lightgallery').lightGallery({
      selector: '.img__zoom'
    });
  }

  // set initial boolean flag and will be used to determine when the bottom is hit
  let isBottom = false;
  let isHeaderMinimized = false;

  function getDocHeight() {
    var D = document;
    return Math.max(D.body.scrollHeight, D.documentElement.scrollHeight, D.body.offsetHeight, D.documentElement.offsetHeight, D.body.clientHeight, D.documentElement.clientHeight);
  }
  // while the window is scrolling
  $(window).scroll(function() {
    $('.main-header__logo').rotate($(window).scrollTop() / 8);

    if ($(window).scrollTop() >= 250 && !isHeaderMinimized) {
      isHeaderMinimized = true;
      $('.main-header').addClass('main-header--minimized');
    } else if ($(window).scrollTop() < 250 && isHeaderMinimized) {
      isHeaderMinimized = false;
      $('.main-header').removeClass('main-header--minimized');
    }

    // if the user has hit the bottom of the page
    if ($(window).scrollTop() + $(window).height() / 2 >= getDocHeight() / 2 && !isBottom) {
      // set flag to true
      isBottom = true;
      // add the class that will flip the arrow
      $('.arrow-img').addClass('arrow-img--flipped');
    } else if ($(window).scrollTop() + $(window).height() / 2 < getDocHeight() / 2 && isBottom) {
      // otherwise set flag to false
      isBottom = false;
      // remove the arrow flipping class
      $('.arrow-img').removeClass('arrow-img--flipped');
    }
  });

  // we will use the flag here
  // if the arrow is clicked
  $('.arrow').click(function() {
    // if it is the bottom
    if (isBottom) {
      // scroll to the top
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    } else {
      // otherwise scroll to the bottom
      $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
    }
    return false;
  });

  $('.info, .info__image, .experiences, .space--two')
    .mouseenter(function() {
      $('.info__image').addClass('info__image--hovered');
    })
    .mouseleave(function() {
      $('.info__image').removeClass('info__image--hovered');
    });
})();
