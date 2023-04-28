import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import './assets/main.scss'

library.add(fas)
library.add(far)

const app = createApp(App)
.component('fa', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
