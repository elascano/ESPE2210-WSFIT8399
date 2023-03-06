function computeMultipliying() {
    var price1 = parseFloat(document.getElementById('price1').value)

    var mul1 = price1 * 0.12;

    var price2 = parseFloat(document.getElementById('price2').value)

    var mul2 = price2 * 0.12;

    var price3 = parseFloat(document.getElementById('price3').value)

    var mul3 = price3 * 0.12;

    var price4 = parseFloat(document.getElementById('price4').value)

    var mul4 = price4 * 0.12;

    var iva = mul1+mul2+mul3+mul4;

    document.write("The total iva is= " + iva);
}