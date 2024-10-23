import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import Apiary from '@/views/apiary/Apiary.vue';
import Hive from '@/views/apiary/hive/Hive.vue';
import Queen from '@/views/apiary/hive/queen/Queen.vue';
import NewQueen from '@/views/apiary/hive/queen/NewQueen.vue';
import Visit from '@/views/apiary/hive/visit/Visit.vue';
import NewVisit from '@/views/apiary/hive/visit/NewVisit.vue';
import NewHive from '@/views/apiary/hive/NewHive.vue';
import NewApiary from '@/views/apiary/NewApiary.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/apiary/:id',
    name: 'Apiary',
    component: Apiary,
    props: true // This allows the route params to be passed as props to the component
  },
  {
    path: '/apiary/:apiaryId/hive/:hiveId',
    component: Hive,
  },
  {
    path: '/apiary/:apiaryId/hive/:hiveId/queen/:queenId',
    component: Queen
  },
  {
    path: '/apiary/:apiaryId/hive/:hiveId/queen/new',
    component: NewQueen
  },
  {
    path: '/apiary/:apiaryId/hive/:hiveId/visit/:visitId',
    component: Visit
  },
  {
    path: '/apiary/:apiaryId/hive/:hiveId/visit/new',
    component: NewVisit
  },
  {
    path: '/apiary/:apiaryId/hive/new',
    component: NewHive
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
