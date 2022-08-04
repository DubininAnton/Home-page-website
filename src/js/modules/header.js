import {getResourse} from "../services/requests";

const header =(url, modal, down, up, city, close, selectedCity, wrapperElement)=> {
    const modalWindow = document.querySelector(modal);
    const arrowDown = document.querySelector(down);
    const arrowUp = document.querySelector(up);
    let itemCity = '';
    const exit = document.querySelector(close);
    const selectCity = document.querySelector(selectedCity);
    const wrapper = document.querySelector(wrapperElement);

    const getListenerInItemCity =() => {
        itemCity.forEach(item => {
            item.addEventListener('click', (e)=> {
               if(e.target.getAttribute('class') === 'modalCity__city') { 
                selectCity.innerHTML = e.target.getAttribute('data-city');
                selectCity.setAttribute('class', 'header__selectedCity active');
                hideModal()
               }
            })
        })
    }

    getResourse(url)
        .then(res => {
            res.forEach(item => {
                const modalCityGrid = document.querySelector('.modalCity__grid');
                const modalCityCity = document.createElement('div');
                modalCityCity.setAttribute('class','modalCity__city');
                modalCityCity.setAttribute('data-city',`${item}`);
                modalCityCity.innerHTML = item;
                modalCityGrid.appendChild(modalCityCity);
            })
        })
        .then(() => {itemCity = document.querySelectorAll(city)})
        .then(()=> {getListenerInItemCity()})
        .catch(error => console.log(error));

        

        const hideModal = () => {
            wrapper.setAttribute('class', 'header__wrapperCity');
            modalWindow.style.display = 'none';
            arrowDown.style.display = "";
            arrowUp.style.display = "none";
        }
        hideModal();

        const showModal = () => {
            arrowDown.addEventListener("click", () => {
                wrapper.setAttribute('class', 'selectedButtom header__wrapperCity');
                modalWindow.style.display = '';
                arrowDown.style.display = "none";
                arrowUp.style.display = "";    
            })
        }
        showModal();

        arrowUp.addEventListener('click', ()=> {
            hideModal();
        })

        exit.addEventListener('click', ()=> {
            hideModal();
        })
 
}

export default header;