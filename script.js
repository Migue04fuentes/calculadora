// contiene la operacion o resultado parcial
let parcial = "";

// elemento donde se colocan las opraciones que se esta realizando
let operrealizado = document.getElementById("operacionrealizada");

// elemento dodnde se coloca el resultado
let txtresul = document.getElementById("txtresultado");

// último operador seleccinado
let operadorseleccionado = "";

// número ingresado
let numero = "";

// para determinar si lo último presiondo es un número o una operación
let ultimodigitopresionado = "";

function operador(num) {
  // concateno el número
  numero += num;
  // concateno la operación hasta el momento
  parcial += num;
  // nuestro
  operrealizado.innerHTML = parcial;

  //controlamos la division por 0
  if (numero == "0" && operadorseleccionado == "/") {
    limpiar();
    txtresul.innerHTML = "Indefinido";
    return;
  }
  //guardo el tipo de tecla prsionada por última vez
  if (ultimodigitopresionado == "operador") {
    ultimodigitopresionado = "numero";
  }
}

//Detecto cuanod se presiona una operacion
function operacion(oper) {
  // guardo la operación que eligio
  //   actualizo el tipo de letra presionado
  ultimodigitopresionado = "operacion";
  // voy armando la formula matematica
  parcial += oper;
  numero = 0;
  operrealizado.innerHTML = parcial;
}

// realizo el calculo de la formula matemática cuando presiona =
function calculo() {
  // con eval evaluo la forula matemática que esta en formato string
    parcial = eval(parcial);
    txtresul.innerHTML = parcial;
    // vuelvo a convertir en string porsi continua la formula
    parcial = parcial.toString();
    numero = "";

    // operrealizado.innerHTML = parcial;
}

// funcion que limpia todo
function limpiar() {
operadorseleccionado = "";
parcial = "";
txtresul.innerHTML = "";
numero = "";
operrealizado.innerHTML = 0;
}

// Obtener raíz cuadrada
function raizcuadrada(){
  let raiz = Math.sqrt(parcial);
  txtresul.innerHTML = raiz;
}

// Obtener valores del teclado y bloqueo de teclas 
document.addEventListener("keydown", teclapresionada)

function teclapresionada(event){
  let key = event.keyCode;
  console.log(event);
  if(key >=96 && key <= 105 || key >=48 && key <= 57 || key > 189 && key < 191 || key > 109 && key < 111){
    operador(event.key);
  }
  if(key = 111 || key >= 106 && key <= 107 || key >= 108 && key <= 110){
    operacion(event.key);
  }
}

//bloqueo de teclas a excepción de números y op
// function soloNumeros(e) {
//   var key = e.charCode;
//   return key >= 48 && key <= 57;
// }