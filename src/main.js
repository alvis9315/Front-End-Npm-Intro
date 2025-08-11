import { createApp } from 'vue'
import Toast from 'vue-toastification'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import 'vue-toastification/dist/index.css'

// 全域導入 SCSS 樣式
import './styles/main.scss'

// Naive UI 樣式
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

const app = createApp(App)

// 註冊 VueUse Motion 插件
app.use(MotionPlugin)

// 設置 Toast
app.use(Toast, {
  position: 'top-right',
  timeout: 3000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true,
  rtl: false,
})

app.mount('#app')
