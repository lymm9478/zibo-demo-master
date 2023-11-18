
import { createRouter, createWebHistory } from 'vue-router'
import MapContainer from '../components/MapContainer.vue'
import HomePage from '../components/HomePage.vue'
// import MiddleInfo from '../components/MiddleInfo.vue'
import LogIn from '../components/LogIn'
import Login from  '@/module/Class_Login'

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

    },{
        path:'/test',
        name:'test',
        component:MapContainer,
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
