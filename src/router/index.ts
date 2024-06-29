import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import Home from '@/views/Home.vue';
import Apiary from '@/views/apiary/Apiary.vue';
import Colonly from '@/views/apiary/colony/Colonly.vue';
import Queen from '@/views/apiary/colony/queen/Queen.vue';
import NewQueen from '@/views/apiary/colony/queen/NewQueen.vue';
import Visit from '@/views/apiary/colony/visit/Visit.vue';
import NewVisit from '@/views/apiary/colony/visit/NewVisit.vue';
import NewColony from '@/views/apiary/colony/NewColony.vue';
import NewApiary from '@/views/apiary/NewApiary.vue';

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   redirect: '/tabs/tab1'
  // },
  {
    path: '/',
    component: Home,
  },
  {
    path: '/apiary/1',
    component: Apiary,
  },
  {
    path: '/apiary/1/colony/1',
    component: Colonly,
  },
  {
    path: '/apiary/1/colony/1/queen/1',
    component: Queen
  },
  {
    path: '/apiary/1/colony/1/queen/new',
    component: NewQueen
  },
  {
    path: '/apiary/1/colony/1/visit/1',
    component: Visit
  },
  {
    path: '/apiary/1/colony/1/visit/new',
    component: NewVisit
  },
  {
    path: '/apiary/1/colony/new',
    component: NewColony
  },
  {
    path: '/apiary/new',
    component: NewApiary
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
