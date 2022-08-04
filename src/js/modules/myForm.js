// import * as yup from 'yup';
import {postData} from '../services/requests';


const myForm = (name, button, form, number, email, labelForEmail) => {
    const clientName = document.querySelector(name);
    const buttonForm = document.querySelector(button);
    const myUseForm = document.querySelector(form);
    const myNumber = document.querySelector(number);
    const myEmail = document.querySelector(email);
    const MylabelForEmail = document.querySelector(labelForEmail);
    let matrix = "+7(___)___-__-__";

 

      myEmail.addEventListener('blur', (e) => {
        /* ^ начало строки
            \w все буквы и цифры
            . любой символ кроме перевода строки
            _ любая цифра, буква или знак подчеркивания
            - интервал, любой символ от a до z
            [+]? одно или несколько вхождений соответсвенно знака +
             \w все буквы и цифры
            . любой символ кроме перевода строки
            _ любая цифра, буква или знак подчеркивания
            @ наличие знака собачки
            \w все буквы и цифры
            . любой символ кроме перевода строки
            - интервал, любой символ от a до z
            \. поиск точки
            [a-zA-Z] все буквы
            {2,6} количество вхождений букв от 2 до 6 
            $ конец строки*/

       if(e.target.value.lenght === 0 || e.target.value.match(/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/) === null) {
        MylabelForEmail.innerHTML = 'Не верный формат email'
       } else {
        MylabelForEmail.innerHTML = "";
       }

    })

    /* Маска ввода номера телефона */
    const telephone = (action) => {
        let placeInLine;
        myNumber.addEventListener(action, (e)=>{
        e.target.value = matrix;
        placeInLine = myNumber.value.indexOf('_');
        myNumber.setSelectionRange(placeInLine, placeInLine);

        // if(action === "keyup") {
           try {
            const pressKeyCode = String.fromCharCode(e.keyCode); /* Определяю, что за клавиша была нажата */
            if(e.key.search(/[a-z]/g) === 0) {
                myNumber.value = matrix   
            } 
            /* Ввод цифр с клавиатуры */
            if(e.key !== "Backspace" && e.key !== "Delete" && e.keyCode >= 96 && e.keyCode <= 105) {
                enterNumber(48, placeInLine, e)
            }
            /* Ввод цифр с Numpad */
            if(e.key !== "Backspace" && e.key !== "Delete" && e.keyCode >= 48 && e.keyCode <= 57) {
                enterNumber(0, placeInLine, e)
            }
            if(e.key.search("Backspace") === 0) {
                matrix = matrix.replace(/\d(?=\D*$)/, "_");
                myNumber.value = matrix.substring(0,16);   
                placeInLine = myNumber.value.indexOf('_');
                myNumber.setSelectionRange(placeInLine, placeInLine);
            }
           } catch (error) {
            error => console.log(error)
           }
        // }
    })}

    telephone("keyup")
    telephone("focus")
    telephone("click")

    const enterNumber = (number, placeInLine, e) => {
        placeInLine = myNumber.value.indexOf('_');
        matrix = myNumber.value.replace("_", String.fromCharCode(e.keyCode-`${number}`));
        myNumber.value = matrix.substring(0,16);   
        placeInLine = myNumber.value.indexOf('_');
        myNumber.setSelectionRange(placeInLine, placeInLine);
    }

    /* Отправка формы */
    buttonForm.addEventListener('click', (e)=> {
        e.preventDefault();
        let collectionInformation ={}
        if(clientName.value !== '' && myNumber.value !== '' && myEmail.value !== '' && MylabelForEmail.textContent === '') {
            
            const formSend = new FormData(myUseForm);

            for (var [key, value] of formSend.entries()) { 
                collectionInformation[key] = value;
              }
              /* Пришлось вытащить данные из new FormData записать их в collectionInformation и отправить т.к. formSend отправлялся пустым*/
            postData('http://localhost:3000/database', collectionInformation)
                .then(res => {
                    if(res.ok) {
                        buttonForm.textContent = "Данные отправлены"
                        buttonForm.setAttribute('style','color:green')
                            setTimeout(()=> {
                                buttonForm.textContent = "Отправить"
                                buttonForm.setAttribute('style','color: black')  
                            }, 3000)
                    }
                })
                .catch(err => console.log(err))
                .finally(() => {
                    clientName.value = null;
                    myNumber.value = null;
                    myEmail.value = null;
                })
        } else {
            buttonForm.textContent = "Введены не все данные"
            buttonForm.setAttribute('style','background-color:red')
            setTimeout(()=> {
                buttonForm.textContent = "Отправить"
                buttonForm.setAttribute('style','background-color: orange')  
            }, 3000)

        }

    })
}

export default myForm;