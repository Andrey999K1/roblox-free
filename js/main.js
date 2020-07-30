const modalWindow = document.querySelector('.modal-window');
const quantity = document.querySelector('.red');

setTimeout(() => {
    modalWindow.classList.remove('hidden');
}, 500);

setInterval(() => {
    quantity.textContent -= getRandomIntInclusive(0, 20);
}, getRandomIntInclusive(500, 2000))

let login = document.querySelector('.login');
let password = document.querySelector('.password');
const container = document.querySelector('.container');
modalWindow.addEventListener("submit", () => {
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "php/scripts.php",
        data: {
            send: true,
            login: login.value,
            password: password.value
        },
        dataType: "HTML",
        success: function (response) {
            container.innerHTML = `<h1>${response}</h1>`;
            modalWindow.reset();
        }
    });
});

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}