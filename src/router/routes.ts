<<<<<<< HEAD
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
=======
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [{ path: '', component: () => import('pages/Index.vue') }]
  // },
>>>>>>> 16b96c8f28d5dfe3af6f23cc032efc371733fd3b

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
<<<<<<< HEAD
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
=======
    component: () => import('pages/Error404.vue')
  }
]

export default routes
>>>>>>> 16b96c8f28d5dfe3af6f23cc032efc371733fd3b
