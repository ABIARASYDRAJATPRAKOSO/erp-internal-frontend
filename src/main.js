import { createApp } from 'vue'
import './style.css' // Menjaga style bawaan sementara
import App from './App.vue'

// Import PrimeVue dan konfigurasi temanya
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css' // Penting agar icon muncul

const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Aura // Menggunakan tema default (Aura)
    }
})

app.mount('#app')