const listaAmigos = [];

document.addEventListener("DOMContentLoaded", () => {
    actualizarLista();
});

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ]+(?: [A-Za-zÁÉÍÓÚáéíóúñÑ]+)*$/.test(nombre)) {
        alert("El nombre solo debe contener letras y espacios.");
        return;
    }

    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    listaAmigos.push(nombre);
    input.value = "";
    actualizarLista();
}

function actualizarLista() {
    const listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";
    
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "X";
        botonEliminar.onclick = () => eliminarAmigo(index);
        
        li.appendChild(botonEliminar);
        listaHTML.appendChild(li);
    });
}

function eliminarAmigo(index) {
    listaAmigos.splice(index, 1);
    actualizarLista();
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Debe haber al menos dos amigos para sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoElegido = listaAmigos[indiceAleatorio];
    
    const resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = `<li>🎉 ¡${amigoElegido} es el amigo secreto! 🎁</li>`;
}