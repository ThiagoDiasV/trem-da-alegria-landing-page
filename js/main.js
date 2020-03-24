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
  if (prevScrollpos > currentScrollPos || currentScrollPos < 200) {
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
  if (
    $(this)
      .text()
      .trim() === 'Continuar lendo'
  ) {
    $(this)
      .siblings('.more')
      .css('display', 'block');
    $(this).text('Diminuir texto');
  } else {
    $(this)
      .siblings('.more')
      .css('display', 'none');
    $(this).text('Continuar lendo');
    $('html').animate(
      {
        scrollTop: $(this)
          .parent()
          .parent()
          .siblings('.return-point')
          .offset().top
      },
      800
    );
  }
});

// Send email
// get the form elements defined in your form HTML above

var form = document.getElementById('my-form');
var button = document.getElementById('my-form-button');
var alertMessage = document.getElementById('submit-alert');

// Success and Error functions for after the form is submitted

function success() {
  form.reset();
  button.style = 'display: none ';
  alertMessage.style = 'display: block';
}

function error() {
  status.innerHTML =
    'Ops! Tivemos um problema. Atualize a página e tente novamente.';
}

// handle the form submission event

form.addEventListener('submit', function(ev) {
  ev.preventDefault();
  var data = new FormData(form);
  ajax(form.method, form.action, data, success, error);
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

// Enable alerts
$('.alert').alert();

// Enable carousel
$('.carousel').carousel();
