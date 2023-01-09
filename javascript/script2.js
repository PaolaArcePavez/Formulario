function p(y) {
    return document.getElementById(y);
}

function agregar() {
    var nombres = p("inputNombres").value;
    var apellidos = p("inputApellidos").value;
    var nacimiento = p("inputNacimiento").value;
    var curso = p("inputCurso").value;
    var telefono = p("inputTelefono").value;
    var email = p("inputEmail").value;

    if (nombres == "") {
        p("inputNombres").focus();
        alert("Ingrese sus Nombres")
        return;
    }
    if (apellidos == "") {
        p("inputApellidos").focus();
        alert("Ingrese sus Apellidos")
        return;
    }
    if (nacimiento == "") {
        p("inputNacimiento").focus();
        return;
    }
    if (curso == "") {
        p("inputCurso").focus();
        return;
    }
    if (telefono == "") {
        p("inputTelefono").focus();
        alert("Ingrese su Teléfono")
        return;
    }
    if (email == "") {
        p("inputEmail").focus();
        alert("Ingrese su Email")
        return;
    }


    let fila = document.createElement("tr");


    let celda1 = document.createElement("td");
    let celda2 = document.createElement("td");
    let celda3 = document.createElement("td");
    let celda4 = document.createElement("td");
    let celda5 = document.createElement("td");
    let celda6 = document.createElement("td");
    let celda7 = document.createElement("td");


    celda1.innerHTML = nombres;
    celda2.innerHTML = apellidos;
    celda3.innerHTML = nacimiento;
    celda4.innerHTML = curso;
    celda5.innerHTML = telefono;
    celda6.innerHTML = email;
    celda7.innerHTML = "<input type='button' id='eliminar' value='Eliminar' onclick='eliminar(this)'>"


    fila.appendChild(celda1);
    fila.appendChild(celda2);
    fila.appendChild(celda3);
    fila.appendChild(celda4);
    fila.appendChild(celda5);
    fila.appendChild(celda6);
    fila.appendChild(celda7);

    p("list").appendChild(fila);

    p("inputNombres").value = ""
    p("inputApellidos").value = "";
    p("inputNacimiento").value = "";
    p("inputCurso").value = "";
    p("inputTelefono").value = "";
    p("inputEmail").value = "";
    p("inputNombres").focus();

}




function eliminar(nodoBoton) {

    let filaABorrar = nodoBoton.parentNode.parentNode;

    p("list").removeChild(filaABorrar);
    p("inputNombres").focus();
}

