<template>
    <div class="confirmation-page">
      <h2>Оформление заказа</h2>
      <form @submit.prevent="submitOrder">
        <div class="form-group">
          <label for="name">Имя:</label>
          <input
            id="name"
            type="text"
            v-model="form.name"
            required
            placeholder="Введите ваше имя"
          />
        </div>
        <div class="form-group">
          <label for="address">Адрес:</label>
          <input
            id="address"
            type="text"
            v-model="form.address"
            required
            placeholder="Введите ваш адрес"
          />
        </div>
        <div class="form-group">
          <label for="phone">Телефон:</label>
          <input
            id="phone"
            type="tel"
            v-model="form.phone"
            required
            placeholder="Введите ваш номер телефона"
          />
        </div>
        <button type="submit" class="confirm-button">Подтвердить заказ</button>
      </form>
      <p v-if="orderSuccess" class="success-message">Ваш заказ успешно оформлен!</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OrderConfirmation',
    data() {
      return {
        form: {
          name: '',
          address: '',
          phone: '',
        },
        orderSuccess: false,
      };
    },
    methods: {
      submitOrder() {
        if (this.form.name && this.form.address && this.form.phone) {
          // Логика для отправки данных (например, в API или localStorage)
          console.log('Заказ отправлен:', this.form);
  
          // Очистка формы и подтверждение
          this.form = { name: '', address: '', phone: '' };
          this.orderSuccess = true;
  
          // Очистка корзины
          localStorage.removeItem('cart');
        } else {
          alert('Пожалуйста, заполните все поля!');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .confirmation-page {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  
  h2 {
    text-align: center;
    color: #3a3a3a;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #3a3a3a;
  }
  
  input {
    width: 100%;
    padding: 10px;
    font-size: 1em;
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s ease;
  }
  
  input:focus {
    border-color: #42b983;
  }
  
  .confirm-button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1em;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 100%;
  }
  
  .confirm-button:hover {
    background-color: #379d72;
  }
  
  .success-message {
    margin-top: 20px;
    text-align: center;
    color: #42b983;
    font-size: 1.2em;
  }
  </style>
  