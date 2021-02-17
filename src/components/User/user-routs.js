import User from "./User";
import Edit from "./Edit";

export default [
  {
    path: '/userprofile',
    name: 'UserProfile',
    component: User,
    meta:{ middleware: ['auth']}

  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit,
    meta:{ middleware: ['auth']}
  }
]

