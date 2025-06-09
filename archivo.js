document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("_MEI0h24XduHtVbVa"); 

    const form = document.getElementById('formulario');

    form.addEventListener('submit', function (event) {
    event.preventDefault();

    const captcha = document.getElementById('captcha').value.trim();

    if (captcha !== "5") {
    Swal.fire({
        icon: 'error',
        title: 'Captcha incorrecto',
        text: 'Por favor resolvé correctamente la suma (2 + 3).',
        confirmButtonColor: '#e74c3c'
        });
        return;
    }

    emailjs.sendForm('service_g6pdtpt', 'template_ifb0c43', this)
        .then(function () {
        Swal.fire({
            icon: 'success',
            title: '¡Enviado!',
            text: 'Tu mensaje fue enviado correctamente.',
            confirmButtonColor: '#27ae60'
        });
        form.reset();
        }, function (error) {
        Swal.fire({
            icon: 'error',
            text: 'Revisá los datos o intentá más tarde.',
            footer: JSON.stringify(error),
            confirmButtonColor: '#e67e22'
        });
        });
    });
});
