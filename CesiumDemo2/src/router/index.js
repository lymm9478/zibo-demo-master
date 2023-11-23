
import { createRouter, createWebHistory } from 'vue-router'
// import MapContainer from '../components/MapContainer.vue'
import HomePage from '../components/HomePage.vue'
import LogIn from '../components/LogIn'
import Login from  '@/module/Class_Login'

import BackStageManager from '../components/DataBase/BackStageManager.vue'
//import AuthorityMg from '../components/DataBase/AuthorityMg.vue'


//异步
const AuthorityMg = ()=>import('../components/DataBase/AuthorityMg.vue')
const SourceMg = ()=>import('../components/DataBase/SourceMg.vue')
const SourceGroupeMg=()=>import('../components/DataBase/SourceGroupeMg.vue')

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
        //��̨������ҳ
        path:'/bg',
        name:'backstage',
        meta: {
            title: 'Home',
            //keepalive: true
          },
        component:BackStageManager,
        redirect:'/bg/authmg',//默认打开的路由
        children:[
            {
                path:'authmg',
                name:'authormage',
                meta: {
                    title: '权限管理',
                    //keepalive: true
                  },
                component: AuthorityMg
            },
            {
                path:'sourcemg',
                name:'sourcemg',
                meta: {
                    title: '资源管理',
                   // keepalive: true //已经使用了routerview
                  },
                component: SourceMg
            },
            {
                path:'sourcegroupemg',
                name:'sourcegroupemg',
                meta: {
                    title: '资源组管理',
                    //keepalive: true
                  },
                component: SourceGroupeMg
            },

        ]

    }

  ]
})

router.beforeEach((to, from, next) => {
    // console.log(Login.logined)
    if (!Login.logined && to.path !== "/login") {
        router.push("/login")
    }
    next()
})
export default router
