import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import Home from './components/pages/TheHome.vue'
import History from './components/pages/TheHistory.vue'
import Exchange from './components/pages/TheExchange.vue'
import store from './store'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/home', component: Home },
      { path: '/history', component: History },
      { path: '/exchange', component: Exchange }
    ]
  });

const app = createApp(App)

app.use(router);
app.use(store)
app.mount('#app');


