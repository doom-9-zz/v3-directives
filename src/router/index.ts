import { createRouter, createWebHashHistory } from 'vue-router'

import routesMap from './const'

const routes = routesMap

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
