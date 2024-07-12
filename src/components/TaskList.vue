<template>
    <div>
      <h2>Task List</h2>
      <ul>
        <li v-for="task in tasks" :key="task._id">{{ task.title }}</li>
      </ul>
      <TaskForm @taskAdded="fetchTasks" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import axios from 'axios';
  import TaskForm from './TaskForm.vue';
  
  export default defineComponent({
    name: 'TaskList',
    components: { TaskForm },
    setup() {
      const tasks = ref([]);
  
      const fetchTasks = async () => {
        try {
          const response = await axios.get('http://localhost:3330/task');
          tasks.value = response.data;
        } catch (error) {
          console.error('Failed to fetch tasks:', error);
        }
      };
  
      onMounted(fetchTasks);
  
      return { tasks, fetchTasks };
    }
  });
  </script>
  