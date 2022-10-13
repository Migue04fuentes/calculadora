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

// funcion que limpia todo
function limpiar() {
  operadorseleccionado = "";
  parcial = "";
  txtresul.innerHTML = "";
  numero = "";
  operrealizado.innerHTML = 0;
}

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
  if(parcial == ""){
      txtresul.innerHTML = 0;
  }else{
  parcial = eval(parcial);
  txtresul.innerHTML = parcial;
  // vuelvo a convertir en string porsi continua la formula
  parcial = parcial.toString();
  numero = "";
  }
  // operrealizado.innerHTML = parcial;
}

// Obtener raíz cuadrada
function raizcuadrada() {
  let raiz = Math.sqrt(parcial);
  txtresul.innerHTML = raiz;
}

// Obtener valores del teclado y bloqueo de teclas 
document.addEventListener("keydown", teclapresionada)

function teclapresionada(event) {
  let key = event.keyCode;
  // validación de números
  if (key >= 96 && key <= 105 || key >= 48 && key <= 57 || key > 109 && key < 111) {
    operador(event.key);
  }
  // validación de operadores por teclado
  if (key > 110 && key < 112 || key >= 106 && key <= 107 || key == '190') {
    operacion(event.key);
  }
  // Realizar operación con tecla enter
  if (key == '13') {
    calculo();
  }
  //limpiado de pantalla por medio de la tecla delete
  if (key == '8') {
    // let borrar = parcial.slice(0,-1);
    // operrealizado.innerHTML = borrar;
    limpiar();
  }
}

const potencia = function () {
  let base = parseInt(parcial);
  let resultado = 1;
  for (let cuenta = 0; cuenta < 2; cuenta++) {
    resultado *= base;
  }
  if (!Number.isNaN(resultado)) {
    txtresul.innerHTML = resultado;
  } else {
    txtresul.innerHTML = 0;
  }
};


