import { createApp } from 'vue'
// import './styles/tailwind.css'
import './styles/style.css'
import App from './App.vue'
import router from './router' // 引入路由

const app = createApp(App)
app.use(router) // 使用路由插件
app.mount('#app')
