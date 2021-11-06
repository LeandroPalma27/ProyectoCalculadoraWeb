var cont = 0;

function getPrincipalNumber() {
    let inputPrincipal = document.getElementById('inputPrincipal');
    if (inputPrincipal.value >= 0) {
        let numeroPrincipal = inputPrincipal.value;
        return numeroPrincipal;
    } else {
        return null;
    }
}

function getSecondaryInputForNewNumber() {
    // Este metodo ayuda a que si en caso de que ya se haya cargado algo en el input secundario, lo botones
    // de numero reinicien el input principal.
    let inputSecundario = document.getElementById('inputSecundario');
    if (inputSecundario.value == null || inputSecundario.value == "") {
        return false;
    } else {
        cont++;
        if (cont <= 1) {
            return true;
        }
    }
}

function resetCounter() {
    cont = 0;
}

function getSecondaryNumber() {
    // Este metodo sirve para que en caso no haber nada presente en el input secundario, se agrege un valor a este
    // que se setee algo ahi.
    let inputSecundario = document.getElementById('inputSecundario');
    if (inputSecundario.value == null || inputSecundario.value == "") {
        return null;
    } else {
        let primerNumero = inputSecundario.value.split(' ');
        let previewNumeroWithNaN = [];
        for (let i = 0; i < primerNumero.length; i++) {
            previewNumeroWithNaN.push(parseInt(primerNumero[i], 10));
        }
        let previewNumero = previewNumeroWithNaN.filter( value => !Number.isNaN(value) );
        return previewNumero;
    }
}

