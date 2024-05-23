let isMenuOpen = false;
document.addEventListener('scroll', function () {
    const images = document.querySelectorAll('.main-visual');
    images.forEach(image => {
        const scrollY = window.scrollY;
        const amplitude =20; 
        const frequency = 0.01; 
        const offset = Math.sin(scrollY * frequency) * amplitude;
        image.style.transform = `translateY(${offset}px)`; // Y軸方向に移動
    });
});

