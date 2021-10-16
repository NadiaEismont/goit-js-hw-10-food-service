import "./css/styles.css";
import menu from "./menu.json";
import templateRecipe from './templates/recipe.hbs';

const listMenu = document.querySelector('.js-menu');
const markup = templateRecipe(menu);
listMenu.insertAdjacentHTML('beforeend', markup);


const checkboxRef = document.querySelector('#theme-switch-toggle');
console.log(checkboxRef);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');


const onSwitchTheme = () => {
    const currentTheme = localStorage.getItem('localStorageTheme') === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    localStorage.setItem('localStorageTheme', currentTheme);
    if (currentTheme === Theme.LIGHT) {
        bodyRef.classList.add('light-theme');
        bodyRef.classList.remove('dark-theme');
    }
    else {
        bodyRef.classList.add('dark-theme');
        bodyRef.classList.remove('light-theme');
    };
}


checkboxRef.addEventListener('change', onSwitchTheme);

const savedTheme = localStorage.getItem('localStorageTheme');
switch (savedTheme) {
    case Theme.LIGHT:
        bodyRef.classList.add('light-theme');
        break;
    case Theme.DARK:
        bodyRef.classList.add('dark-theme');
        checkboxRef.setAttribute('checked', true);
        break;
    default:
        bodyRef.classList.add('light-theme');
        localStorage.setItem('localStorageTheme', Theme.LIGHT);
}


