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

btnMultiplicacion.addEventListener('click', function (e) {
    operacion = "multiplicacion";
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
        let segundaOp = bool2;
        switch (operacion) {
            case "suma":
                accion = suma(array);
                setResultado(accion);
                setOperacion(array, operacion, segundaOp);
                break;
            case "resta":
                accion = resta(array);
                setResultado(accion);
                setOperacion(array, operacion, segundaOp);
                break;
            case "multiplicacion":
                accion = multiplicacion(array);
                setResultado(accion);
                setOperacion(array, operacion, segundaOp);
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