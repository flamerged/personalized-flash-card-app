const hintButton = document.getElementById('hintButton');
const hint = document.getElementById('hint');
console.log('this app exists');
hintButton.addEventListener('click', () => {
    hint.style.display = 'block';
    hintButton.style.display = 'none';
});
