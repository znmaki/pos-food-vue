import HomePageVue from '@/modules/home/pages/HomePage.vue'
import MenuPageVue from '@/modules/menu/pages/MenuPage.vue'
import PosLayout from '@/shared/layout/PosLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/pos-food'
    },
    {
      path: '/pos-food',
      name: 'posfood',
      component: PosLayout,
      children: [
        { path: 'home', name: 'home', component: HomePageVue },
        { path: '/menu/:typeMenu', name: 'menu', component: MenuPageVue },
        { path: 'history', name: 'history', component: HomePageVue },
        { path: 'promos', name: 'promos', component: HomePageVue },
        { path: 'settins', name: 'settins', component: HomePageVue },
      ]
    }
  ]
})

export default router
