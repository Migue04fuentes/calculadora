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

//Detecto cuanod se presiona una operación
function operacion(oper) {

  // guardo la operación que eligio
  // actualizo el tipo de letra presionado
  ultimodigitopresionado = "operacion";
 
  let ultimo = parcial.slice(-1);
  let num = parcial.indexOf(oper);
  // ejecute la operación con el mismo número en caso de que vuelva a dar en el mismo operador  
  if (ultimo == oper) {
    let num2 = parcial.substring(0, num);
    parcial = num2 + ultimo + num2;
    calculo();
    // parcial += oper;
    // operrealizado.innerHTML = "0";
  } else {
    // voy armando la formula matematica
    parcial += oper;
    numero = 0;
    operrealizado.innerHTML = parcial;
  }
}

// realizo el calculo de la formula matemática cuando presiona =
function calculo() {
 
  //Último valor de la operación
  let valorult =parcial.slice(-1);
  let numc = parcial.indexOf(valorult);
  // con eval evaluo la forula matemática que esta en formato string
  if (parcial == "") {
    txtresul.innerHTML = 0;
  }else if(valorult == "/" || valorult == "*" || valorult == "-" || valorult == "+"){
    let numc2 = parcial.substring(0, numc);
     parcial = numc2 + valorult + numc2;
     parcial = eval(parcial);
    // Límite de número a mostrar en el resultado
    parcial = parcial.toString().substring(0, 17);
    txtresul.innerHTML = parcial;
    // vuelvo a convertir en string porsi continua la formula
    // parcial = parcial.toString();
    numero = "";
  }else if(parcial == '0/0'){
    txtresul.innerHTML = "Indefinido"
  }else{

    parcial = eval(parcial);
    // Límite de número a mostrar en el resultado
    parcial = parcial.toString().substring(0, 17);
    txtresul.innerHTML = parcial;
    // vuelvo a convertir en string por si continua la formula
    // parcial = parcial.toString();
    numero = "";
    // operrealizado.innerHTML = parcial;
  }
}

// Obtener raíz cuadrada
function raizcuadrada() {
  let valorz = eval(parcial);
  let raiz = Math.sqrt(valorz);

  txtresul.innerHTML = raiz;
}

// Obtener valores del teclado y bloqueo de teclas
document.addEventListener("keydown", teclapresionada);

function teclapresionada(event) {
  let key = event.keyCode;
  // validación de números
  if (
    (key >= 96 && key <= 105) ||
    (key >= 48 && key <= 57) ||
    (key >= 109 && key < 111)
  ) {
    operador(event.key);
    if (key == "96") {
      document.getElementById("btnnum0").className = "teclacolor";
    }
    if (key == "97") {
      document.getElementById("btnnum1").className = "teclacolor";
    }
    if (key == "98") {
      document.getElementById("btnnum2").className = "teclacolor";
    }
    if (key == "99") {
      document.getElementById("btnnum3").className = "teclacolor";
    }
    if (key == "100") {
      document.getElementById("btnnum4").className = "teclacolor";
    }
    if (key == "101") {
      document.getElementById("btnnum5").className = "teclacolor";
    }
    if (key == "102") {
      document.getElementById("btnnum6").className = "teclacolor";
    }
    if (key == "103") {
      document.getElementById("btnnum7").className = "teclacolor";
    }
    if (key == "104") {
      document.getElementById("btnnum8").className = "teclacolor";
    }
    if (key == "105") {
      document.getElementById("btnnum9").className = "teclacolor";
    }
    if (key == "110") {
      document.getElementById("btnpunto").className = "tecla1Lpress";
    }
  }
  // validación de operadores por teclado
  if ((key > 110 && key < 112) || (key >= 106 && key <= 107) || key == "190") {
    operacion(event.key);

    if (key == "190") {
      document.getElementById("btnpunto").className = "tecla1Lpress";
    }
    if (key == "106") {
      document.getElementById("btnmultiplicar").className = "teclacolor";
    }
    if (key == "109") {
      document.getElementById("btnrestar").className = "teclacolor";
    }
    if (key == "107") {
      document.getElementById("btnsumar").className = "teclacolor";
    }
    if (key == "111") {
      document.getElementById("btndividir").className = "teclacolor";
    }
  }
  // Realizar operación con tecla enter
  if (key == "13") {
    calculo();
    document.getElementById("btnigual").className = "teclacolor";
  }
  //limpiado de pantalla por medio de la tecla delete
  if (key == "8") {
    limpiar();
    document.getElementById("btndelete").className = "teclacolor";
  }
}

// Colores al presionar la tecla
document.addEventListener("keyup", function (event) {
  let key = event.keyCode;
  if (
    (key >= 96 && key <= 105) ||
    (key >= 48 && key <= 57) ||
    (key > 109 && key < 111)
  ) {
    document.getElementById("btnnum0").className = "tecla";
    document.getElementById("btnnum1").className = "tecla";
    document.getElementById("btnnum2").className = "tecla";
    document.getElementById("btnnum3").className = "tecla";
    document.getElementById("btnnum4").className = "tecla";
    document.getElementById("btnnum5").className = "tecla";
    document.getElementById("btnnum6").className = "tecla";
    document.getElementById("btnnum7").className = "tecla";
    document.getElementById("btnnum8").className = "tecla";
    document.getElementById("btnnum9").className = "tecla";
    document.getElementById("btnpunto").className = "tecla1L";
  }
  if ((key > 110 && key < 112) || (key >= 106 && key <= 107) || key == "190") {
    document.getElementById("btnsumar").className = "tecla";
    document.getElementById("btnrestar").className = "tecla";
    document.getElementById("btndividir").className = "tecla";
    document.getElementById("btnmultiplicar").className = "tecla";
    document.getElementById("btnpunto").className = "tecla1L";
  }
  // Realizar operación con tecla enter
  if (key == "13") {
    document.getElementById("btnigual").className = "tecla";
  }
  //limpiado de pantalla por medio de la tecla delete
  if (key == "8") {
    document.getElementById("btndelete").className = "tecla";
  }
});

// obtener el valor de base elevado a la 2
const potencia = function () {
  let base = parseFloat(parcial);
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

// Desactivar el focus de todos los botones
document.addEventListener('click', function(){
  let cero = document.getElementById("btnnum0");
  let uno = document.getElementById("btnnum1");
  let dos = document.getElementById("btnnum2");
  let tres = document.getElementById("btnnum3");
  let cuatro = document.getElementById("btnnum4");
  let cinco = document.getElementById("btnnum5");
  let seis = document.getElementById("btnnum6");
  let siete = document.getElementById("btnnum7");
  let ocho = document.getElementById("btnnum8");
  let nueve = document.getElementById("btnnum9");
  let mas = document.getElementById("btnsumar");
  let menos = document.getElementById("btnrestar");
  let por = document.getElementById("btnmultiplicar");
  let dividir = document.getElementById("btndividir");
  let ac = document.getElementById("btndelete");
  let raiz = document.getElementById("btnrzcuadrada");
  let expont = document.getElementById("btnexponente");
  let masmenos = document.getElementById("btnmasmenos");
  let punto = document.getElementById("btnpunto");
 
  cero.blur(); 
  uno.blur();
  dos.blur();
  tres.blur();
  cuatro.blur();
  cinco.blur();
  seis.blur();
  siete.blur();
  ocho.blur();
  nueve.blur();
  mas.blur();
  menos.blur();
  por.blur();
  dividir.blur();
  ac.blur();
  raiz.blur();
  expont.blur();
  masmenos.blur();
  punto.blur();
})

function cerrarventana(){
  window.close('index.html');
}

