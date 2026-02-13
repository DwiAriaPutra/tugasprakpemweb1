
const scriptURL = 'https://script.google.com/macros/s/AKfycby7Iq1Yi8oB9iQJH1GUUnqCQ7_gNPK63z_ZNBKN7xjPTBSvV8A65_vSC4m6IW-JC8BOuw/exec';

const form = document.getElementById('contactForm');
const responseMessage = document.getElementById('responseMessage');

form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, {
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