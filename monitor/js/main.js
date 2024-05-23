let adelante_button = document.getElementById('adelante');
let atras_button = document.getElementById('atras');
let derecha_button = document.getElementById('derecha');
let izquierda_button = document.getElementById('izquierda');
let alto_button = document.getElementById('alto');
let mensaje = document.getElementById('mensaje');

function callAPI(valor){
    // Hacer una petición para un usuario con ID especifico
    axios.get('http://localhost/iot-car-control/backend/apis/getRegistro.php')
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

setInterval(callAPI, 1000);
