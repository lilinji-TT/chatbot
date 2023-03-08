import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import { ChatLayout } from '@/views/chat/layout'
import { Login, Register } from '@/views'
import { Prompt } from '@/views/prompt/index'
// import {Regiser} from '@/views/'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: '/login',
  },
  {
    path: '/chatprompt',
    name: 'Prompt',
    component: Prompt,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatLayout,
    children: [
      {
        path: '/chat/:uuid?',
        name: 'Chat',
        component: () => import('@/views/chat/index.vue'),
      },
    ],
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export async function setupRouter(app: App) {
  app.use(router)
  await router.isReady()
}
