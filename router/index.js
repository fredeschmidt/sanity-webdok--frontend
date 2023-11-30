import { createRouter, createWebHistory } from 'vue-router';
import WebdokPage from '@/pages/webdok/_slug.vue';

const routes = [
  { 
    path: '/webdok/:slug', 
    name: 'Webdok', 
    component: WebdokPage
  },
  // Andre ruter...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;