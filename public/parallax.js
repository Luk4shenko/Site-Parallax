const parallaxContainer = document.querySelector('.parallax-container');

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const offsetX = (clientX - centerX) / 30; // Увеличьте коэффициенты для более динамичного эффекта
    const offsetY = (clientY - centerY) / 30; // Увеличьте коэффициенты для более динамичного эффекта

    parallaxContainer.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.2)`; // Зум-эффект (scale)
});
