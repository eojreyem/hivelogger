import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
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
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
