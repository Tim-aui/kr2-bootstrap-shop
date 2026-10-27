// Проверка формы (пример из документации Bootstrap)
const forms = document.querySelectorAll('.needs-validation');

forms.forEach(function (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (form.checkValidity()) {
      alert('Спасибо! Заявка отправлена.');
      form.reset();
      form.classList.remove('was-validated');
    } else {
      form.classList.add('was-validated');
    }
  });
});
