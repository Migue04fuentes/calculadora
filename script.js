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
  if (parcial == "") {
    txtresul.innerHTML = 0;
  } else {
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
  if (key >= 96 && key <= 105 || key >= 48 && key <= 57 || key >= 109 && key < 111) {
    operador(event.key);
    // color de teclas
    // document.getElementById("btnnum0").className = 'teclacolor';
    // document.getElementById("btnnum1").className = 'teclacolor';
    // document.getElementById("btnnum2").className = 'teclacolor';
    // document.getElementById("btnnum3").className = 'teclacolor';
    // document.getElementById("btnnum4").className = 'teclacolor';
    // document.getElementById("btnnum5").className = 'teclacolor';
    // document.getElementById("btnnum6").className = 'teclacolor';
    // document.getElementById("btnnum7").className = 'teclacolor';
    // document.getElementById("btnnum8").className = 'teclacolor';
    // document.getElementById("btnnum9").className = 'teclacolor';
    // document.getElementById("btnpunto").className = '';
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

// Colores al presionar la tecla
// document.addEventListener("keyup", function (event) {
//   let key = event.keyCode;
//   if (key >= 96 && key <= 105 || key >= 48 && key <= 57 || key > 109 && key < 111) {
//     document.getElementById("btnnum0").className = "tecla";
//     document.getElementById("btnnum1").className = "tecla";
//     document.getElementById("btnnum2").className = "tecla";
//     document.getElementById("btnnum3").className = "tecla";
//     document.getElementById("btnnum4").className = "tecla";
//     document.getElementById("btnnum5").className = "tecla";
//     document.getElementById("btnnum6").className = "tecla";
//     document.getElementById("btnnum7").className = "tecla";
//     document.getElementById("btnnum8").className = "tecla";
//     document.getElementById("btnnum9").className = "tecla";
//     // document.getElementById("btnpunto").className = "tecla";
//   }
//   // color al presionar operadores
//   if (key > 110 && key < 112 || key >= 106 && key <= 107 || key == '190') {
//     document.getElementById("btnsumar").style.backgroundColor = "#fff";
//     document.getElementById("btnrestar").style.backgroundColor = "#fff";
//     document.getElementById("btnigual").style.backgroundColor = "#fff";
//     document.getElementById("btnpunto").style.backgroundColor = "#fff";
//     document.getElementById("btnpunto").style.backgroundColor = "#fff";
//   }
//   // Realizar operación con tecla enter
//   if (key == '13') {
//   }
//   //limpiado de pantalla por medio de la tecla delete
//   if (key == '8') {
//   }
// })

// obtener el valor de base elevado a la 2
const potencia = function () {
  let base = parseInt(parcial);
  let resultado = 1;
  for (let cuenta = 0; cuenta < 2; cuenta++) {
    resultado *= base;
  }
  // para cuando el valor ingresado tenga un operador no mande NaN
  if (!Number.isNaN(resultado)) {
    txtresul.innerHTML = resultado;
  } else {
    txtresul.innerHTML = 0;
  }
};


