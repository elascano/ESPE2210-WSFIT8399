function calculaEdad(diaNacimiento, mesNacimiento, anioNacimiento) {
    var diaNacimiento = document.getElementById("day").value;
    var mesNacimiento = document.getElementById("month").value;
    var anioNacimiento = document.getElementById("year").value;
    var salida = document.getElementById("salida");
  
    this.diaNacimiento = diaNacimiento;
    this.mesNacimiento = mesNacimiento;
    this.anioNacimiento = anioNacimiento;
  
    this.edad = function edad() {
      var calcula = 0;
      var objeto = new Date();
      var day = objeto.getDate();
      var month = objeto.getMonth() + 1;
      var year = objeto.getFullYear();
  
      if (
        month < this.mesNacimiento ||
        (month == this.mesNacimiento && day < this.day)
      ) {
        return (calcula = parseInt(year - this.anioNacimiento) - 1);
      } else {
        return (calcula = parseInt(year - this.anioNacimiento));
      }
    };
    salida.innerHTML =
      "Your age is  " + this.edad() + ".";
  }

