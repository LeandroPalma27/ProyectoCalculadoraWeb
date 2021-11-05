function setNumbers(a, b) {
    let numeroPrincipal = a;
    let operacion = b;
    let objetoOperacion = new Object();
    if (operacion == "suma") {
        let inputSecundario = document.getElementById('inputSecundario');
        inputSecundario.value = numeroPrincipal + " + ";
        objetoOperacion.numero = numeroPrincipal;
        objetoOperacion.operador = operacion;
        objetoOperacion.asignacion = true;
    }
    return objetoOperacion;
}