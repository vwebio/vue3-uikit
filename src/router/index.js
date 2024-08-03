import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Elements from '../views/Elements.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/elements/:element', component: Elements }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
