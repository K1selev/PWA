<template>
    <div class="cart">
      <h1>Корзина</h1>
      <div v-if="cart.length > 0" class="cart-items">
        <div
          v-for="(item, index) in cart"
          :key="index"
          class="cart-item"
        >
          <img :src="item.image" />
          <div>
            <h2>{{ item.name }}</h2>
            <p>Период аренды:</p>
            <select v-model="item.rentalPeriod" @change="updateCart">
              <option value="day">1 день</option>
              <option value="week">1 неделя</option>
              <option value="month">1 месяц</option>
            </select>
            <strong>Цена: {{ calculatePrice(item) }} ₽</strong>
          </div>
          <button @click="removeFromCart(index)">Удалить</button>
        </div>
        <h3>Итого: {{ total }} ₽</h3>
        <router-link to="/checkout" class="checkout-button">Оформить заказ</router-link>
      </div>
      <div v-else>
        <p>Корзина пуста.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cart: [],
      };
    },
    computed: {
      total() {
        return this.cart.reduce((sum, item) => sum + this.calculatePrice(item), 0);
      },
    },
    methods: {
      calculatePrice(item) {
        if (item.rentalPeriod === 'day') return item.priceDay;
        if (item.rentalPeriod === 'week') return item.priceWeek;
        if (item.rentalPeriod === 'month') return item.priceMonth;
      },
      removeFromCart(index) {
        this.cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(this.cart));
      },
      updateCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
      },
    },
    mounted() {
      this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    },
  };
  </script>
  
<style scoped>
.cart {
  padding: 20px;
  max-width: 800px;
  margin: auto;
}

.cart h1 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.cart-item {
  display: flex;
  gap: 15px;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.cart-item img {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
}

.cart-item div {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.cart-item h2 {
  margin: 0;
  font-size: 1.25rem;
  color: #333;
}

.cart-item p {
  margin: 5px 0;
  color: #666;
}

.cart-item select {
  margin-top: 5px;
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.cart-item strong {
  margin-top: 10px;
  font-size: 1.2rem;
  color: #000;
}

.cart-item button {
  align-self: flex-start;
  background: #ff4d4d;
  color: #fff;
  border: none;
  padding: 10px 15px;
  font-size: 0.9rem;
  border-radius: 5px;
  cursor: pointer;
}

.cart-item button:hover {
  background: #e33e3e;
}

.cart h3 {
  margin-top: 20px;
  font-size: 1.5rem;
  text-align: right;
}

.checkout-button {
  display: block;
  margin-top: 20px;
  padding: 15px;
  text-align: center;
  color: #fff;
  background: #28a745;
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 8px;
  transition: background 0.3s ease;
}

.checkout-button:hover {
  background: #218838;
}

.cart p {
  text-align: center;
  font-size: 1.2rem;
  color: #777;
  margin: 40px 0;
}
</style>
  