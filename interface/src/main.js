import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import bootstrap from 'bootstrap'
import './assets/custom.scss' // custom colors

const app = createApp(App)

app.use(router)

app.mount('#app')
