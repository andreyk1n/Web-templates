document.addEventListener('DOMContentLoaded', function () {
    const headerIcon = document.querySelector('.header-icon');
    const hiddenContent = document.querySelector('.header-hidden');
    const headerBars = document.querySelectorAll('.header-bar');
    const overlay = document.querySelector('.overlay');

    headerIcon.addEventListener('click', function () {
        hiddenContent.classList.toggle('show');
        headerBars.forEach(bar => bar.classList.toggle('open'));
        overlay.classList.toggle('show'); // Додати або видалити клас для оверлея
    });

    overlay.addEventListener('click', function () {
        hiddenContent.classList.remove('show');
        headerBars.forEach(bar => bar.classList.remove('open'));
        overlay.classList.remove('show'); // Видалити клас для оверлея при кліку на нього
    });
});
