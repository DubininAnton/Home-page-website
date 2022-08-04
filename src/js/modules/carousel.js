import {getResourse} from "../services/requests";

const carousel =(slider, url) => {
    const carouselBoxItem = document.querySelector(slider);
    getResourse(url)
    .then(res => {
        res.forEach(item => {
        // Создаю карточку
          const card = document.createElement('div');
        // Создаю первую строку
          const row = document.createElement('div');
        // Левая часть первой строки
          const rowLeft = document.createElement('div'); 
        // Создаю img в первой строку
          const img = document.createElement('img');
        // Строка имени и фамилии
          const name = document.createElement('div');
          name.setAttribute('class', 'reviews__title');
          name.innerHTML = `${item.title}`;
        // Строка status
          const status = document.createElement('span');
          status.innerHTML = `${item.status}`;
        // Строка desciption
        const descr =document.createElement('div');
        descr.setAttribute('class', 'reviews__descr');
        descr.innerHTML = `${item.descr}`;
        // Строка footer в карточке отзыва
        const footer = document.createElement('div');
        footer.setAttribute('style', 'display: flex; align-items: center; margin-top:15px;');
        // Звезда в footer
        const star = document.createElement('img');
        star.setAttribute('src', `${item.star}`);
        star.setAttribute('style', 'margin-right: 8px');
        // Строка рейтига
        const raiting = document.createElement('div');
        raiting.innerHTML = `${item.raiting}`;


          img.setAttribute('class', 'reviews__img');
          img.setAttribute('src', `${item.photo}`);
          row.setAttribute("class", 'reviews__rowCard');
          row.appendChild(img);
          row.appendChild(rowLeft);
          rowLeft.appendChild(name);
          rowLeft.appendChild(status);
          card.appendChild(row);
          card.appendChild(descr);
          footer.appendChild(star);
          footer.appendChild(raiting);
          card.appendChild(footer);
          carouselBoxItem.appendChild(card);
        })
    })
    .then (()=> {
        $(slider).slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
                }
              }
            ]
          });
    })
    // .then(() => {itemCity = document.querySelectorAll(city)})
    // .then(()=> {getListenerInItemCity()})
    // .catch(error => console.log(error));
    
    
}

export default carousel;