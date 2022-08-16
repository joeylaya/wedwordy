import LandingPageVue from '@/views/LandingPage.vue'
import MyCeremoniesVue from '@/views/MyCeremonies.vue'
import CeremonyDashboardVue from '@/views/CeremonyDashboard.vue'
import StylingVue from '@/views/Styling.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ScriptBuilderVue from '@/views/ScriptBuilder.vue'
import TestingVue from '@/views/Testing.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: LandingPageVue
    },
    {
      path: '/my-ceremonies',
      name: 'myCeremonies',
      component: MyCeremoniesVue
    },
    {
      path: '/ceremony/:id',
      name: 'ceremonyDashboard',
      component: CeremonyDashboardVue
    },
    {
      path: '/script/:id',
      name: 'scriptBuilder',
      component: ScriptBuilderVue
    },
    {
      path: '/styling',
      name: 'styling',
      component: StylingVue
    },
    {
      path: '/testing',
      name: 'testing',
      component: TestingVue
    },
    {
      path: '/settings',
      name: 'settings',
      component: TestingVue
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
