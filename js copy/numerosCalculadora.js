var btnOne, btnTwo, btnThree, btnFour, btnFive, btnSix, btnSeven, btnEight, btnNine, btnZero;
var inputPrincipal;
var btnBorrar, btnCleaner;
var firstClick = true;
// var zeroCleaner = false;

inputPrincipal = document.getElementById('inputPrincipal');
btnBorrar = document.getElementById('btnBorrar');
btnCleaner = document.getElementById('btnCleaner');

btnOne = document.getElementById('btnOne');
btnTwo = document.getElementById('btnTwo');
btnThree = document.getElementById('btnThree');
btnFour = document.getElementById('btnFour');
btnFive = document.getElementById('btnFive');
btnSix = document.getElementById('btnSix');
btnSeven = document.getElementById('btnSeven');
btnEight = document.getElementById('btnEight');
btnNine = document.getElementById('btnNine');
btnZero = document.getElementById('btnZero');

btnBorrar.addEventListener('click', function (e) {
    let inputNumeroCompleto = inputPrincipal.value;
    let arrayNumeroCompleto = inputNumeroCompleto.split("");
    arrayNumeroCompleto.pop();
    inputNumeroCompleto = arrayNumeroCompleto.join("");
    inputPrincipal.value = inputNumeroCompleto;
    if (inputPrincipal.value == "") {
        inputPrincipal.value = 0;
        firstClick = true;
    }
});

btnOne.addEventListener('click', function numeroUno(e) {
    if (firstClick == true) {
        inputPrincipal.value = null;
    }
    let numero = 1;
    inputPrincipal.value += numero;
    firstClick = false;
});

btnTwo.addEventListener('click', function (e) {
    if (firstClick == true) {
        inputPrincipal.value = null;
    }
    let numero = 2;
    inputPrincipal.value += numero;
    firstClick = false;
});

btnThree.addEventListener('click', function (e) {
    if (firstClick == true) {
        inputPrincipal.value = null;
    }
    let numero = 3;
    inputPrincipal.value += numero;
    firstClick = false;
});

btnFour.addEventListener('click', function (e) {
    if (firstClick == true) {
        inputPrincipal.value = null;
    }
    let numero = 4;
    inputPrincipal.value += numero;
    firstClick = false;
});

btnFive.addEventListener('click', function (e) {
    if (firstClick == true) {
        inputPrincipal.value = null;
    }
    let numero = 5;
    inputPrincipal.value += numero;
    firstClick = false;
});

btnSix.addEventListener('click', function (e) {
    if (firstClick == true) {
        inputPrincipal.value = null;
    }
    let numero = 6;
    inputPrincipal.value += numero;
    firstClick = false;
});

btnSeven.addEventListener('click', function (e) {
    if (firstClick == true) {
        inputPrincipal.value = null;
    }
    let numero = 7;
    inputPrincipal.value += numero;
    firstClick = false;
});

btnEight.addEventListener('click', function (e) {
    if (firstClick == true) {
        inputPrincipal.value = null;
    }
    let numero = 8;
    inputPrincipal.value += numero;
    firstClick = false;
});

btnNine.addEventListener('click', function (e) {
    if (firstClick == true) {
        inputPrincipal.value = null;
    }
    let numero = 9;
    inputPrincipal.value += numero;
    firstClick = false;
});

btnZero.addEventListener('click', function (e) {
    // if (zeroCleaner == true) {
    //     if (firstClick == true) {
    //         inputPrincipal.value = null;
    //     }
    //     let numero = 0;
    //     inputPrincipal.value = numero;
    //     firstClick = true;
    //     zeroCleaner = false;
    // } else {
        if (inputPrincipal.value > 0) {
            if (firstClick == true) {
                inputPrincipal.value = null;
            }
            let numero = 0;
            inputPrincipal.value += numero;
            firstClick = false;
        }
    // }
});

btnCleaner.addEventListener('click', function (e){
    inputPrincipal.value = 0;
    firstClick = true;
});

// setInterval(function () {
//     if (inputPrincipal.value > 0) {
//         console.log(inputPrincipal.value);
//         zeroCleaner = true;
//     }
// }, 20000);



