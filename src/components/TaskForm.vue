<template>
    <div>
      <h2>Add Task</h2>
      <form @submit.prevent="addTask">
        <div>
          <label for="title">Title:</label>
          <input type="text" v-model="title" required />
        </div>
        <div>
          <label for="description">Description:</label>
          <input type="text" v-model="description" required />
        </div>
        <div>
          <label for="category">Category:</label>
          <select v-model="category" required>
            <option value="IMPORTANT">Important</option>
            <option value="PERSONAL">Personal</option>
          </select>
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import axios from 'axios';
  
  export default defineComponent({
    name: 'TaskForm',
    emits: ['taskAdded'],
    setup(props, { emit }) {
      const title = ref('');
      const description = ref('');
      const category = ref('IMPORTANT');
  
      const addTask = async () => {
        try {
          await axios.post('http://localhost:3330/task', {
            title: title.value,
            description: description.value,
            category: category.value
          });
          emit('taskAdded');
          title.value = '';
          description.value = '';
          category.value = 'IMPORTANT';
        } catch (error) {
          console.error('Failed to add task:', error);
        }
      };
  
      return { title, description, category, addTask };
    }
  });
  </script>
  