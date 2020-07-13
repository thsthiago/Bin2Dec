let binario = document.querySelector('.w100 input[name=binario]');
let decimal = document.querySelector('.w100 input[name=decimal]');
let converter = document.querySelector('#main input[type=submit]')

//parseInt(numero,base) : Serve para converter uma string em um numero
//e coverter para a base escolhida

converter.onclick = function() {
  if(!binario.value == "") {
    !!parseInt(binario.value,2) == false ? alert("Digite o número em binario")
    : decimal.value = parseInt(binario.value,2); 
    binario.value = "";
  } else if (!decimal.value == "") {
    !!parseInt(decimal.value,10).toString(2) == false ? alert("Digite o número em decimal")
    : binario.value = parseInt(decimal.value,10).toString(2);  
    decimal.value = "";
  }
}

//parseInt(18,10).toString(2)