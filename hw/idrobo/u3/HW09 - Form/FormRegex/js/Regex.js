
		function validarFormulario() {
			// Obtener referencias a los campos del formulario
			var name = document.getElementById("name");
			var card = document.getElementById("Card");
			var expiration = document.getElementById("Expiration");
			var zip = document.getElementById("zip");

			// Obtener referencias a los elementos de mensaje de error
			var errorName = document.getElementById("error-name");
			var errorCard = document.getElementById("error-card");
			var errorExpiration = document.getElementById("error-expiration");
			var errorZip = document.getElementById("error-zip");

			// Bandera para indicar si el formulario es válido o no
			var formularioValido = true;

			// Validar el campo de nombre
			if (!name.checkValidity()) {
				errorName.innerHTML = "Please enter a valid name";
				formularioValido = false;
			} else {
				errorName.innerHTML = "";
			}

			// Validar el campo de número de tarjeta
			if (card.value.length < 16) {
				errorCard.innerHTML = "Please enter a valid card number";
				formularioValido = false;
			} else
      {
        errorCard.innerHTML = "";
        }
        		// Validar el campo de fecha de vencimiento
		if (expiration.value < "2023-02-20") {
			errorExpiration.innerHTML = "Please enter a valid expiration date";
			formularioValido = false;
		} else {
			errorExpiration.innerHTML = "";
		}

		// Validar el campo de código postal
		if (zip.value.length < 6) {
			errorZip.innerHTML = "Please enter a valid zip code";
			formularioValido = false;
		} else {
			errorZip.innerHTML = "";
		}

		// Devolver si el formulario es válido o no
		return formularioValido;
	}

