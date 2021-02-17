export default function auth({ next, router }) {
  if (!localStorage.getItem('token')) {
    localStorage.removeItem('user')
    return router.push({ name: 'Login' }).catch(() => {})
  }
  return next();
}
