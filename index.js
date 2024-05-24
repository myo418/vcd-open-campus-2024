document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('youtube-modal');
    const closeButton = document.querySelector('.close-button');

    // フェードイン要素を取得
    const fadeInElements = document.querySelectorAll('#Title-image, #concept, #coming');

    // 初期状態ではフェードイン要素を非表示にする
    fadeInElements.forEach(element => {
        element.style.opacity = '0';
    });

    // Show the modal when the page loads
    modal.style.display = 'flex';

    // モーダルを閉じるときの動作
    function closeModal() {
        modal.classList.add('modal-fade-out'); // フェードアウトを開始
        setTimeout(() => {
            modal.style.display = 'none'; // モーダルを非表示
            fadeInElements.forEach(element => {
                element.classList.add('fade-in'); // フェードインを開始
            });
        }, 800); // フェードアウトアニメーションの時間（2秒）と一致
    }

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', closeModal);

    // Close the modal when the user clicks anywhere outside of the modal content
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});

let isMenuOpen = false;
document.addEventListener('scroll', function () {
    const images = document.querySelectorAll('.main-visual');
    images.forEach(image => {
        const scrollY = window.scrollY;
        const amplitude =20; 
        const frequency = 0.01; 
        const offset = Math.sin(-scrollY * frequency) * amplitude;
        image.style.transform = `translateY(${offset}px)`; 
    });
});

