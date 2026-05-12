const btn = document.querySelector('#btn');
const txt = document.querySelector('#text');

btn.addEventListener('click', () => {
    setTimeout(() => {
        txt.textContent = 'ボタンをクリックしました';
    }, 2000)
})