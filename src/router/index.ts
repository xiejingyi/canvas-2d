import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/canvas2d-components/canvas2d-1.vue'),
    meta: {
      title: 'Canvas 2D 基础示例'
    }
  },
  {
    path: '/style',
    name: 'Style',
    component: () => import('@/canvas2d-components/style/canvas2d-style.vue'),
    meta: {
      title: 'Canvas 2D 样式示例'
    }
  },
  {
    path: '/text',
    name: 'Text',
    component: () => import('@/canvas2d-components/text/index.vue'),
    meta: {
      title: 'Canvas 2D 文本示例'
    }
  },
  { 
    path: '/transformations',
    name: 'Transformations', 
    component: () => import('@/canvas2d-components/transformations/index.vue'), 
    meta: { 
      title: 'Canvas 2D 变换示例'
    } 
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
