<template>
  <div class="catalog">
    <div class="header">
      <h1 class="catalog-title">Аренда котов</h1>
      <div class="view-switcher">
        <button :class="{ active: view === 'grid' }" @click="changeView('grid')">
          <span class="material-icons">calendar_view_month</span>
        </button>
        <button :class="{ active: view === 'single' }" @click="changeView('single')">
          <span class="material-icons">filter_none</span>
        </button>
      </div>
    </div>

    <div :class="{'cat-grid': view === 'grid', 'cat-list': view === 'single'}">
      <div v-for="cat in cats" :key="cat.id" class="cat-card" :class="{ inCart: isInCart(cat) }">
        <img :src="require(`@/assets/photos/${cat.image}`)" :alt="cat.name" class="cat-image"/>
        <div class="cat-info">
          <h2>{{ cat.name }}</h2>
          <p class="cat-description">{{ cat.description }}</p>
          <div class="rental-options">
            <label :for="'rental-plan-' + cat.id">План аренды:</label>
            <select :id="'rental-plan-' + cat.id" v-model="cat.selectedPlan" @change="updatePrice(cat)">
              <option value="day">На день</option>
              <option value="week">На неделю</option>
              <option value="month">На месяц</option>
            </select>
          </div>
          
          <p class="price">{{ cat.price }} ₽/{{ planLabel(cat) }}</p>
          <button class="rent-button" @click="addToCart(cat)" :disabled="isInCart(cat)">Арендовать</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RentalCatalog',
  data() {
    return {
      view: 'grid',
      cats: [
        { id: 1, name: 'Барсик', description: 'Очень ласковый и пушистый.', priceDay: 200, priceWeek: 1200, priceMonth: 4000, image: 'photo1.jpg', selectedPlan: 'day', price: 200 },
        { id: 2, name: 'Мурка', description: 'Настоящий охотник.', priceDay: 250, priceWeek: 1500, priceMonth: 5000, image: 'photo2.jpg', selectedPlan: 'day', price: 250 },
        { id: 3, name: 'Снежок', description: 'Обожает внимание и игры.', priceDay: 300, priceWeek: 1800, priceMonth: 6000, image: 'photo3.jpg', selectedPlan: 'day', price: 300 },
        { id: 4, name: 'Василиса', description: 'Котик, который любит долго спать.', priceDay: 280, priceWeek: 1600, priceMonth: 5500, image: 'photo4.jpg', selectedPlan: 'day', price: 280 },
        { id: 5, name: 'Шарик', description: 'Шерстяной мурлык.', priceDay: 250, priceWeek: 1500, priceMonth: 5200, image: 'photo5.jpg', selectedPlan: 'day', price: 250 },
        { id: 6, name: 'Кеша', description: 'Любит гулять и играть.', priceDay: 220, priceWeek: 1300, priceMonth: 4600, image: 'photo6.jpg', selectedPlan: 'day', price: 220 }
      ],
    };
  },
  methods: {
    changeView(mode) {
      this.view = mode;
    },
    updatePrice(cat) {
      if (cat.selectedPlan === 'day') {
        cat.price = cat.priceDay;
      } else if (cat.selectedPlan === 'week') {
        cat.price = cat.priceWeek;
      } else if (cat.selectedPlan === 'month') {
        cat.price = cat.priceMonth;
      }
    },
    planLabel(cat) {
      return cat.selectedPlan === 'day' ? 'день' : (cat.selectedPlan === 'week' ? 'неделя' : 'месяц');
    },
    addToCart(cat) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ ...cat });
  localStorage.setItem('cart', JSON.stringify(cart));
  this.$router.push('/checkout'); // Переход в корзину после добавления
},
    isInCart(cat) {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      return cart.some(item => item.id === cat.id && item.selectedPlan === cat.selectedPlan);
    },
  }
};
</script>

<style scoped>
/* Общие стили */
.catalog {
  padding: 24px 16px;
  max-width: 1200px;
  margin: auto;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

/* Заголовок */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.catalog-title {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
}

.view-switcher {
  display: flex;
  gap: 8px;
}

.view-switcher button {
  padding: 10px 16px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.view-switcher button:hover, .view-switcher button.active {
  background-color: #f5f5f5;
  border-color: #ccc;
}

.view-switcher button.active {
  background-color: #ffca28;
  border-color: #ffb400;
}

.cat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.cat-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.cat-card {
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, opacity 0.3s ease;
}

.cat-card:hover {
  transform: translateY(-10px);
}

.cat-card.inCart {
  opacity: 0.5;
}

.cat-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.cat-info {
  padding: 16px;
}

.cat-info h2 {
  font-size: 1.4rem;
  font-weight: bold;
  color: #333;
}

.cat-description {
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 16px;
}

.rental-options {
  margin-bottom: 12px;
}

.rental-options label {
  display: block;
  font-size: 0.9rem;
  margin-bottom: 4px;
  color: #555;
}

.rental-options select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;
}

.price {
  font-size: 1.2rem;
  color: #333;
  font-weight: 600;
  margin-bottom: 16px;
}

.rent-button {
  background-color: #28a745;
  color: white;
  font-weight: bold;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.rent-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.rent-button:hover:enabled {
  background-color: #218838;
}
</style>
