<template>


    <a-layout class="ant-layout" style="height: 100%;overflow-y: hidden ;position: relative;" >

     
      <a-layout-header class="header">

      
  <a-popover
    style="width: 40px"
    title="Hover title"
    trigger="hover"
    :open="hovered"
    @openChange="handleHoverChange"
    class="userpop"
  >
    <template #content>
      <div> This is hover content.</div>
    </template>
    <a-popover title="Click title" trigger="click" :open="clicked" @openChange="handleClickChange">
      <template #content>
        <div>
          <div>This is click content.</div>
          <a @click="hide">Close</a>
        </div>
      </template>
      <a-button shape="circle"><UserOutlined /></a-button>
    </a-popover>
  </a-popover>


      </a-layout-header>
      <a-layout-content style="padding: 0 0px;">
    
        <a-breadcrumb style="margin: 16px 0 ;color:  #6bc7a1;" >
          <template #separator><span style="color:aliceblue">></span></template>
          <!-- 自定义返回函数 ←-->
          <a-breadcrumb-item @click="goback">
            <a-icon>
              <import-outlined/>
            </a-icon>
            返回
          </a-breadcrumb-item>
          <a-breadcrumb-item v-for="(item, index) in breadList" :key="item.name">
            <router-link v-if="item.name !== name && index !== 1"
                         :to="{ path: item.path === '' ? '/' : item.path }" style="color: aliceblue;">
              {{ item.meta.title }}
            </router-link>
            <span v-else style="color: aliceblue;">
              {{ item.meta.title }}
            </span>
          </a-breadcrumb-item>
        </a-breadcrumb>


        <!-- <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb> -->
        <a-layout style="padding-top: 20px; background: rgb(163, 122, 122), 255, 255)151">
          <a-layout-sider width="200" style="background: #fff ;
        ">
         <div class="logo" > 后台管理云平台
          <img src="../../../public/UI/标题/设置.png">
         </div>
            <a-menu
              v-model:selectedKeys="selectedKeys2"
              v-model:openKeys="openKeys"
              mode="inline"
              style="height: 100%"
            >
            <template v-for='(item) in NavDataInfo.NavData' :key="item.Path">
              <!-- <router-view/> -->
            <a-sub-menu  ><!---有子项 ：key="item.Path"无任何作用----->
              <template #title>
                <a-icon v-if="item.Title=='权限管理'" style="color:#6bc7a1;">
                  <user-outlined style="padding-right: 3px;"/>
                </a-icon>
                <a-icon v-else-if="item.Title=='资源管理'" style="color:#6bc7a1;">
                  <GlobalOutlined style="padding-right: 3px;" />
                </a-icon>
                <a-icon v-else-if="item.Title=='数据管理'" style="color:#6bc7a1;">
                  <AreaChartOutlined style="padding-right: 3px;" />
                </a-icon>
                <a-icon v-else style="color:#6bc7a1;">
                  <SnippetsOutlined />
                </a-icon>
                <span>{{item.Title}}</span>
              </template>
              
              <a-menu-item v-for="(itChild) in item.Child" :key="itChild.Path">
                <a-icon style="size: 2px;">
                  <RightSquareOutlined  style="padding-right: 3px;"/>
                </a-icon>
                
                  <router-link :to="itChild.Path"> <!--根据路径去跳转页面-->
                 {{itChild.Title}}
               </router-link>
                
               
              </a-menu-item>

            </a-sub-menu>
   
   

   
          </template>
              
            </a-menu>
          </a-layout-sider>
          <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
            
            <router-view></router-view>
          </a-layout-content>
        </a-layout>
       
      </a-layout-content>

    </a-layout>

  </template>
  <script setup>
  import { ref,reactive,watch,onBeforeMount, onMounted } from 'vue';
  import {  useRoute } from 'vue-router'
import axios from 'axios';

  
  const route = useRoute()
 
  //const selectedKeys1 = ref(['2']);
  const selectedKeys2 = ref(['1']);
  const openKeys = ref(['sub1']);
  const name = ref('')
  const breadList = ref([])

  const NavDataInfo = reactive({
      NavData: [
        {
          NavID: '0',
          Icons: 'home',
          Title: '权限管理',
          Path: '',
          Child: [
          {
              NavID: '0-1',
              Icons: 'man',
              Title: '人员管理',
              Path: '/bg/authmg',
              Child: []
            },
          ]
        },
        {
          NavID: '1',
          Icons: 'meh',
          Title: '数据管理',
          Path: '',
          Child: [
          {
              NavID: '1-1',
              Icons: 'man',
              Title: '资源管理',
              Path: '/bg/sourcemg',
              Child: []
            },
            {
              NavID: '1-2',
              Icons: 'man',
              Title: '资源组管理',
              Path: '/bg/sourcegroupemg',
              Child: []
            },

          ]
        },
        // {
        //   NavID: '2',
        //   Icons: 'like',
        //   Title: '数据管理',
        //   Path: '/dataManage',
        //   Child: [
        //     {
        //       NavID: '2-1',
        //       Icons: 'man',
        //       Title: '数据总览',
        //       Path: '/dataManage',
        //       Child: []
        //     },
        //   ]
        // },
        {
          NavID: '3',
          Icons: 'like',
          Title: '日志',
          Path: '/dataManage',
          Child: [
            {
              NavID: '3-1',
              Icons: 'man',
              Title: '操作日志',
              Path: '/dataManage',
              Child: []
            },
            {
              NavID: '3-2',
              Icons: 'man',
              Title: '登入日志',
              Path: '/dataManage',
              Child: []
            },
            {
              NavID: '3-2',
              Icons: 'man',
              Title: '预警日志',
              Path: '/dataManage',
              Child: []
            },
          ]
        },

      ],
    })
    const clicked = ref(false);



  //************************************************方法
  const getBreadcrumb = () => {
    breadList.value = []
    name.value = route.name
    route.matched.forEach(item => {
      breadList.value.push(item)
    })
    console.log(breadList.value)
    console.log(name.value)
   console.log(route)
 
  }
  // 返回






const hovered = ref(false);
const hide = () => {
  clicked.value = false;
  hovered.value = false;
};
const handleHoverChange = visible => {
  clicked.value = false;
  hovered.value = visible;
};
const handleClickChange = visible => {
  clicked.value = visible;
  hovered.value = false;
};


//监视路由
watch(() => route.path, getBreadcrumb)


  //*************************************************生命周期
onBeforeMount(() => {
    getBreadcrumb()
    console.log(route.path)
  })


onMounted(()=>{


  
})
setInterval (() => {

axios.interceptors.request.use((config) => { console.log(config.url) })
}, 1500)


  </script>
  <style scoped>

.logo[data-v-5486632c] {
    font-size: 20px;
    color: #1abc9c;
    height: 60px;
    line-height: 60px;
    position: fixed;
    top: 1vh;
    left: 2vw;
}
img{
width: 30px;
height: 30px;
position: relative;
left: -148px;
}

:where(.css-dev-only-do-not-override-b92jn9).ant-breadcrumb {
  margin: 16px 0px;
    color: aquamarine;
    position: fixed;
    top: 6vh;
    z-index: 1000000;
    left: 14vw;
}

.ant-layout-header .userpop{
  position: fixed;
  top: 3vh;
  right: 5vw;
    color: rgb(220, 228, 228);
    background-color: #6bc7a1;
   border: none;
   
}

  



  :where(.css-dev-only-do-not-override-b92jn9).ant-layout .ant-layout-header .logo[data-v-5486632c] {

    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);

    background-image: url('../../../public/UI/backstage.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 100000;
  }
  .ant-row-rtl #components-layout-demo-top-side .logo {
    float: right;
    margin: 16px 0 16px 24px;
  }
  
  .site-layout-background {
    background: #fff;
  }
  #root,body,html {
  height: 100%;
}

.ant-layout {
  display: flex;
  width: 100%;
  min-height: 100%;
}
:where(.css-dev-only-do-not-override-b92jn9).ant-layout .ant-layout-content {
    flex: auto;
    min-height: 100%;
    height: 80vh;
    padding: 0px 0px;
    height: 87.5vh
}



[data-v-5486632c] .ant-layout .ant-layout-content {
    flex: auto;
    min-height: 100%;
    height: 80vh;
    padding: 0px 0px;
    position: fixed;
    width: 85vw;
    left: 13vw;
  }
:deep(.ant-layout .ant-layout-sider-children) {
  height: 100%;
    margin-top: -0.1px;
    padding-top: 0.1px;
    position: fixed;
    top: 8vh;
    left: 0vw;
    width: 10vw;
}
:where(.css-dev-only-do-not-override-b92jn9).ant-menu-light.ant-menu-root.ant-menu-inline, :where(.css-dev-only-do-not-override-b92jn9).ant-menu-light.ant-menu-root.ant-menu-vertical {
    border-inline-end: 1px solid rgba(5, 5, 5, 0.06);

   
  border-width: 0cap;

}

:where(.css-dev-only-do-not-override-b92jn9).ant-layout .ant-layout-header {
    height: 99px;
    
   
  
  border-width: 0cap;
    /* background: #001529; */
}
/*改header*/
:where(.css-dev-only-do-not-override-b92jn9).ant-layout .ant-layout-header {
    height: 99px;
    padding-inline: 50px;
    color: rgba(0, 0, 0, 0.88);
    line-height: 64px;
    background: #001529;
    background-image: url('../../../public/UI/banner2.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}


:where(.css-dev-only-do-not-override-b92jn9).ant-layout .ant-layout-header .logo{
  height: 80px;
  width: 30px;
  background-color: aqua;
  z-index: 100;
}
:where(.css-dev-only-do-not-override-b92jn9).ant-layout .ant-layout-sider{
  background: rgb(255, 255, 255);
    
    flex: 0 0 200px;
    max-width: 200px;
    min-width: 200px;
    width: 200px;
    border-radius: 15px;
   
    background: rgb(255, 255, 255);
       position: fixed;
    top: 0vh;
    height: 98%;
    
}

:where(.css-dev-only-do-not-override-b92jn9).ant-menu-light.ant-menu-root.ant-menu-inline[data-v-5486632c], :where(.css-dev-only-do-not-override-b92jn9).ant-menu-light.ant-menu-root.ant-menu-vertical[data-v-5486632c] {
    border-inline-end: 1px solid rgba(5, 5, 5, 0.06);
    border-width: 0cap;
    border-radius: 15px;
    background-color: rgb(255, 255, 255);
    


}
#root,body,html {
    height: 100%;
}
.ant-layout {
    display: flex!important;
    width: 100%!important;
    min-height: 100%!important;
}
::v-deep .ant-layout .ant-breadcrumb .ant-breadcrumb-separatorP{
  color: #fff;
}
  </style>