'use strict';

const totalCuentaInput = document.querySelector('#cuenta input');
const totalPropinaInput = document.querySelector('#propina input');
const calcularBtn = document.querySelector('#submit');

const totalCuenta = document.getElementById('total_cuenta');
const totalPropina = document.getElementById('total_propina');
const totalPagar = document.getElementById('total_pagar');

calcularBtn.addEventListener('click', function(){
  const propina = Number(totalPropinaInput.value) || 0;
  const valor = Number(totalCuentaInput.value) || 0;

  totalPagar.textContent = "$ "+coma(totalCalculado(valor, propina));
  totalCuenta.textContent = "$ "+coma(valor);
  totalPropina.textContent = "$ "+coma(propina/100 * valor);
});

function totalCalculado(valor, propina){
  return valor + (propina/100*valor)
}

function coma(valor){
  let texto = valor.toString().split(".");
  texto[0] = texto[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return texto.join(".");
}