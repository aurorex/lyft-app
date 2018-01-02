$(document).ready(function() {
  // declaramos dos variables que tendran valor de false
  var validateInput = false;
  var validateSelect = false;
  // evento keyup  
  $('#input').on('keyup', function(event) {
    // inicializamos una variable con un valor por defecto de un digito
    var $lenghtInput = ('0' + $(this).val()).length;
    // validar que solo se ingrese el numero de diez digitos
    if ($lenghtInput === 10) {
      $('#button-singup').addClass('button-color');
      validateInput = true;
    }
    if ($lenghtInput > 10 || $lenghtInput < 10 || event.keyCode === 69) {
      $('#button-singup').removeClass('button-color');
      validateInput = false;
    }
    // validar para que no ingrese numero neperiano(e) y validar q sean diez digitos y si borra cualquier digito no habilitara hasta cumplir ambos
    if (event.keyCode === 8 && event.keycode !== 69 && $lenghtInput === 10) {
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
  // funcion para retornar un numero aleatoriamente y teniendo un min y max para que sean de tres digitos
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  // evento  del button nos enviara a la siguiente página con el código lab 
  $('#button-singup').on('click', function() {
    // si se cumple la condicion de que ambas variables son true,se mostrara nuestro codigo lab son un alert y se habilitara el button
    if (validateInput === true && validateSelect === true) {
      var clave = getRandomInt(100, 999);
      // guardar la clave(codigo LAB) en la base de datos del navegador
      localStorage.setItem('clave', clave);
      // agregando propiedades de color al button
      $('#button-singup').addClass('button-color');
      $('#clave').append(clave);
      // se envia un alert con la clave random
      alert('tu código LAB: ' + clave);
      window.location.href = '../views/labcode.html';
    }
  });
  // evento para el icono que redirecciona a la pagina anterior
  $('.glyphicon-chevron-left').on('click', function() {
    window.location.href = '../views/init.html';
  });
});