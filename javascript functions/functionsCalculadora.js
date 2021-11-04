function suma(array) {
    let arrayNumeros = array;
    let cont = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
        cont = cont + arrayNumeros[i];
    }
    return cont;
}

function resta(array) {
    let arrayNumeros = array;
    let cont = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
        cont = cont - arrayNumeros[i];
    }
    return cont;
}

function multiplicacion(array) {
    let arrayNumeros = array;
    let cont = 1;
    for (let i = 0; i < arrayNumeros.length; i++) {
        cont = cont * arrayNumeros[i];
    }
    return cont;
}

function division(a, b) {
    let divisor = b;
    let dividendo = a;
    return dividendo/divisor;
}

