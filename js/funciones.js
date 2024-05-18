/* //////////////////////////////////////////////////////////
   ///////   **FUNCIONES PARA VALIDAR FORMULARIOS**   ///////
*/ //////////////////////////////////////////////////////////

function validarEnviar() {

    var formulario = document.forms["fvalida"];
  
    // Valida el nombre
    if (formulario.nombre.value.length < 5) { // Cambiado de <= a <
        alert("El nombre debe tener al menos 5 caracteres");
        formulario.nombre.focus();
        return false;
    }
  
    // Valida email
    var testear = /^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/;
    if (!testear.test(formulario.email.value)) {
        alert("La dirección de email no es válida");
        formulario.email.focus();
        return false;
    }
  
    // Valida el interés -> no tiene sentido porque ya aparece una opcion por defecto
    /*if (formulario.intereses.selectedIndex ==='') {
        alert("Debe seleccionar un interes");
        formulario.intereses.focus();
        return false;
    }*/
  
    // Valida el sexo
  // Valida el campo de sexo
  var sexoRadios = formulario.sexo;
  var sexoSeleccionado = false;
  for (var i = 0; i < sexoRadios.length; i++) {
      if (sexoRadios[i].checked) {
          sexoSeleccionado = true;
          break;
      }
  }
  if (!sexoSeleccionado) {
      alert("Debe seleccionar una opción de sexo");
      return false;
  }

  
    // Valida el campo de hobbies
    var checkboxesHobbies = formulario.hobbies;
    var seleccionado = false;
    for (var i = 0; i < checkboxesHobbies.length; i++) {
        if (checkboxesHobbies[i].checked) {
            seleccionado = true;
            break;
        }
    }
    if (!seleccionado) {
        alert("Debe seleccionar al menos un hobbie");
        return false;
    }
    
    // Valida el mensaje
    if (formulario.comentario.value.length === 0) {
        alert("Debe dejar un comentario");
        formulario.comentario.focus();
        return false;
    }
  
    // Valida si acepta los términos y condiciones
    if (!formulario.terminos.checked) {
        alert("Debe aceptar los términos y condiciones");
        formulario.terminos.focus();
        return false;
    }
  
    // Si llegó hasta aquí, el formulario es válido
    alert("Muchas gracias por enviar el formulario");
    return true;
  }
  

/* //////////////////////////////////////////////////////////
   ///////   **FUNCIONES PARA VALIDAR FORMULARIOS**   ///////
*/ //////////////////////////////////////////////////////////

// Esta función lee los datos remotos, usando fetch
function traerDatosAPI() {
    fetch('https://randomuser.me/api') // API a leer
        // Cuando ha finalizado la lectura
        // guardo en datos el texto leido:
        .then(datos => datos.json()) //res va a guardar el dato mediante el método .json()
        .then(datos => {
            // Y luego copio ese texto en #emplead0.
            empleado.innerHTML +=
                `<div class="tarjeta">
                 <img src = "${datos.results[0].picture.large}"</img><br>
                 ${datos.results[0].name.last}, ${datos.results[0].name.first}<br>
                 
                 ${datos.results[0].email}</div>`
        })
}

