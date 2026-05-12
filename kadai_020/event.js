const dpBtn = document.getElementById('displayBtn');
const text = document.getElementById('text');

dpBtn.addEventListener('click', () => {
    text.textContent = 'ボタンをクリックしました';
})