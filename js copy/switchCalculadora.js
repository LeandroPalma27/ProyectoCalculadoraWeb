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
    if (getPrincipalNumber() == null) {
        alert('XD');
    } else {
        let numeroPrincipal = getPrincipalNumber();
        let seteo = setNumbers(numeroPrincipal, operacion);
        resetCounter();
        if (seteo.numeros.length >= 2) {
            inputSecundario.value = null;
            setNumbers(numeroPrincipal, operacion);
        }
    }
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
    if (getPrincipalNumber() == null) {
        alert('XD');
    } else {
        let numeroPrincipal = getPrincipalNumber();
        let seteo = setNumbers(numeroPrincipal, operacion);
        let tamaño = seteo.numeros.length;
        if (tamaño > 1) {
            switcher(bool, seteo.operador, seteo.numeros);
        }
    }
    //switcher(bool, operacion);
});

function switcher(data, opr, arrayNumbers) {
    if (data == true) {
        let operacion = opr;
        let array = arrayNumbers;
        switch (operacion) {
            case "suma":
                let resultado = suma(array);
                setResultado(resultado);
                setOperacion(array, operacion);
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