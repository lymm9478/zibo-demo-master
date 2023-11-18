
import { createRouter, createWebHistory } from 'vue-router'
// import MapContainer from '../components/MapContainer.vue'
import HomePage from '../components/HomePage.vue'
import LogIn from '../components/LogIn'
import Login from  '@/module/Class_Login'

import BackStageManager from '../components/DataBase/BackStageManager.vue'
const router = createRouter({
    history: createWebHistory(),
  routes: [
      {
          path: '/login',
          name: 'login',
          component: LogIn,
      },
    {
        path:'/',
        name:'home',
        component:HomePage,

    },
    {
        //后台管理首页
        path:'/bg',
        name:'backstage',
        component:BackStageManager

    }

  ]
})

router.beforeEach((to, from, next) => {
    console.log(Login.logined)
    if (!Login.logined && to.path !== "/login") {
        router.push("/login")
    }
    next()
})
export default router
