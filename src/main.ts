import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus, {ElMessage} from 'element-plus'
import 'element-plus/dist/index.css'

import './common/css/tailwindcss.css'

const app = createApp(App)
app.config.globalProperties.$message = ElMessage
app.use(router)
app.use(ElementPlus)
app.mount('#app')
