const btnTheme = document.querySelector('.btn-theme');
const iconBtnTheme = document.querySelector('.btn-theme img');

const icons = {
    light: './assets/images/light-mode.png',
    dark: './assets/images/dark-mode.png'
}

let currentTheme = 'light';

function toggleTheme() {
    if(currentTheme == 'dark') {
        iconBtnTheme.src = icons.light;
        currentTheme = 'light'
        document.body.classList.add('light');
    } else {
        iconBtnTheme.src = icons.dark;
        currentTheme = 'dark';
        document.body.classList.remove('light');
    }
}

btnTheme.addEventListener('click', toggleTheme);