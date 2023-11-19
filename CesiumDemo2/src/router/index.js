
import { createRouter, createWebHistory } from 'vue-router'
// import MapContainer from '../components/MapContainer.vue'
import HomePage from '../components/HomePage.vue'
import LogIn from '../components/LogIn'
import Login from  '@/module/Class_Login'

import BackStageManager from '../components/DataBase/BackStageManager.vue'
//import AuthorityMg from '../components/DataBase/AuthorityMg.vue'


//å¼‚æ­¥
const AuthorityMg = ()=>import('../components/DataBase/AuthorityMg.vue')
const AuthorityMg2 = ()=>import('../components/DataBase/AuthorityMg2.vue')
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
        //ºóÌ¨¹ÜÀíÊ×Ò³
        path:'/bg',
        name:'backstage',
        component:BackStageManager,
        redirect:'/bg/authmg',//é»˜è®¤æ‰“å¼€çš„è·¯ç”±
        children:[
            {
                path:'authmg',
                name:'authormage',
                component: AuthorityMg
            },
            {
                path:'authmg2',
                name:'authormage2',
                component: AuthorityMg2
            },

        ]

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
