document.addEventListener('DOMContentLoaded', function () {
    // フェードイン要素を取得
    const fadeInElements = document.querySelectorAll('#Title-image, #concept, #coming');

    // 初期状態ではフェードイン要素を非表示にする
    fadeInElements.forEach(element => {
        element.style.opacity = '0';
    });

    // フェードインをページロード時に実行
    fadeInElements.forEach(element => {
        element.classList.add('fade-in');
    });
});

let isMenuOpen = false;
document.addEventListener('scroll', function () {
    const images = document.querySelectorAll('.main-visual');
    images.forEach(image => {
        const scrollY = window.scrollY;
        const amplitude = 20;
        const frequency = 0.01;
        const offset = Math.sin(-scrollY * frequency) * amplitude;
        image.style.transform = `translateY(${offset}px)`;
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('scroll', function () {
    const images = document.querySelectorAll('#wind03,#wind-ws,#wind-ad,#wind-ev,#wind-mv');
    images.forEach(image => {
        const scrollY = window.scrollY;
        const amplitude = 20; // 揺れの幅を調整
        const frequency = 0.01; // 揺れの速度を調整
        const offset = Math.sin(scrollY * frequency) * amplitude;
        image.style.transform = `translateY(${offset}px)`;
    });
});