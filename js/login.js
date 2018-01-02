$(document).ready(function() {
  // declaramos dos variables que tendran valor de false
  var boolName = false;
  var boolEmail = false;
  // evento keyup para ambos inputs
  $('.input-name , .input-email').on('keyup', function() {
    // condicionando que solo se ingrese letras sin otros caracteres en el input-name utilizando expresiones regulares
    if ($('.input-name').val().match(/^[a-zA-Z\s]+$/)) {
      boolName = true; 
      console.log();
    } else {
      boolName = false;
    }
    // condicionando que solo se ingrese emailteniendo en cuenta el caracter @ y el .  en el input-email 
    if ($('.input-email').val().match(/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/)) {
      boolEmail = true;    
    } else {
      boolEmail = false;    
    }
    // si boolName y boolEmail son verdaderos permitira ejecutar el evento del checkbox
    if (boolName && boolEmail) {
      // el evento del checkbox 
      $('#checkbox').on('click', function() {
        $('.button-next').removeAttr('disabled');
        $('.button-next').addClass('button-color');
        // se condiciona que se retorne el valor del check que haremos en el checkbox
        if ($('#checkbox').prop('checked') === false) {
        // se habilita el button que valida nuestro registro
          $('.button-next').attr('disabled', 'disabled');
          $('.button-next').removeClass('button-color');
        }
      });
    } else {
      // por el contraio se desahiblitara el button
      $('.button-next').attr('disabled', 'disabled');
      $('.button-next').removeClass('button-color');
    }
  });
  // evento para el icono que redirecciona a la pagina anterior
  $('.glyphicon-chevron-left').on('click', function() {
    window.location.href = '../views/labcode.html';
  });  
});