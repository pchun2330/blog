import { createRouter, createWebHistory } from 'vue-router'
import LogInView from '../views/logInView.vue'
// import logInModel from "@/logIn/logInModel";

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LogInView,
  },
  {
    path: '/editorView',
    name: 'editorView',
    component: () => import('../views/editorView.vue')
  },
  {
    path: '/visitView',
    name: 'visitView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/overView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
