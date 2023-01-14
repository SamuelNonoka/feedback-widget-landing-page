import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('../views/Home/IndexView.vue')
const FeedbacksView = () => import('../views/Feedbacks/IndexView.vue')
const CredencialsView = () => import('../views/Credentials/IndexView.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/feedbacks',
    name: 'Feednacks',
    component: FeedbacksView
  },
  {
    path: '/credential',
    name: 'Credentials',
    component: CredencialsView,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'Home'
    }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
