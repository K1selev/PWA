<template>
  <div id="app">
    <header>
      <h1>Photo Grid</h1>
      <!-- Кнопка переключения вида с двумя иконками -->
      <div class="view-toggle">
        <button
          @click="toggleView('one')"
          :class="{ active: view === 'one' }"
        >
          <span class="material-icons">filter_none</span>
        </button>
        <button
          @click="toggleView('three')"
          :class="{ active: view === 'three' }"
        >
          <span class="material-icons">calendar_view_month</span>
        </button>
      </div>
    </header>
    <main>
      <PhotoGrid :view="view" />
    </main>
  </div>
</template>

<script>
import PhotoGrid from './components/PhotoGrid.vue';

export default {
  name: 'App',
  components: {
    PhotoGrid,
  },
  data() {
    return {
      view: 'three', // Начальный режим отображения (по умолчанию — 2 изображения в строке)
    };
  },
  methods: {
    // Переключение между видами
    toggleView(viewType) {
      this.view = viewType;
    },
  },
};
</script>

<style>
/* Основные стили для header */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #333;
  color: white;
}

.view-toggle {
  display: flex;
  gap: 10px;
}

.view-toggle button {
  background: transparent;
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  font-size: 24px;
}

.view-toggle button.active {
  border-color: #007bff; /* Подсвечиваем активную кнопку */
  background-color: #007bff; /* Добавляем фоновый цвет */
  color: white;
}

button .material-icons {
  font-size: 24px;
}

button:focus {
  outline: none;
}

/* Эффект при наведении на кнопки */
.view-toggle button:hover {
  background: rgba(0, 123, 255, 0.1);
}
</style>
