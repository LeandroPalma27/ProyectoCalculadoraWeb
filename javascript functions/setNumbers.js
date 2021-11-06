function setNumbers(a, b) {
    let numeroPrincipal = a;
    let operacion = b;
    let objetoOperacion = new Object();
    if (operacion == "suma") {
        let inputSecundario = document.getElementById('inputSecundario');
        let contenidoInput = inputSecundario.value;
        if (contenidoInput == null || contenidoInput == "") {
            contenidoInput = numeroPrincipal + " +";
            inputSecundario.value = contenidoInput;
            let arrayPrimerNumeroStrings = contenidoInput.split(' ');
            let arrayPreviewNumber = [];
            for (let i = 0; i < arrayPrimerNumeroStrings.length; i++) {
                arrayPreviewNumber.push(parseInt(arrayPrimerNumeroStrings[i], 10));
            }
            let arrayNumeroFiltrado = arrayPreviewNumber.filter( value => !Number.isNaN(value) );
            objetoOperacion.arrayNumeroOperacion = arrayPrimerNumeroStrings;
            objetoOperacion.primeraAccion = arrayNumeroFiltrado;
            objetoOperacion.numeros = [];
        } else {
            contenidoInput = contenidoInput + " " + numeroPrincipal;
            let arrayPreviewStrings = [];
            let arrayPreviewNumbers = [];
            arrayPreviewStrings = contenidoInput.split(' ');
            for (let i = 0; i < arrayPreviewStrings.length; i++) {
                arrayPreviewNumbers.push(parseInt(arrayPreviewStrings[i], 10));
            }
            let arrayNumerosFiltrado = arrayPreviewNumbers.filter( value => !Number.isNaN(value) );
            console.log(arrayNumerosFiltrado);
            objetoOperacion.primeraAccion = [];
            objetoOperacion.arrayNumerosOperacion = arrayPreviewStrings;
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

function setOperacion(array, opr, sgda) {
    let segundaSuma = sgda;
    let arrayNumeros = array;
    let operacion = opr;
    let inputSecundario = document.getElementById('inputSecundario');
    if (operacion == "suma") {
        if (segundaSuma == true) {
            let inputPrincipal = document.getElementById('inputPrincipal');
            inputSecundario.value = inputPrincipal.value + " +";
            return true;
        } else {
            inputSecundario.value = arrayNumeros[0] + " + " + arrayNumeros[1] + " =";
            return false;
        }
    }
}