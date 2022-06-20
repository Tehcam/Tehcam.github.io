<<<<<<< HEAD
import { route } from 'quasar/wrappers';
=======
import { route } from 'quasar/wrappers'
>>>>>>> 16b96c8f28d5dfe3af6f23cc032efc371733fd3b
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
<<<<<<< HEAD
  createWebHistory,
} from 'vue-router';
import routes from './routes';
=======
  createWebHistory
} from 'vue-router'
import routes from './routes'
>>>>>>> 16b96c8f28d5dfe3af6f23cc032efc371733fd3b

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
<<<<<<< HEAD
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);
=======
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)
>>>>>>> 16b96c8f28d5dfe3af6f23cc032efc371733fd3b

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(
      process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE
<<<<<<< HEAD
    ),
  });

  return Router;
});
=======
    )
  })

  return Router
})
>>>>>>> 16b96c8f28d5dfe3af6f23cc032efc371733fd3b
