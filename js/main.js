// Get current year
$('#year').text(new Date().getFullYear());

// Init scrollspy
$('body').scrollspy({ target: '#main-nav' });

// Smooth scrolling
$('#main-nav a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();
    const hash = this.hash;
    $('html').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});

// Hide navbar when scroll down and show when scroll up
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('main-nav').style.top = '0';
  } else {
    document.getElementById('main-nav').style.top = '-100px';
  }
  prevScrollpos = currentScrollPos;
};

// Hide responsive menu onclick
$(function() {
  var navMain = $('.navbar-collapse');
  navMain.on('click', 'a:not([data-toggle])', null, function() {
    navMain.collapse('hide');
  });
});

// Read more
$('.more-trigger').on('click', function() {
  if ($(this).text() === 'Leia mais') {
    $(this)
      .siblings('.more')
      .css('display', 'block');
    $(this).text('Leia menos');
  } else {
    $(this)
      .siblings('.more')
      .css('display', 'none');
    $(this).text('Leia mais');
    $('html').animate(
      {
        scrollTop: $(this)
          .parent()
          .parent()
          .siblings('h2')
          .offset().top
      },
      800
    );
  }
});
