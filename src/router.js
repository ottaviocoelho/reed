import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import Timeline from './views/timeline/Timeline'
import NewPost from './views/newPost/NewPost'
import Post from './views/post/Post'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'REED',
    component: Timeline
  },
  {
    path: '/new-post',
    name: 'New Post',
    component: NewPost
  },
  {
    path: '/:postId',
    name: 'Post',
    component: Post
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
