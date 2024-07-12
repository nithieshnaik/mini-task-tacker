<template>
    <div>
      <h2>Signup</h2>
      <form @submit.prevent="signup">
        <div>
          <label for="name">Name:</label>
          <input type="text" v-model="name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <div>
          <label for="confirmPassword">Confirm Password:</label>
          <input type="password" v-model="confirmPassword" required />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'Signup',
    data() {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
    },
    setup() {
      const router = useRouter();
  
      const signup = async () => {
        if (this.password !== this.confirmPassword) {
          alert('Passwords do not match');
          return;
        }
        try {
          await axios.post('http://localhost:3000/auth/signup', {
            name: this.name,
            email: this.email,
            password: this.password
          });
          router.push('/login');
        } catch (error) {
          console.error('Signup failed:', error);
        }
      };
  
      return { signup };
    }
  });
  </script>
  