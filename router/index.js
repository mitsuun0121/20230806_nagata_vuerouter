import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserList from '../views/UserList.vue'
import SubPage from '../views/SubPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sub-page',
    name: 'SubPage',
    component: SubPage
  },
  {
    path: '/user-list',
    name: 'UserList',
    component: UserList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(function (to, from, next) {
  if (to.query.redirect) {
    next('/')
  } else {
    next()
  }
})

export default router
