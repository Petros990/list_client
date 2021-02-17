export default function guest({ from, next, router }) {
  if (localStorage.getItem('token')) {
    return from.name ? router.push({name: from.name}).catch(()=>{}) : router.back();
  }
  return next();
}
