<template>
  <div id="background" >
    <div id="Login-message"></div>
    <div id="header-text">在线安全监测分析云管理软件
      </div>
    <div id="AllInfo">
        <div id="login-container">
          <label for="username" id="username-label">用户名:</label>
          <input v-model="username" type="text" id="username" placeholder="请输入用户名" />

          <label for="password" id="password-label">密码:</label>
          <input v-model="password" type="password" id="password" placeholder="请输入密码" />

          <button @click="login" id="login-button">登录</button>
<!--错误提示-->
          <div v-if="showError" id="error-message">
            用户名或密码错误，请重新输入。
          </div>
        </div>
<!--      <div id="register">没有账号？请联系管理员</div>-->
    </div>
  </div>
  <div style="position: absolute;">

  </div>

</template>
<script setup>
import router from "@/router";
import Login from  '@/module/Class_Login'
import { ref } from 'vue';
const username = ref('');
const password = ref('');
const showError = ref(false);
function login(){
  console.log('Username:', username.value);
  console.log('Password:', password.value);

  // 清空输入框
  if(username.value=='a'&&password.value=='a'){
    Login.logined=true
    router.push('/')
  }
  else{
    console.log('我在情况')
    // 显示错误提示框
    showError.value = true;
    // 清空输入框
    username.value = '';
    password.value = '';
    // 2 秒后隐藏错误提示框
    setTimeout(() => {
      showError.value = false;
    }, 2000);
  }



  // Login

}

</script>

<style scoped>
@import url('../text.css');
#background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../../public/UI/标题/bg12.jpg');
  background-size: cover;
  background-position: center;

  z-index: 0; /* Place the background behind other content */
}
#Login-message {
  height: 45.5%;
  width: 33%;
  position: relative;
  left: 50%; /* 修改为 50% */
  top: 30%;
  max-width: 100%;
  background-image: url('../../public/UI/五1.png');
  background-size:cover;
  transform: translateX(-50%); /* 居中显示 */
}
#header-text {
  position: relative;
  top: -25%;
  font-family: '01', sans-serif; /* 使用 Roboto 字体 */
  font-weight: bold; /* 加粗 */
  font-style: italic;
  color: white;
  font-size: 60px;
  text-align: center;
}
#AllInfo {
  position: relative;
  top: -14%;
  left: 50%; /* 修改为 50% */
  transform: translateX(-50%); /* 居中显示 */
}
#login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: auto;
}
#error-message{
  font-size: 20px;
  color: red;
}

#username-label, #password-label,  #login-button {
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
  color: white;
  font-size: 17px;
}
#username, #password{
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
  color: black;
  font-size: 17px;
}

#username, #password, #login-button {
  padding: 10px;
  border: 1px solid #add8e6; /* 浅蓝色边框 */
}

#login-button {
  background: linear-gradient(to bottom, #3a8bd6, #185c97); /* 深蓝色渐变背景 */
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;
}

#login-button:hover {
  background: linear-gradient(to bottom, #185c97, #3a8bd6); /* 鼠标悬停时的深蓝色渐变效果 */
}

#register {
  position: relative;
  top: 10px; /* 调整为适当的值，表示下移的距离 */
  color: white;
  font-size: 14px; /* 调整为适当的字体大小 */
}


</style>
