import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from '@tanstack/vue-query';

const app = createApp(App)

app.use(createPinia())
app.use(router)

VueQueryPlugin.install( app, {
    queryClientConfig: {
        defaultOptions:  {
            queries: {
                cacheTime: 1000 * 60, // 1 minuto
            }
        }
    }
});

app.mount('#app')
