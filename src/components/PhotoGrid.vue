<template>
  <div :class="['photo-grid', viewClass]">
    <div v-for="(src, index) in photos" :key="index" class="photo-item">
      <img :src="src" :alt="'Photo ' + (index + 1)" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoGrid',
  props: {
    view: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      photos: [
        require('@/assets/photos/photo1.jpg'),
        require('@/assets/photos/photo2.jpg'),
        require('@/assets/photos/photo3.jpg'),
        require('@/assets/photos/photo4.jpg'),
        require('@/assets/photos/photo5.jpg'),
        require('@/assets/photos/photo6.jpg'),
      ],
    };
  },
  computed: {
    viewClass() {
      return this.view === 'three' ? 'grid-three' : 'grid-one';
    },
  },
};
</script>

<style scoped>
.photo-grid {
  display: grid;
  gap: 20px; /* Расстояние между изображениями */
  padding: 40px; /* Отступы от краев экрана */
  justify-content: center; /* Центрирование */
}

.grid-three {
  grid-template-columns: repeat(3, minmax(150px, 1fr)); /* Колонки одинаковой ширины */
}

.grid-one {
  grid-template-columns: repeat(1, minmax(150px, 1fr)); /* Одна колонка */
}

.photo-item {
  aspect-ratio: 1 / 1; /* Сохраняет квадратный формат изображений */
  overflow: hidden; /* Убирает лишнее содержимое */
  border-radius: 10px; /* Закругление углов */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Тени для объема */
}

.photo-item img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Изображение заполняет контейнер, сохраняя пропорции */
  display: block;
  border: 2px solid #ddd; /* Граница изображений */
}

</style>
