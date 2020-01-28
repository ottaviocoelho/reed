import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import Timeline from './views/timeline/Timeline'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'RED',
    component: Timeline
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
