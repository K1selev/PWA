<template>
  <div :class="['photo-grid', gridClass]">
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
    gridClass() {
      if (this.view === 'three') {
        return 'grid-three';
      } else {
        return 'grid-one';
      }
      
    },
  },
};
</script>

<style scoped>
.photo-grid {
  display: grid;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
}

/* Стили для отображения трех изображений в строке */
.grid-three {
  grid-template-columns: repeat(3, 1fr); /* Три изображения в строке */
}

/* Стили для одного изображения в строке */
.grid-one {
  grid-template-columns: 1fr; /* Одно изображение */
}

.photo-item {
  aspect-ratio: 1 / 1; /* Пропорции для изображений */
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.photo-item img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Масштабирование с обрезкой */
}

/* Адаптация сетки для маленьких экранов */
/* @media (max-width: 767px) {
  .photo-grid {
    grid-template-columns: repeat(2, 1fr);
  }
} */
</style>
