document.addEventListener('DOMContentLoaded', function () {
    const orderButtons = document.querySelectorAll('.order-button');
    orderButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Terima kasih telah memesan! Anda akan diarahkan ke WhatsApp.');
        });
    });
});
