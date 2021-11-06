var objetoOperacion = new Object();

function setNumbers(a, b) {
    let numeroPrincipal = a;
    let operacion = b;
    if (operacion == "suma") {
        let inputSecundario = document.getElementById('inputSecundario');
        let contenidoInput = inputSecundario.value;
        if (contenidoInput == null || contenidoInput == "") {
            inputSecundario.value = numeroPrincipal + " + ";
            contenidoInput = inputSecundario.value;
            let arrayPrimerNumeroStrings = contenidoInput.split(' ');
            let arrayPreviewNumber = [];
            for (let i = 0; i < arrayPrimerNumeroStrings.length; i++) {
                arrayPreviewNumber.push(parseInt(arrayPrimerNumeroStrings[i], 10));
            }
            let arrayNumeroFiltrado = arrayPreviewNumber.filter( value => !Number.isNaN(value) );
            objetoOperacion.primeraAccion = arrayNumeroFiltrado;
            objetoOperacion.numeros = [];
        } else {
            contenidoInput = contenidoInput + "" + numeroPrincipal;
            let arrayPreviewStrings = [];
            let arrayPreviewNumbers = [];
            arrayPreviewStrings = contenidoInput.split(' ');
            for (let i = 0; i < arrayPreviewStrings.length; i++) {
                arrayPreviewNumbers.push(parseInt(arrayPreviewStrings[i], 10));
            }
            let arrayNumerosFiltrado = arrayPreviewNumbers.filter( value => !Number.isNaN(value) );
            objetoOperacion.primeraAccion = [];
            objetoOperacion.numeros = arrayNumerosFiltrado;
        }
        objetoOperacion.operador = operacion;
        objetoOperacion.asignacion = true;
    }
    return objetoOperacion;
}

function setResultado(data) {
    let inputPrincipal = document.getElementById('inputPrincipal');
    inputPrincipal.value = data;
}

function setOperacion(array, opr) {
    let arrayNumeros = array;
    let operacion = opr;
    let inputSecundario = document.getElementById('inputSecundario');
    if (operacion == "suma") {
        inputSecundario.value = arrayNumeros[0] + " + " + arrayNumeros[1] + " ="; 
    }
}