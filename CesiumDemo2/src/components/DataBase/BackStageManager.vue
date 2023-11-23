<template>
    <a-layout class="ant-layout" style="minHeight:100vh" >
      <a-layout-header class="header">
        <div class="logo" />
        <a-menu
          v-model:selectedKeys="selectedKeys1"
          theme="dark"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1">nav 1</a-menu-item>
          <a-menu-item key="2">nav 2</a-menu-item>
          <a-menu-item key="3">nav 3</a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content style="padding: 0 50px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout style="padding: 24px 0; background: #fff">
          <a-layout-sider width="200" style="background: #fff">
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
                <a-icon>
                  <meh-outlined/>
                </a-icon>
                <span>{{item.Title}}</span>
              </template>
              
              <a-menu-item v-for="(itChild) in item.Child" :key="itChild.Path">
                <a-icon>
                  <meh-outlined/>
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
      <!-- <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer> -->
      <!-- <router-view></router-view> -->
    </a-layout>
    <!-- <div class="content">
      <router-view />
    </div> -->
  </template>
  <script setup>
  import { ref,reactive } from 'vue';
  const selectedKeys1 = ref(['2']);
  const selectedKeys2 = ref(['1']);
  const openKeys = ref(['sub1']);


  const NavDataInfo = reactive({
      NavData: [
        {
          NavID: '0',
          Icons: 'home',
          Title: '权限管理',
          Path: '/layout',
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
          Title: '资源管理',
          Path: '/runtimeData',
          Child: [
          {
              NavID: '1-1',
              Icons: 'man',
              Title: '资源管理',
              Path: '/bg/authmg2',
              Child: []
            },
            {
              NavID: '1-2',
              Icons: 'man',
              Title: '资源组管理',
              Path: '/dataManage',
              Child: []
            },

          ]
        },
        {
          NavID: '2',
          Icons: 'like',
          Title: '数据管理',
          Path: '/dataManage',
          Child: [
            {
              NavID: '2-1',
              Icons: 'man',
              Title: '数据总览',
              Path: '/dataManage',
              Child: []
            },
          ]
        },

      ],
    })









  </script>
  <style scoped>
  #components-layout-demo-top-side .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
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
}



  </style>