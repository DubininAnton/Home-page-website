import header from "./modules/header";
import program from './modules/program';
import carousel from './modules/carousel';
import myForm from './modules/myForm';

window.addEventListener('DOMContentLoaded', () => {
    header("http://localhost:3000/cities", '.modalCity', '.header__arrowDown', '.header__arrowUp', '.modalCity__city', '.modalCity__close', '.header__selectedCity', '.header__wrapperCity');
    program('.program__item', '.list');
    carousel('.reviews__carousel', 'http://localhost:3000/reviews');
    myForm('.dataCollection__name', '#dataCollectionButton', '.dataCollection__form', '.dataCollection__telephone', '.dataCollection__email', '#labelForEmail');


});