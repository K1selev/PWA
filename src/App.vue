<template>
  <div id="app">
    <header>
      <h1>Photo Grid</h1>
      <button @click="toggleView">Toggle View</button>
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
      view: 'three', // "three" or "one"
    };
  },
  methods: {
    toggleView() {
      this.view = this.view === 'three' ? 'one' : 'three';
    },
  },
};
</script>

<style>
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
  color: #fff;
}

button {
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}

main {
  padding: 20px;
}
</style>
