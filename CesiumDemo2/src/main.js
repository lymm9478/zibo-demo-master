import { createApp } from 'vue'
// import { Button,Space,Tag,Layout,LayoutContent,Card,Switch ,Tree,ConfigProvider,Slider,InputNumber,Row,Col  } from 'ant-design-vue';
import Antd from 'ant-design-vue';
import react from 'ant-design-vue/dist/reset.css'
import "ant-design-vue/dist/reset.css";
import App from './App.vue'
import router from './router/index.js'


const app = createApp(App)
// app.use(Space)
app.use(router)
app.use(react)
// app.use(Layout)
// app.use(Tree)
// app.use(Tag)
// app.use(Card)
// app.use(Slider)
// app.use(Switch)
// app.use(LayoutContent)
// app.use(Button)
// app.use(Row)
// app.use(Col)
// app.use(InputNumber)
// app.use(ConfigProvider)
app.use(Antd)

import * as Icons from '@ant-design/icons-vue'
//È«¾Ö×¢²áÍ¼±ê
const icons = Icons
for (const i in icons) {
  app.component(i, icons[i])
}


app.mount('#app')
