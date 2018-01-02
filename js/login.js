$(document).ready(function() {
  var boolName = false;
  var boolEmail = false;
  $('.input-name , .input-email').on('keyup', function() {
    if ($('.input-name').val().match(/^[a-zA-Z\s]+$/)) {
      boolName = true; 
    } else {
      boolName = false;
    }
    if ($('.input-email').val().match(/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/)) {
      boolEmail = true;    
    } else {
      boolEmail = false;    
    }
    if (boolName && boolEmail) {
      $('.button').removeAttr('disabled');
      $('.button').addClass('button-color');
    } else {
      $('.button').attr('disabled', 'disabled');
      $('.button').removeClass('button-color');
    }
  });
  // evento para el icono que redirecciona a la pagina anterior
  $('.glyphicon-chevron-left').on('click', function() {
    window.location.href = '../views/labcode.html';
  });  
});