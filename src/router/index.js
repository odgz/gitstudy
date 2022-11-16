import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import index from '../views/index.vue'
import Home from '../views/Home.vue'
import ShopSetting from '../views/ShopSetting.vue'
import ShopFood from '../views/ShopFood.vue'
const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    children:[
      {
        path:'home',
        name:'home',
        component:Home
      },
      {
        path:'ShopSetting',
        name:'ShopSetting',
        component:ShopSetting
      },
      {
        path:'ShopFood',
        name:'ShopFood',
        component:ShopFood
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
