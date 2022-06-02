import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Forum from '../views/Forum.vue'
import Post from '../views/Post.vue'
import Profile from '../views/Profile.vue'
import store from '../store'
import auth from '../middleware/auth'
import VueRouterMiddleware from 'vue-route-middleware'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Accueil',
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: 'A propos',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login',
    },
  },
  {
    path: '/forum',
    name: 'Forum',
    component: Forum,
    meta: {
      title: 'Le Forum',
      middleware: auth,
    },
  },
  {
    path: '/forum/:id',
    name: 'Forum',
    component: Post,
    meta: {
      title: 'Publication',
      middleware: auth,
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    props: true,
    meta: {
      title: 'Mon Profil',
      middleware: auth,
    },
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: '404 Not Found',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
router.beforeEach(VueRouterMiddleware())

router.afterEach((to, from) => {
  console.log(from, to)
  document.title = to.meta.title
})

export default router
