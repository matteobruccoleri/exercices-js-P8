const btn = document.getElementById('myButton');
const body = document.querySelector('body');

btn.addEventListener("click", () => {
    const message = document.createElement('p');
    message.textContent = 'Bonjour, vous avez cliqué sur le bouton !';

    body.insertBefore(message, btn.nextSibling);
})