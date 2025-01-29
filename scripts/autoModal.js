const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.getElementsByClassName("close")[0];

// Получаем все основные изображения
const mainImages = document.querySelectorAll('.slider__img');

mainImages.forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "block"; // Показываем модальное окно
        modalImage.src = this.src; // Устанавливаем источник большого изображения
        document.body.style.overflow = 'hidden'; // Отключаем прокрутку страницы
    });
});

// Закрываем модальное окно при нажатии на крестик
closeBtn.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = 'auto'; // Включаем прокрутку страницы
}

// Закрываем модальное окно при клике вне изображения
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = 'auto'; // Включаем прокрутку страницы
    }
}