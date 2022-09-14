import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/survey',
      name: 'survey',
      component: () => import('@/views/SurveyView.vue')
    },
    {
      path: '/result',
      name: 'result',
      component: () => import('@/views/ResultView.vue')
    },
    {
      path: '/steps',
      name: 'steps',
      component: () => import('@/views/StepsView.vue')
    }
  ]
});

export default router;
