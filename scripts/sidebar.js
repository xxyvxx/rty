document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.querySelector('.header__hamburger');
    const sidebar = document.getElementById('sidebar');
    const sidebarLinks = document.querySelectorAll('.sidebar__item-link');
    const closeButton = document.querySelector('.sidebar__hamburger'); // Кнопка "крестик"

    // Функция для открытия/закрытия меню
    function toggleSidebar() {
        sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
    }

    // Открытие меню при нажатии на бургер
    hamburgerButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Остановить всплытие события
        toggleSidebar();
    });

    // Закрытие меню при нажатии на крестик
    closeButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Остановить всплытие события
        sidebar.style.display = 'none'; // Закрываем меню
    });

    // Закрытие меню при нажатии на ссылку
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            sidebar.style.display = 'none'; // Закрываем меню
        });
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', function(event) {
        if (sidebar.style.display === 'block' && !sidebar.contains(event.target) && !hamburgerButton.contains(event.target)) {
            sidebar.style.display = 'none'; // Закрываем меню
        }
    });

    // Автоматическое закрытие меню при изменении размера окна
    window.addEventListener('resize', function() {
        if (window.innerWidth > 921) {
            sidebar.style.display = 'none'; // Закрываем меню
        }
    });
});