import { createApp, defineAsyncComponent } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import './index.css'

// Route-level code splitting with dynamic imports
const Home = defineAsyncComponent(() => import('./pages/Home.vue'))
const NotFound = defineAsyncComponent(() => import('./pages/NotFound.vue'))

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

const app = createApp({})
app.use(createPinia())
app.use(router)
app.mount('#app')
