export default function auth(to, from, next) {
  if (!localStorage.getItem('userStorage')) {
    return next({ name: 'Login' })
  }
  return next
}
