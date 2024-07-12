import { createRouter, createWebHistory  ,type RouteRecordRaw} from 'vue-router'
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';
import TaskList from '../components/TaskList.vue';
const routes: Array<RouteRecordRaw> = [
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/tasks', component: TaskList }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;


