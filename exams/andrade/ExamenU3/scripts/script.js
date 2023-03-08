// JavaScript Document



 /* var product1 = parseFloat(document.getElementById('product1').value);
  var product2 = parseFloat(document.getElementById('product2').value);
var product3 = parseFloat(document.getElementById('product3').value);
var product4 = parseFloat(document.getElementById('product4').value);
var product5 = parseFloat(document.getElementById("product5").value);
alert(product5);*/
  var taxes = Math.round((0.12*55 + 0.12*35 + 0.12*45 + 0.12*15 + 0.12*25)*100)/100;

  var totalTax = document.getElementById('tax');
  totalTax.innerHTML = taxes;

