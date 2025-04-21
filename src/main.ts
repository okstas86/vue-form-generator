import { createApp } from 'vue'
import { router } from './router'
import { store } from './store'
import './styles/main.scss'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
