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
            .replace(/[eé]/gi, "enter")
            .replace(/[ií]/gi, "imes")
            .replace(/[oó]/gi, "over")
            .replace(/[aá]/gi, "ai")
            .replace(/[uú]/gi, "ufat")
            .replace(/g/gi, "game")
            .replace(/b/gi, "br")
            .replace(/[?]/gi, "arrr")
            .replace(/[¿]/gi, "errr")
            .replace(/[/]/gi, "barr")
            .replace(/[#]/gi, "ffr")
            .replace(/[$]/gi, "kkr")
            .replace(/[%]/gi, "xxr")
            .replace(/[&]/gi, "qqr")
            .replace(/[=]/gi, "yyr")
            .replace(/[¡]/gi, "nnr")
            .replace(/[!]/gi, "mmr")
            .replace(/[{]/gi, "ttw")
            .replace(/[}]/gi, "wwt")
            .replace(/[[]/gi, "yyw")
            .replace(/[\]]/gi, "wwy")
            .replace(/[(]/gi, "ssw")
            .replace(/[)]/gi, "wws")
            .replace(/["]/gi, "cmmt")
            .replace(/[¨]/gi, "cnnt")
            .replace(/[`]/gi, "cmns")
            .replace(/[´]/gi, "cnms")
            .replace(/[|]/gi, "ddw")
            .replace(/[°]/gi, "ggw")



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
            .replace(/arrr/gi, "?")
            .replace(/errr/gi, "¡")
            .replace(/barr/gi, "/")
            .replace(/ffr/gi, "#")
            .replace(/kkr/gi, "$")
            .replace(/xxr/gi, "%")
            .replace(/qqr/gi, "&")
            .replace(/yyr/gi, "=")
            .replace(/nnr/gi, "¡")
            .replace(/mmr/gi, "!")
            .replace(/ttw/gi, "{")
            .replace(/wwt/gi, "}")
            .replace(/yyw/gi, "[")
            .replace(/wwy/gi, "]")
            .replace(/ssw/gi, "(")
            .replace(/wws/gi, ")")
            .replace(/cmmt/gi, "\"")
            .replace(/cnnt/gi, "¨")
            .replace(/cmns/gi, "`")
            .replace(/cnms/gi, "´")
            .replace(/ddw/gi, "|")
            .replace(/ggw/gi, "°")
            

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

