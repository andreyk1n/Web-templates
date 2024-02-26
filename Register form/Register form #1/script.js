function validateForm() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    var nameError = document.getElementById('nameError');
    var phoneError = document.getElementById('phoneError');
    var emailError = document.getElementById('emailError');

    // Очищення попередніх помилок
    nameError.textContent = '';
    phoneError.textContent = '';
    emailError.textContent = '';

    // Валідація ім'я (приклад: не менше 3 символів)
    if (name.length === 0) {
      nameError.textContent = 'Будь ласка, введіть ім\'я.';
    } else if (name.length < 3) {
      nameError.textContent = 'Ім\'я повинно містити щонайменше 3 символи.';
      document.getElementById('name').value = ''; // Очищення поля ім'я
    }

    // Валідація телефону (приклад: формат +380XXXXXXXXX)
    if (phone.length === 0) {
      phoneError.textContent = 'Будь ласка, введіть номер телефону.';
    } else {
      var phonePattern = /^\+380\d{9}$/;
      if (!phonePattern.test(phone)) {
        phoneError.textContent = 'Введіть коректний номер телефону (+380XXXXXXXXX).';
        document.getElementById('phone').value = ''; // Очищення поля телефон
      }
    }

    // Валідація емейлу
    if (email.length === 0) {
      emailError.textContent = 'Будь ласка, введіть емейл.';
    } else {
      var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(email)) {
        emailError.textContent = 'Введіть коректний емейл.';
        document.getElementById('email').value = ''; // Очищення поля емейл
      }
    }

    // Перевірка, чи є хоча б одне поле порожнім
    if (name.length === 0 || phone.length === 0 || email.length === 0) {
      // alert('Будь ласка, заповніть всі поля форми.');
      return false;
    }

    // Якщо валідація пройшла успішно, ви можете робити подальші дії або відправляти дані
  //   alert('Форма валідна! Дані готові до відправлення.');
  }