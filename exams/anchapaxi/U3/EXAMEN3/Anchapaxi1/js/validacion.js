// JavaScript Document
function validarFormulario() {
  // Obtener los valores de los campos del formulario
  const nombre = document.getElementById('Nombre').value;
  const apellido = document.getElementById('Apellido').value;
  const genero = document.querySelector('input[name="Diseño"]:checked').value;
  const tipoPrenda = document.querySelector('select[name="select"]').value;
  const marca = document.getElementById('Marca').value;
  const tallas = document.querySelectorAll('input[type="checkbox"]:checked');
  const formaPago = document.querySelector('input[name="Pago"]:checked').value;

  // Definir los valores permitidos para cada campo
  const generosPermitidos = ['d', 'c'];
  const tiposPrendaPermitidos = ['Chompa', 'Camiseta', 'Vividi', 'Licra', 'Pantalón', 'Pantaloneta'];
  const marcasPermitidas = ['nike', 'adidas', 'puma', 'under armour'];
  const tallasPermitidas = ['S', 'M', 'L', 'XL'];
  const formasPagoPermitidas = ['e', 'c', 't'];

  // Validar cada campo
  if (!nombre.match(/^[A-Za-z]+$/)) {
    alert('El nombre solo puede contener letras');
    return false;
  }
  if (!apellido.match(/^[A-Za-z]+$/)) {
    alert('El apellido solo puede contener letras');
    return false;
  }
  if (!generosPermitidos.includes(genero)) {
    alert('El género seleccionado no es válido');
    return false;
  }
  if (!tiposPrendaPermitidos.includes(tipoPrenda)) {
    alert('El tipo de prenda seleccionado no es válido');
    return false;
  }
  if (!marcasPermitidas.includes(marca)) {
    alert('La marca seleccionada no es válida');
    return false;
  }
  const tallasSeleccionadas = Array.from(tallas).map(t => t.value);
  if (!tallasSeleccionadas.every(t => tallasPermitidas.includes(t))) {
    alert('Una o más tallas seleccionadas no son válidas');
    return false;
  }
  if (!formasPagoPermitidas.includes(formaPago)) {
    alert('La forma de pago seleccionada no es válida');
    return false;
  }

  // Si todos los campos son válidos, enviar el formulario
  return true;
}