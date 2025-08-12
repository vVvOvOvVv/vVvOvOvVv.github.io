import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from './App.vue'
import HomeComponent from './components/Home.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/custom.scss' // custom colors

const router = createRouter({
  history: createMemoryHistory(),
  routes: [{ path: '/', name: 'home', component: HomeComponent }],
})

createApp(App).use(router).mount('#app')
