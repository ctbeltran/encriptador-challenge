// Declaración de Variables
let inputMessage = document.querySelector('#inputMessage');
let outputMessageContainer = document.querySelector('#outputMessageContainer');
let outputMessageTitle = document.querySelector('#outputMessageTitle');
let outputMessageText = document.querySelector('#outputMessageText');
let outputMessageImage = document.querySelector('#outputMessageImage');
let outputMessage = document.querySelector('#outputMessage');
let btnEncrypte = document.querySelector('#btnEncrypte');
let btnDecrypte = document.querySelector('#btnDecrypte');
let btnCopy = document.querySelector('#btnCopy');

// Declaración de funciones
clearTextArea = () => {
    inputMessage.value = '';
}

messageEncrypte = () => {
    let message = inputMessage.value;    
    let messageEncrypte = message.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    
    outputMessageContainer.classList.remove('justify-center');
    outputMessageContainer.classList.add('justify-between');      
    outputMessage.classList.remove('hidden');
    btnCopy.classList.remove('hidden');
    outputMessageTitle.classList.add('hidden');
    outputMessageText.classList.add('hidden');
    outputMessageImage.classList.remove('xl:inline');
    outputMessage.innerHTML = messageEncrypte;
    clearTextArea();
}

messageDesencrypte = () => {
    let message = inputMessage.value;    
    let messageDesencrypte = message.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    
    outputMessage.innerHTML = messageDesencrypte;
    clearTextArea();
}

copyClipBoard = () => {   
    let textCopy = outputMessage.textContent;    
    navigator.clipboard.writeText(textCopy);
}

loadDocument = () => {
    inputMessage.addEventListener('click', clearTextArea)
    btnEncrypte.addEventListener('click', messageEncrypte);
    btnDecrypte.addEventListener('click', messageDesencrypte);
    btnCopy.addEventListener('click', copyClipBoard);
}

// Asignación de eventos
window.addEventListener('DOMContentLoaded', loadDocument);