import { createApp } from 'vue'
import App from './App.vue'
import './css/base.css'
import { vCopy, vFocus, vDebounce, vLongPress, vLoading } from '../lib/main'

const app = createApp(App)

app.directive('copy', vCopy)
app.directive('focus', vFocus)
app.directive('debounce', vDebounce)
app.directive('longpress', vLongPress)
app.directive('loading', vLoading)

app.mount('#app')
