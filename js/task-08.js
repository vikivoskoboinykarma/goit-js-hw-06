document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');
  
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Зупиняє відправку форми
  
      const {
        elements: { email, password }
      } = this;
  
      if (email.value.trim() === '' || password.value.trim() === '') {
        alert('Please fill in all fields');
      } else {
        const formData = {
          email: email.value,
          password: password.value,
        };
  
        console.log(formData);
  
        // Очистити значення полів
        this.reset();
      }
    });
  });
  
