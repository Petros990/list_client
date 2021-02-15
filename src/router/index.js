import Vue from 'vue'
import Router from 'vue-router'
import authRoutes from '../components/Auth/auth-routs.js'
import userRoutes from '../components/User/user-routs.js'
import NotFound from "../components/404/NotFound";

Vue.use(Router)

export default new Router({
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
})
