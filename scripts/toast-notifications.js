const toast = document.querySelector('.toast');

let toastTimeOut;

export function showToast(notification) {
    toast.innerText = `${notification}`;
    toast.classList.add('active');
    clearTimeout(toastTimeOut);
    toastTimeOut = setTimeout(hideToast, 2500);
}

export function hideToast() {
    toast.classList.remove('active');
}