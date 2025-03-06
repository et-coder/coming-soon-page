const errorIcon = document.querySelector('.error-icon');
const errorMsg = document.querySelector('.error-msg');
const btn = document.querySelector('button');
const input = document.querySelector('input');

btn.addEventListener('click', (e) => {

    e.preventDefault();
    const email = document.querySelector('input').value;

    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email)) {
        errorIcon.classList.remove('hidden');
        errorMsg.classList.remove('hidden');
        input.style.borderColor = 'red';
    } else {
        errorIcon.classList.add('hidden');
        errorMsg.classList.add('hidden');
        document.getElementById('email').value = '';
        input.style.borderColor = 'hsl(0, 36%, 70%)';
    }
});



