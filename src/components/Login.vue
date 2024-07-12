<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';
  
  export default defineComponent({
    name: 'Login',
    data() {
      return {
        email: '',
        password: ''
      };
    },
    setup() {
      const router = useRouter();
      const store = useStore();
  
      const login = async () => {
        try {
          const response = await axios.post('http://localhost:3000/auth/login', {
            email: this.email,
            password: this.password
          });
          store.commit('setToken', response.data.token);
          router.push('/tasks');
        } catch (error) {
          console.error('Login failed:', error);
        }
      };
  
      return { login };
    }
  });
  </script>
  