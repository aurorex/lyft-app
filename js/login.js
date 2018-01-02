$(document).ready(function() {
  var validateName = false;
  var validateEmail = false;
  var validateCheckbox = false;
  $('.input-name').on('keyup', function(event) {
    var $inputName = $(this).val();
    console.log($inputName.length);
    if (event.keyCode >= 48 && event.keyCode < 58 || $inputName === ''|| $inputName.length < 5) {
      $('.button').addClass('button-color');
      validateName = false;
    }
    else {
      validateName = true;
    }
  });
  $('.input-email').on('keyup', function() {
   
  });
  $('#checkbox').on('click', function() {
    validateCheckbox = true;
    console.log(validateCheckbox);

  });
  $('.button').on('click', function() {
    if (validateName === false && validateEmail === true) {
      
    }

  });
  // evento para el icono que redirecciona a la pagina anterior
  $('.glyphicon-chevron-left').on('click', function() {
    window.location.href = '../views/labcode.html';
  });
  
});