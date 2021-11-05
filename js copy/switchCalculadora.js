var operacion, bool;
var btnSuma, btnResta, btnMultiplicacion, btnDivision, btnResultado;

bool = false;
operacion = "vacio";

btnSuma = document.getElementById('btnSuma');
btnResta = document.getElementById('btnResta');
btnMultiplicacion = document.getElementById('btnMultiplicacion');
btnDivision = document.getElementById('btnDivision');
btnResultado = document.getElementById('btnResultado');

btnSuma.addEventListener('click', function (e) {
    operacion = "suma";
    bool = true;
    switcher(bool, operacion);
    if (getPrincipalNumber() == null) {
        alert('XD');
    } else {
        let numeroPrincipal = getPrincipalNumber();
        setNumbers(numeroPrincipal, operacion);
    }
    // Falta la logica de que en caso de ya haber un 3er numero que se quiere sumar, la suma de los dos primeros debe sumarse ya.
});

btnResta.addEventListener('click', function (e) {
    operacion = "resta";
    bool = true;
    switcher(bool, operacion);
});

btnMultiplicacion.addEventListener('click', function (e) {
    operacion = "multiplicacion";
    bool = true;
    switcher(bool, operacion);
});

btnDivision.addEventListener('click', function (e) {
    operacion = "division";
    bool = true;
    switcher(bool, operacion);
});

btnResultado.addEventListener('click', function (e) {
    bool = true;
    switcher(bool, operacion);
});

function switcher(data, opr) {
    if (data == true) {
        let operacion = opr;
        // console.log(operacion);
        // console.log(data);
        switch (operacion) {
            case "suma":
                suma([1, 2, 3, 4, 5]);
                console.log(suma([1, 2, 3, 4, 5]));
                break;
            case "resta":
                resta([10, 5, -50, 100]);
                console.log(resta([10, 5, -50, 100]));
                break;
            case "multiplicacion":
                multiplicacion([10, 2.5, 2]);
                console.log(multiplicacion([10, 2.5, 2]));
                break;
            case "division":
                division(10, 2);
                console.log(division(10, 2));
                break;
            case "vacio":
                alert('¡Selecciona una operacion!');
                break;
            default:
                break;
        }
    }
    bool = false;
}