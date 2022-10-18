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


  //Ver si hay dor operadores seguidos
  let ultoper = parcial.slice(-2);
  let ultoper2 = ultoper.slice(-1);


  // if(operrealizado == '0'){}
  // ejecute la operación con el mismo número en caso de que vuelva a dar en el mismo operador  
  if (ultimo == oper) {
    let num2 = parcial.substring(0, num);
    parcial = num2 + ultimo + num2;
    calculo();
    // parcial += oper;
    // operrealizado.innerHTML = "0";

    //Cambio de signo 
  } else if (ultoper2 == '/' || ultoper2 == '*' || ultoper2 == '+' || ultoper2 == '-') {
    let newvalor = parcial.substring(0, parcial.length - 1);
    newvalor += oper;
    parcial = newvalor;
    operrealizado.innerHTML = parcial;
  } else {
    // voy armando la formula matematica
    parcial += oper;
    numero = 0;
    // let ultimodigito = parcial.slice(-2);
    // var primerdigito = ultimodigito.charAt(0);
    // alert(primerdigito +"  "+ultimodigito);
    operrealizado.innerHTML = parcial;
  }
}

// realizo el calculo de la formula matemática cuando presiona =
function calculo() {

  //Último valor de la operación
  let valorult = parcial.slice(-1);
  let numc = parcial.indexOf(valorult);
  // con eval evaluo la forula matemática que esta en formato string
  if (parcial == "") {
    txtresul.innerHTML = 0;
  } else if (valorult == "/" || valorult == "*" || valorult == "-" || valorult == "+") {
    try {
      let numc2 = parcial.substring(0, numc);
      parcial = numc2 + valorult + numc2;
      parcial = eval(parcial);
      // Límite de número a mostrar en el resultado
      parcial = parcial.toString().substring(0, 17);
      txtresul.innerHTML = parcial;
      // vuelvo a convertir en string porsi continua la formula
      // parcial = parcial.toString();
      numero = "";
    } catch (error) {
      console.log(error);
      operrealizado.innerHTML = '0';
    }
  } else if (parcial == '0/0') {
    txtresul.innerHTML = "Indefinido"
  } else {
    try {
      parcial = eval(parcial);
      // Límite de número a mostrar en el resultado
      parcial = parcial.toString().substring(0, 17);
      txtresul.innerHTML = parcial;
      // vuelvo a convertir en string por si continua la formula
      // parcial = parcial.toString();
      numero = "";
      // operrealizado.innerHTML = parcial;
    } catch (error) {
      console.log(error);
      operrealizado.innerHTML = '0';
    }

  }
}

// Obtener raíz cuadrada
function raizcuadrada() {
  let valorz = eval(parcial);
  let raiz = Math.sqrt(valorz);

  txtresul.innerHTML = raiz;
}



//Convertir a negativo y positivo
function convertir() {

  //ver el contenido del display de resultado
  let digitouno = txtresul.innerHTML;

  //contenido del display de la operación
  let operealz = operrealizado.innerHTML;

  //verificar si el número es negativo
  let negativo = digitouno.charAt(0);

  if (digitouno == '' && operealz == '0') {
    parcial = "-";
    operrealizado.innerHTML = "-";
  } else if (negativo == '-') {
    txtresul.innerHTML = parcial.slice(0);
    parcial = operrealizado.innerHTML = parcial.slice(0);
  } else if (operealz != '' && digitouno =='') {
    operrealizado.innerHTML = operealz;
  } else {
    txtresul.innerHTML = '-' + parcial;
    parcial = operrealizado.innerHTML = '-' + parcial;
  }
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
    // Tecla restar
    if (key == "109") {
      document.getElementById("btnrestar").className = "teclacoloroperador";
    }
  }
  // validación de operadores por teclado
  if ((key > 110 && key < 112) || (key >= 106 && key <= 107) || key == "190") {
    operacion(event.key);

    if (key == "190") {
      document.getElementById("btnpunto").className = "tecla1Lpress";
    }
    if (key == "106") {
      document.getElementById("btnmultiplicar").className = "teclacoloroperador";
    }
    if (key == "107") {
      document.getElementById("btnsumar").className = "teclacoloroperador";
    }
    if (key == "111") {
      document.getElementById("btndividir").className = "teclacoloroperador";
    }
  }
  // Realizar operación con tecla enter
  if (key == "13") {
    calculo();
    document.getElementById("btnigual").className = "teclacoloroperador";
  }
  //limpiado de pantalla por medio de la tecla delete
  if (key == "8") {
    limpiar();
    document.getElementById("btndelete").className = "teclacolordelete";
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
  if ((key > 110 && key < 112) || (key >= 106 && key <= 107) || key == "190" || key == "109") {
    document.getElementById("btnsumar").className = "tecla teclaoperador";
    document.getElementById("btnrestar").className = "tecla teclaoperador";
    document.getElementById("btndividir").className = "tecla teclaoperador";
    document.getElementById("btnmultiplicar").className = "tecla teclaoperador";
    document.getElementById("btnpunto").className = "tecla1L";
  }
  // Realizar operación con tecla enter
  if (key == "13") {
    document.getElementById("btnigual").className = "tecla teclaoperador";
  }
  //limpiado de pantalla por medio de la tecla delete
  if (key == "8") {
    document.getElementById("btndelete").className = "tecladelete";
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
document.addEventListener('click', function () {
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




