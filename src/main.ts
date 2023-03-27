import { installFormPlugin } from './forms/form_components.plugin';
import { createApp } from 'vue'
import "reflect-metadata"
import './style.css'
import App from './App.vue'
const app = createApp(App)
app.use(installFormPlugin)
app.mount('#app')
