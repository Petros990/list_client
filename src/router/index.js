import Vue from 'vue'
import Router from 'vue-router'
import authRoutes from '../components/Auth/auth-routs.js'
import userRoutes from '../components/User/user-routs.js'
import NotFound from "../components/404/NotFound";
import auth from "../middleware/auth";
import guest from "../middleware/guest";

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'Login'}
    },
    ...authRoutes,
    ...userRoutes,
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    if(to.meta.middleware.includes('auth')) {
      auth({ next, router });
    }
    if(to.meta.middleware.includes('guest')) {
      guest({ from, next, router })
    }
  }
});

export default router;
