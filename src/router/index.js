import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "@/views/DashboardPage";
import GridSystem from "@/views/GridSystemPage";
import GridListPage from "@/views/GridListPage";
import BreakPoints from "@/views/BreakPoints";

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
  {
    path: '/grid-list-page',
    name: 'GridListPage',
    component: GridListPage,
  },
  {
    path: '/breakpoints',
    name: 'BreakPoints',
    component: BreakPoints,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
