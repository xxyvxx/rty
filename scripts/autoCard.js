const cards = document.querySelectorAll('.auto__card');

cards.forEach(card => {
    // Находим основное изображение в карточке
    const activePhoto = card.querySelector('.slider__img');
    // Находим все мини-изображения в текущей карточке
    const miniImages = card.querySelectorAll('.slider__list li');

    miniImages.forEach(miniImage => {
        miniImage.addEventListener('click', function() {
            // Получаем изображение из мини-изображения
            const imgSrc = this.querySelector('img').src;

            // Меняем источник основного изображения
            activePhoto.src = imgSrc;

            // Удаляем класс active-item у всех мини-изображений
            miniImages.forEach(item => item.classList.remove('active-item'));
            // Добавляем класс active-item к кликнутому мини-изображению
            this.classList.add('active-item');
        });
    });
});