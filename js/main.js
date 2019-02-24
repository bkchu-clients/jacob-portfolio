(function() {
  // set initial boolean if the bottom is hit
  var isBottom = false;

  function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
  }
  // while the window is scrolling
  $(window).scroll(function() {
    // if the user has hit the bottom of the page
    if ($(window).scrollTop() + $(window).height() >= getDocHeight()) {
      // set flag to true
      isBottom = true;
      // add the class that will flip the arrow
      $('.arrow-img').addClass('arrow-img--flipped');
    } else {
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
})();
