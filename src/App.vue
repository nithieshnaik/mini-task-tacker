<template>
  <div id="app">
    <nav>
      <router-link to="/login">Login</router-link>
      <router-link to="/signup">Signup</router-link>
      <router-link to="/tasks">Tasks</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
});
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

nav {
  padding: 8px;
  background-color: #42b983;
  text-align: center;
}

nav a {
  margin: 0 15px;
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

form div {
  margin-bottom: 12px;
}

form label {
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
}

form input,
form select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #369c72;
}

h2 {
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #f4f4f4;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
}
</style>
