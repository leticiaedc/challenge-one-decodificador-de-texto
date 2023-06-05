import "./theme-toggle.js";
import { encrypt, decrypt } from "./patterns.js";
import { hideToast, showToast } from "./toast-notifications.js";

const btnEncrypt = document.querySelector('#btn-encrypt');
const btnDecrypt = document.querySelector('#btn-decrypt');
const btnCopy = document.querySelector('#btn-copy');

const textInput = document.querySelector('.input-text');

const noResultContainer = document.querySelector('.no-result');
const resultContainer = document.querySelector('.result');

function showNoResultContainer() {
    noResultContainer.classList.remove('inative');
}

function hideNoResultContainer() {
    noResultContainer.classList.add('inative');
}

function showResultContainer() {
    resultContainer.classList.add('active');
}

function hideResultContainer() {
    resultContainer.classList.remove('active');
}

function getResultText() {
    const textResult = document.querySelector('.result-text');
    return textResult.innerText;
}

function setResult(result) {
    const textResult = document.querySelector('.result-text');
    textResult.innerText = result;
}

function setTextInputValue(result) {
    textInput.value = result;
}

function normalizeString(str) {
    return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function btnOnEncrypt() {
    if(textInput.value.trim()) {
        const stringEncrypted = encrypt(normalizeString(textInput.value));
        hideNoResultContainer();
        showResultContainer();
        setResult(stringEncrypted);
        setTextInputValue("");
        textInput.focus();
    } else {
        showNoResultContainer();
        hideResultContainer();
    }
}

function btnOnDecrypt() {
    if (textInput.value.trim()) {
        const stringDecrypted = decrypt(normalizeString(textInput.value));
        hideNoResultContainer();
        showResultContainer();
        setResult(stringDecrypted);
        setTextInputValue("");
        textInput.focus();
    } else {
        showNoResultContainer();
        hideResultContainer();
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}

function btnOnCopy() {
    copyToClipboard(getResultText());
    textInput.focus();
    showToast('Texto copiado!');
}

btnEncrypt.addEventListener('click', btnOnEncrypt);

btnDecrypt.addEventListener('click', btnOnDecrypt);

btnCopy.addEventListener('click', btnOnCopy);

textInput.addEventListener('input', (e) => {
    textInput.value = normalizeString(e.target.value);
});

