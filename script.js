document.addEventListener('DOMContentLoaded', () => {
    const btnTw = document.getElementById('lang-tw');
    const btnEn = document.getElementById('lang-en');
    const elementsTw = document.querySelectorAll('.lang-tw');
    const elementsEn = document.querySelectorAll('.lang-en');

    btnTw.addEventListener('click', () => {
        btnTw.classList.add('active');
        btnEn.classList.remove('active');

        elementsTw.forEach(el => el.classList.remove('hidden'));
        elementsEn.forEach(el => el.classList.add('hidden'));

        document.documentElement.lang = 'zh-TW';
    });

    btnEn.addEventListener('click', () => {
        btnEn.classList.add('active');
        btnTw.classList.remove('active');

        elementsEn.forEach(el => el.classList.remove('hidden'));
        elementsTw.forEach(el => el.classList.add('hidden'));

        document.documentElement.lang = 'en';
    });
});