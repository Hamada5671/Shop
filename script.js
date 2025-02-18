document.addEventListener('DOMContentLoaded', function () {
    const orderButtons = document.querySelectorAll('.order-button');
    orderButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Terima kasih telah memesan! Anda akan diarahkan ke WhatsApp.');
            // Redirecting to WhatsApp with a sample phone number and message
            window.location.href = 'https://wa.me/1234567890?text=Halo, saya ingin memesan!';
        });
    });
});
