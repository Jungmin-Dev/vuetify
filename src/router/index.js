import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "@/views/DashboardPage";
import GridSystem from "@/views/GridSystemPage";
import GridListPage from "@/views/GridListPage";
import BreakPoints from "@/views/BreakPoints";
import TypoGraphy from "@/views/TypoGraphy";
import VueTable from "@/views/VueTable";
import VueForms from "@/views/VueForms";
import VueButtons from "@/views/VueButtons";
import VueIcons from "@/views/VueIcons";


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
  {
    path: '/typography',
    name: 'TypoGraphy',
    component: TypoGraphy,
  },
  {
    path: '/table',
    name: 'Table',
    component: VueTable,
  },
  {
    path: '/forms',
    name: 'Forms',
    component: VueForms,
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: VueButtons,
  },
  {
    path: '/icons',
    name: 'Icons',
    component: VueIcons,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
