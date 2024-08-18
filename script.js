let textarea = ``;
let cajaVacia = document.querySelector(".eliminar__info");
let apareceParrafo = document.querySelector(".vacio__legal__parrafo");
let apareceBoton = document.querySelector(".vacio__legal__boton");


function encriptarTexto (){
    textarea = document.querySelector(".main__textarea").value.toLowerCase()

    if (textarea.length === 0) {
        alert("ingrese un texto por favor")
        agregarCaja()
    }else{
        limpiarCaja()
            let textoEncriptado = textarea
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/o/gi, "over")
            .replace(/a/gi, "ai")
            .replace(/u/gi, "ufat")
            .replace(/g/gi, "game")
            .replace(/b/gi, "br")

            document.querySelector(".vacio__legal__parrafo").textContent = textoEncriptado;
    }
}
function desenCriptar (){
    textarea = document.querySelector(".main__textarea").value.toLowerCase();

    if (textarea.length === 0) {
        alert("ingrese un texto por favor")
        agregarCaja()
    }else{
        limpiarCaja()
            let textoEncriptado = textarea
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/over/gi, "o")
            .replace(/ai/gi, "a")
            .replace(/ufat/gi, "u")
            .replace(/game/gi, "g")
            .replace(/br/gi, "b")

            document.querySelector(".vacio__legal__parrafo").textContent = textoEncriptado;
    }
}

function limpiarCaja() {
    cajaVacia.style.display = "none"
    apareceParrafo.style.display = "block"
    apareceBoton.style.display = "block"
}

function agregarCaja() {
    cajaVacia.style.display = "block"
    apareceParrafo.style.display = "none"
    apareceBoton.style.display = "none"
}


function copiarTexto () {
    let textoCopiar = document.querySelector(".vacio__legal__parrafo").textContent;

    navigator.clipboard.writeText(textoCopiar).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}










// si jalaa!!!

// function encriptar(){
//     let textoEncriptado = textarea
//     .replace(/e/gi, "enter")
//     .replace(/i/gi, "imes")
//     .replace(/o/gi, "over")
//     .replace(/a/gi, "ai")
//     .replace(/u/gi, "ufat")

//     document.querySelector(".vacio__legal__parrafo").textContent = textoEncriptado;
// }

