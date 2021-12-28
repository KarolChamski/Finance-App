import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import store from './store'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/home', component: App } 
    ]
  });

const app = createApp(App)

app.use(router);
app.use(store)
app.mount('#app');

// createApp(App).use(store).mount('#app')
