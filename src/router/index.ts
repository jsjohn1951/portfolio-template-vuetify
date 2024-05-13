/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'

// const routes = [
//   {
//     path: '/',
//     children: [
//       {
//         path: '',
//         name: 'Home',
//         component: () => import('@/pages')
//       }
//     ]
//   }
// ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  }
})

export default router
