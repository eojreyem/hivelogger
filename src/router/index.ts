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
    path: '/apiary/:apiary',
    component: Apiary,
  },
  {
    path: '/apiary/:apiary/colony/:colony',
    component: Colonly,
  },
  {
    path: '/apiary/:apiary/colony/:colony/queen/:queen',
    component: Queen
  },
  {
    path: '/apiary/:apiary/colony/:colony/queen/new',
    component: NewQueen
  },
  {
    path: '/apiary/:apiary/colony/:colony/visit/:visit',
    component: Visit
  },
  {
    path: '/apiary/:apiary/colony/:colony/visit/new',
    component: NewVisit
  },
  {
    path: '/apiary/:apiary/colony/new',
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
