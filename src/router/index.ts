import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import FormDemo1 from '@/pages/FormDemo1.vue'
import FormDemo2 from '@/pages/FormDemo2.vue'
import FormDemo3 from '@/pages/FormDemo3.vue'
import FormSuccess from '@/pages/FormSuccess.vue'

const routes: RouteRecordRaw[] = [
  { path: '/form1', component: FormDemo1 },
  { path: '/form2', component: FormDemo2 },
  { path: '/form3', component: FormDemo3 },
  { path: '/form-success', component: FormSuccess },
  { path: '/', redirect: '/form1' },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
