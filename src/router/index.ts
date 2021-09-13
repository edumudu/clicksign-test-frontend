import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'ContactIndex',
    component: () => import(/* webpackChunkname: "Home" */ '../views/ContactIndex.vue'),
    children: [
      {
        path: '/contact/create',
        name: 'ContactCreate',
        component: () => import(/* webpackChunkname: "ContactCreateOrEdit" */ '../views/ContactCreateOrEdit.vue'),
      },
      {
        path: '/contact/edit/:contactId',
        name: 'ContactEdit',
        component: () => import(/* webpackChunkname: "ContactCreateOrEdit" */ '../views/ContactCreateOrEdit.vue'),
      },
      {
        path: '/contact/delete/:contactId',
        name: 'ContactDelete',
        component: () => import(/* webpackChunkname: "ContactDelete" */ '../views/ContactDelete.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? '/clicksign-test-frontend/' : '/'),
  routes,
});

export default router;
