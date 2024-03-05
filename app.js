let botonEncriptar = document.getElementById('botonencriptar');
botonEncriptar.addEventListener('click', (event) => {
    let textoIntroducido = document.getElementById('textointroducido').value;
    if (textoIntroducido.trim() === '') {
        document.getElementById('mostrartexto').value = ` \t\t\t\t¡⚠ERROR!\nPor favor, ingresa un mensaje antes de encriptar.`;
        document.getElementById('mostrartexto').style.color = 'red';
        document.getElementById('first-article').classList.add('oculto');
        document.getElementById('second-article').classList.remove('oculto');
    } else if (caracteresEspeciales(textoIntroducido)) {
        document.getElementById('mostrartexto').value = `Texto Introducido: ${textoIntroducido}\n\n¡⚠Error, no se permiten mayúsculas ni caracteres especiales!`;
        document.getElementById('mostrartexto').style.color = 'red';
        document.getElementById('first-article').classList.add('oculto');
        document.getElementById('second-article').classList.remove('oculto');
    } else {
        let textoEncriptado = encriptar(textoIntroducido);
        document.getElementById('mostrartexto').value = textoEncriptado;
        document.getElementById('mostrartexto').style.color = 'black';
        document.getElementById('first-article').classList.add('oculto');
        document.getElementById('second-article').classList.remove('oculto');
    }
    limpiarTextArea('textointroducido');
});


//Evento para desencriptar el texto
let botonDesencriptar = document.getElementById('botondesencriptar');
botonDesencriptar.addEventListener('click', (event) => {
    let textoIntroducido = document.getElementById('textointroducido').value;
    if (textoIntroducido.trim() === '') {
        document.getElementById('mostrartexto').value = ` \t\t\t\t¡⚠ERROR!\nPor favor, ingresa un mensaje antes de desencriptar.`;
        document.getElementById('mostrartexto').style.color = 'red';
        document.getElementById('first-article').classList.add('oculto');
        document.getElementById('second-article').classList.remove('oculto');
    } else if (caracteresEspeciales(textoIntroducido) == true) {
        document.getElementById('mostrartexto').value = `Texto Introducido: ${textoIntroducido}\n\n¡⚠ERROR!, No se permiten mayúsculas ni caracteres especiales`;
        document.getElementById('mostrartexto').style.color = 'red';
        document.getElementById('first-article').classList.add('oculto');
        document.getElementById('second-article').classList.remove('oculto');
    } else {
        let textoDesencriptado = desencriptar(textoIntroducido);
        document.getElementById('mostrartexto').value = textoDesencriptado;
        document.getElementById('mostrartexto').style.color = 'black';
        document.getElementById('first-article').classList.add('oculto');
        document.getElementById('second-article').classList.remove('oculto');
    }
    limpiarTextArea('textointroducido');
});

//Evento para copiar el texto
let botonCopiar = document.getElementById('botoncopiar');
botonCopiar.addEventListener('click', (event) => {
    let copia = document.getElementById('mostrartexto');
    copia.select();
    navigator.clipboard.writeText(copia.value);
});

let botonNuevo = document.getElementById('botonnuevo');
botonNuevo.addEventListener('click', (event) => {
    limpiarTextArea('mostrartexto');
    document.getElementById('first-article').classList.remove('oculto');
    document.getElementById('second-article').classList.add('oculto');
});

//Funcion para encriptar el texto
function encriptar(frase) {
    const fraseParaEncriptar = frase.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    return fraseParaEncriptar;
}

//Funcion para desencriptar el texto
function desencriptar(frase) {
    const fraseParaDesencriptar = frase.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    return fraseParaDesencriptar;
}

//Funcion para limpiar el textarea
function limpiarTextArea(id) {
    document.getElementById(id).value = '';
}

function caracteresEspeciales(texto) {
    // Verificar si hay al menos una letra mayúscula
    var tieneMayuscula = /[A-Z]/.test(texto);

    // Verificar si hay caracteres especiales
    var tieneEspeciales = /[^a-z\s]/i.test(texto); // Permite solo letras minúsculas y espacios

    return tieneMayuscula || tieneEspeciales;
}






