import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import {createVuetify} from "vuetify";

const vuetify = createVuetify()
createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')
