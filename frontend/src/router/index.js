import { createRouter, createWebHistory } from 'vue-router'
import Admin from '@/components/Admin.vue'
import Pop from '@/components/Pop.vue';
import Login from '@/components/Login.vue'

const routes = [

  { path: '/', name: 'login', component: Login },
  { path: '/admin', name: 'admin', component: Admin },
  {
    path: '/phishing_test/:colleague_id',
    component: Pop,
  },
  {
    path: '/study-material/:colleague_id',
    component: Pop,
    props: true, // Allow passing params as props
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
