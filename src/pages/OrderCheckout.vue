<template>
  <div class="checkout">
    <div class="header">
      <h1 class="checkout-title">Ваша корзина</h1>
    </div>
    <div class="cart-items">
      <div v-if="cart.length === 0" class="empty-cart">
        <p>Ваша корзина пуста. Добавьте котов для аренды!</p>
      </div>
      <div v-for="cat in cart" :key="cat.id" class="cart-item">
        <div class="cart-item-info">
          <img :src="require(`@/assets/photos/${cat.image}`)" :alt="cat.name" class="cat-image"/>
          <div class="item-details">
            <h2>{{ cat.name }}</h2>
            <p class="cat-description">{{ cat.description }}</p>
            <p class="rental-plan">Арендный план: {{ planLabel(cat) }}</p>
            <p class="price">{{ cat.price }} ₽/{{ planLabel(cat) }}</p>
          </div>
        </div>
        <div class="remove-button-container">
          <button class="remove-button" @click="removeFromCart(cat)">
            Удалить
          </button>
        </div>
      </div>
    </div>
    <div v-if="cart.length > 0" class="cart-footer">
      <div class="total">
        <span class="total-text">Итого:</span>
        <span class="total-price">{{ totalPrice }} ₽</span>
      </div>
      <button class="checkout-button" @click="$router.push('/confirm')">Перейти к оформлению</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderCheckout',
  data() {
    return {
      cart: JSON.parse(localStorage.getItem('cart')) || [],
    };
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((total, cat) => total + cat.price, 0);
    }
  },
  methods: {
    removeFromCart(cat) {
      this.cart = this.cart.filter(item => item.id !== cat.id || item.selectedPlan !== cat.selectedPlan);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    planLabel(cat) {
      return cat.selectedPlan === 'day' ? 'день' : (cat.selectedPlan === 'week' ? 'неделя' : 'месяц');
    }
  }
};
</script>

<style scoped>
.checkout {
  padding: 24px 16px;
  max-width: 1200px;
  margin: auto;
  background-color: #f5f5f5;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.checkout-title {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 24px;
}

/* Корзина пуста */
.empty-cart {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  text-align: center;
  font-size: 1.2rem;
  color: #777;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.cart-items {
  margin-bottom: 32px;
}

.cart-item {
  background-color: #fff;
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.cart-item:hover {
  transform: translateY(-10px);
}

.cart-item-info {
  display: flex;
  gap: 16px;
}

.cat-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}

.item-details {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.item-details h2 {
  font-size: 1.2rem;
  color: #333;
  font-weight: 600;
}

.cat-description {
  font-size: 1rem;
  color: #777;
}

.rental-plan {
  font-size: 1rem;
  color: #555;
}

.remove-button-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.remove-button {
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.remove-button:hover {
  background-color: #c82333;
}

/* Footer корзины */
.cart-footer {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 16px;
}

.total {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
}

.total-price {
  font-size: 1.4rem;
  color: #28a745;
}

.checkout-button {
  background-color: #28a745;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 16px;
}

.checkout-button:hover {
  background-color: #218838;
}
</style>
