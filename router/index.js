import { createRouter, createWebHistory } from 'vue-router';
import WebdokPage from '@/pages/webdoks/_slug.vue';

const routes = [
  { 
    path: '/webdoks/:slug', 
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