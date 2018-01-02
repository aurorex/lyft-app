$(document).ready(function() {
  // evento para el input 
  $('#input-lab').on('keyup', function() {
    // inicializamos la variable con el valor de la clave(codigo LAB) que se nos dio anteriormente
    var clave = localStorage.getItem('clave');
    // condicionamos para que el valor del input coincida con la clave
    if ($('#input-lab').val() === clave) {
      // habilitamos el button
      $('.button').removeAttr('disabled');
      $('.button').addClass('button-color');
    } else {
      // deshabilitamos button de no cumplirse la 1ra condicion
      $('.button').attr('disabled', 'disabled');
      $('.button').removeClass('button-color');
    }
  });
  // funcion para retornar un numero aleatoriamente y teniendo un min y max para que sean de tres digitos
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  // asignamos el evento al button-resencode para que nos devuelva una nueva clave en caso no recordemos la anterior
  $('.button-resendcode').on('click', function() {
    var newClave = getRandomInt(100, 999);
    // removemos la clave anterior de la base de datos para poder introducir la nueva clave a la base de datos y esta sea ceptada en la base de datos
    localStorage.removeItem('clave');
    localStorage.setItem('clave', newClave);
    alert('tu nuevo código LAB: ' + newClave);
  });
  // al habilitarse el button nos enviara a la pagina de 'login'
  $('.button').on('click', function() {
    window.location.href = '../views/login.html';
  });
  // evento para el icono que redirecciona a la pagina anterior
  $('.glyphicon-chevron-left').on('click', function() {
    window.location.href = '../views/singup.html';
  });
});