var operacion, bool, bool2;
var btnSuma, btnResta, btnMultiplicacion, btnDivision, btnResultado;

bool2 = false;
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
    let obtenerInputSecundario = getSecondaryNumber();
    if (obtenerInputSecundario == null) {
        if (getPrincipalNumber() == null) {
            alert('No hay nada en el input principal');
        } else {
            let numeroPrincipal = getPrincipalNumber();
            let seteo = setNumbers(numeroPrincipal, operacion);
            resetCounter();
        }
    } else {
        if (obtenerInputSecundario.length == 1) {
            let numeroPrincipal = getPrincipalNumber();
            let seteo = setNumbers(numeroPrincipal, operacion);
            bool2 = true;
            resetCounter();
            if (seteo.numeros.length >= 2) {
                switcher(bool, operacion, seteo.numeros, bool2);
                bool2 = false;
            }
        } else {
            let inputSecundario = document.getElementById('inputSecundario');
            inputSecundario.value = null;
            let numeroPrincipal = getPrincipalNumber();
            let seteo = setNumbers(numeroPrincipal, operacion);
            resetCounter();
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
            switcher(bool, seteo.operador, seteo.numeros, bool2);
        }
    }
    //switcher(bool, operacion);
});

function switcher(data, opr, arrayNumbers, bool2) {
    if (data == true) {
        let operacion = opr;
        let array = arrayNumbers;
        let segundaSuma = bool2;
        switch (operacion) {
            case "suma":
                let resultado = suma(array);
                setResultado(resultado);
                setOperacion(array, operacion, segundaSuma);
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