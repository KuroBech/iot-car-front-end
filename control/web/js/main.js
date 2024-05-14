let adelante_button = document.getElementById('adelante');
let atras_button = document.getElementById('atras');
let derecha_button = document.getElementById('derecha');
let izquierda_button = document.getElementById('izquierda');
let alto_button = document.getElementById('alto');
let mensaje = document.getElementById('mensaje');

function calllAPI(valor){
    // Hacer una petición para un usuario con ID especifico
    axios.get('http://localhost/iot-car-control/backend/apis/setRegistro.php?valorEstatus='+valor)
      .then(function (response) {
        // manejar respuesta exitosa
        console.log(response);
        mensaje.innerHTML = 'Respuesta: ' + response.data;
      })
      .catch(function (error) {
        // manejar error
        console.log(error);
      })
      .finally(function () {
        // siempre sera executado
      });

}


adelante_button.addEventListener('click', function(){
    calllAPI("f");
});

atras_button.addEventListener('click', function(){
    calllAPI("b");
});

derecha_button.addEventListener('click', function(){    
    calllAPI("r");
});

izquierda_button.addEventListener('click', function(){
    calllAPI("l");
});

alto_button.addEventListener('click', function(){
    calllAPI("s");
});
