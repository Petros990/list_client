import Register from "./Register";
import Login from "./Login";

export default [
    {
      path: '/signup',
      name: 'Register',
      component: Register,
      meta:{ middleware: ['guest']}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta:{ middleware: ['guest']}
    },
]

