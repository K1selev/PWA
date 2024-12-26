<template>
  <div id="app">
    <!-- Верхняя панель навигации -->
    <header class="navbar">
      <div class="navbar-container">
        <!-- Логотип -->
        <div class="logo">
          <router-link to="/" class="logo-link">RentCats</router-link>
        </div>

        <!-- Меню -->
        <nav class="nav-links">
          <router-link to="/" class="nav-link">Каталог</router-link>
          <router-link to="/checkout" class="nav-link">Корзина</router-link>
        </nav>

        <!-- Иконка корзины -->
        <div class="cart-icon-container">
          <router-link to="/checkout" class="cart-icon-link">
            <img src="@/assets/logo.png" alt="Корзина" class="cart-icon" />
            <span class="cart-count">{{ cart.length }}</span>
          </router-link>
        </div>
      </div>
    </header>

    <!-- Основной контент приложения -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      cart: JSON.parse(localStorage.getItem('cart')) || [],
    };
  },
};
</script>

<style scoped>
/* Основные стили для приложения и навигационной панели */

/* Стиль для navbar */
.navbar {
  background-color: #28a745; /* Зеленый цвет в стиле HIG */
  color: white;
  padding: 14px 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  margin-right: 24px;
}

.logo-link {
  text-decoration: none;
  color: white;
  transition: color 0.3s;
}

.logo-link:hover {
  color: #f8f9fa;
}

.nav-links {
  display: flex;
  gap: 32px;
}

.nav-link {
  text-decoration: none;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 8px 12px;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #f8f9fa;
  border-bottom: 2px solid white; /* Подчеркнуты ссылки при наведении */
}

.cart-icon-container {
  position: relative;
}

.cart-icon-link {
  text-decoration: none;
}

.cart-icon {
  width: 24px;
  height: 24px;
  fill: white;
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #dc3545;
  color: white;
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 0.9rem;
}

/* Основной контент */
main {
  margin-top: 80px; /* Чтобы контент не перекрывался навигационной панелью */
  padding: 20px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}
</style>
