import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "@/views/DashboardPage";
import GridSystem from "@/views/GridSystemPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/grid-system',
    name: 'GridSystem',
    component: GridSystem,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
