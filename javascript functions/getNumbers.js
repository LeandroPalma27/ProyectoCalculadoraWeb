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

