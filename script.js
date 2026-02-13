const scripURL = 'https://script.google.com/macros/s/AKfycbyq1qaj83coMtAeyasDFxybqTOcIlkRsUd9lkitOQ5wDEFHKa3WwPD2-RzGxEQ_ow8zQg/exec';

const form = document.getElementById('contactForm');
const responseMessage = document.getElementById('responseMessage');

form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scripURL, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(respponse => {
        responseMessage.textContent = "Pesan Berhasil Dikirim, Terima Kasih..";
        form.reset();
    })
    .catch(error => {
        responseMessage.textContent = "Gagal Mengirim Pesan, Silahkan Coba Lagi..";
        console.error('ERROR!', error.message);
    });
});