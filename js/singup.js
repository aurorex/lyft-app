$(document).ready(function() {
// declaramos dos variables que tendran valor de false
  var validateInput = false;
  var validateSelect = false;
  // evento para validar que solo se ingrese el numero de diez digitos 
  $('#input').on('keyup', function(event) {
    var $lenghtInput = $(this).val().length ;
    if ($lenghtInput === 10) {
      $('#button-singup').addClass('button-color');
      validateInput = true;
      console.log(validateInput);
    }
    if ($lenghtInput > 10 || $lenghtInput < 10 || event.keyCode === 69) {
      $('#button-singup').removeClass('button-color');
      validateInput = false;
    }
    if (event.keyCode === 8 && event.keycode !== 69 && $lenghtInput === 10) {
      console.log(event.keyCode);
      $('#button-singup').addClass('button-color');
      validateInput = true;
    }
  });
  // evento para seleccionar el pais del usuario 
  $('li').on('click', function() {
    $('.div-li').empty();
    $(this).clone().appendTo('.div-li');
    validateSelect = true;
  });
  // evento  del button nos enviara a la siguiente página con el código lab 
  $('#button-singup').on('click', function() {
    if (validateInput === true && validateSelect === true) {
      $('#button-singup').addClass('button-color');
      alert('Tu código LAB' + '');
      window.location.href = '../views/labcode.html';
    }
  });
  // evento para el icono que redirecciona a la pagina anterior
  $('.glyphicon-chevron-left').on('click', function() {
    window.location.href = '../views/init.html';
  });
});