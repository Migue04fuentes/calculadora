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
    // Límite de número a mostrar en el resultado
    parcial = parcial.toString().substring(0,17);
    txtresul.innerHTML = parcial;
    // vuelvo a convertir en string porsi continua la formula
    // parcial = parcial.toString();
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
    if (key == '96') {
      document.getElementById("btnnum0").className = 'teclacolor';
    }
    if (key == '97') {
      document.getElementById("btnnum1").className = 'teclacolor';
    }
    if (key == '98') {
      document.getElementById("btnnum2").className = 'teclacolor';
    }
    if (key == '99') {
      document.getElementById("btnnum3").className = 'teclacolor';
    }
    if (key == '100') {
      document.getElementById("btnnum4").className = 'teclacolor';
    }
    if (key == '101') {
      document.getElementById("btnnum5").className = 'teclacolor';
    }
    if (key == '102') {
      document.getElementById("btnnum6").className = 'teclacolor';
    }
    if (key == '103') {
      document.getElementById("btnnum7").className = 'teclacolor';
    } if (key == '104') {
      document.getElementById("btnnum8").className = 'teclacolor';
    } if (key == '105') {
      document.getElementById("btnnum9").className = 'teclacolor';
    } if (key == '110') {
      document.getElementById("btnpunto").className = 'tecla1Lpress';
    }
  }
  // validación de operadores por teclado
  if (key > 110 && key < 112 || key >= 106 && key <= 107 || key == '190') {
    operacion(event.key);

    if (key == '190') {
      document.getElementById("btnpunto").className = 'tecla1Lpress';
    }
    if (key == '106') {
      document.getElementById("btnmultiplicar").className = 'teclacolor';
    }
    if (key == '109') {
      document.getElementById("btnrestar").className = 'teclacolor';
    }
    if (key == '107') {
      document.getElementById("btnsumar").className = 'teclacolor';
    }if (key == '111') {
      document.getElementById("btndividir").className = 'teclacolor';
    }

  }
  // Realizar operación con tecla enter
  if (key == '13') {
    calculo();
    document.getElementById("btnigual").className = 'teclacolor';
  }
  //limpiado de pantalla por medio de la tecla delete
  if (key == '8') {
    limpiar();
    document.getElementById("btndelete").className = 'teclacolor';
  }
}

// Colores al presionar la tecla
document.addEventListener("keyup", function (event) {
  let key = event.keyCode;
  if (key >= 96 && key <= 105 || key >= 48 && key <= 57 || key > 109 && key < 111) {
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
    // document.getElementById("btnpunto").className = "tecla";
  }
  if (key > 110 && key < 112 || key >= 106 && key <= 107 || key == '190') {
    document.getElementById("btnsumar").className = "tecla";
    document.getElementById("btnrestar").className = "tecla";
    document.getElementById("btndividir").className = "tecla";
    document.getElementById("btnmultiplicar").className = "tecla";
    document.getElementById("btnpunto").className = "tecla1L";
  }
  // Realizar operación con tecla enter
  if (key == '13') {
    document.getElementById("btnigual").className = 'tecla';
  }
  //limpiado de pantalla por medio de la tecla delete
  if (key == '8') {
    document.getElementById("btndelete").className = 'tecla';
  }
  
})

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


