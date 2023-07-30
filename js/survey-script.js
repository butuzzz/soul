let offset = 0; //смещение сверху
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.button-slider-next').addEventListener('click', function(){
    
    if (offset <= -3900) {
        offset = -5200;
        document.querySelector('.button-slider-prev').classList.add('none-v');
        document.querySelector('.button-slider-next').classList.add('none-v');
    } else {
        offset = offset - 1300;
        document.querySelector('.button-slider-prev').classList.remove('none-v');
        document.querySelector('.button-slider-prev').classList.remove('none-l');
    }

    if (offset == 0) {
        document.querySelector(".theme").textContent="Что Вы хотели бы обсудить?";
    } else if (offset == -1300) {
        document.querySelector(".theme").textContent="Укажите личные данные";
        document.querySelector('.bot-theme').classList.remove('thrd-style');
        document.querySelector('.bot-theme-icon').classList.remove('thrd-style-icon');
    } else if (offset == -2600) {
        document.querySelector(".theme").textContent="Выберите дату и время";
        document.querySelector('.bot-theme').classList.remove('thrd-style');
        document.querySelector('.bot-theme-icon').classList.remove('thrd-style-icon');
    } else if (offset == -3900) {
        document.querySelector(".theme").textContent="Оставьте свои контакты";
        document.querySelector('.bot-theme').classList.add('thrd-style');
        setTimeout(function() {
            document.querySelector('.bot-theme-icon').classList.add('thrd-style-icon');
        }, 720);
        setTimeout(function() {
            document.querySelector('.bot-theme').classList.remove('none-v');
            document.querySelector('.bot-theme-icon').classList.remove('none-v');
            document.querySelector('.theme').classList.remove('none-v');
        }, 500);   
        document.querySelector('.bot-theme').textContent="Так мы сможем связаться с Вами и быстро подобрать специалиста";
    } else if (offset <= -5200) {
        setTimeout(function() {
            document.querySelector('.bot-theme').classList.add('none-v');
            document.querySelector('.bot-theme-icon').classList.add('none-v');
            document.querySelector('.theme').classList.add('none-v');
            document.querySelector('.back-btn').classList.remove('none-v');
        }, 500);    
    }
    sliderLine.style.left = offset + 'px';

    if (slider.style.left == '-5200px') {
        document.querySelector('back-btn').classList.remove('none-v');
    }
});

document.querySelector('.button-slider-prev').addEventListener('click', function(){
    
    if (offset >= -1300) {
        offset = 0;
        document.querySelector('.button-slider-prev').classList.add('none-v');
        document.querySelector('.button-slider-next').classList.remove('none-v');
        document.querySelector('.button-slider-prev').classList.remove('none-l');
    } else {
        offset = offset + 1300;
        document.querySelector('.button-slider-next').classList.remove('none-v');
        document.querySelector('.button-slider-prev').classList.remove('none-l');
    }

    if (offset == 0) {
        document.querySelector(".theme").textContent="Что Вы хотели бы обсудить?";
        document.querySelector('.bot-theme').textContent="Оставьте свою заявку";
    } else if (offset == -1300) {
        document.querySelector(".theme").textContent="Укажите личные данные";
        document.querySelector('.bot-theme').textContent="Оставьте свою заявку";
        document.querySelector('.bot-theme').classList.remove('thrd-style');
        document.querySelector('.bot-theme-icon').classList.remove('thrd-style-icon');
    } else if (offset == -2600) {
        document.querySelector(".theme").textContent="Оставьте свои контакты";
        document.querySelector('.bot-theme').classList.add('thrd-style');
        setTimeout(function() {
            document.querySelector('.bot-theme-icon').classList.add('thrd-style-icon');
        }, 720);
        setTimeout(function() {
            document.querySelector('.bot-theme').classList.remove('none-v');
            document.querySelector('.bot-theme-icon').classList.remove('none-v');
            document.querySelector('.theme').classList.remove('none-v');
        }, 500);   
        document.querySelector('.bot-theme').textContent="Так мы сможем связаться с Вами и быстрее подобрать специалиста";
    } else if (offset <= -5200) {
        setTimeout(function() {
            document.querySelector('.bot-theme').classList.remove('none-v');
            document.querySelector('.bot-theme-icon').classList.remove('none-v');
            document.querySelector('.theme').classList.remove('none-v');
            document.querySelector('.back-btn').classList.remove('none-v');
        }, 500);   
    }
    sliderLine.style.left = offset + 'px';
});