import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import './css/base.css'
import {
  vCopy,
  vFocus,
  vDebounce,
  vLongPress,
  vLoading,
  vImgLazyLoad,
  vOnOnce,
  vClickOutSide,
  vHover,
  vTextEllipsis,
  vMoney
} from '../code/main'

import 'highlight.js/styles/stackoverflow-light.css'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import hljsVuePlugin from '@highlightjs/vue-plugin'

hljs.registerLanguage('javascript', javascript)

const app = createApp(App)

app.use(router)
app.use(hljsVuePlugin)

app.directive('copy', vCopy)
app.directive('focus', vFocus)
app.directive('debounce', vDebounce)
app.directive('longpress', vLongPress)
app.directive('loading', vLoading)
app.directive('imglazyload', vImgLazyLoad)
app.directive('ononce', vOnOnce)
app.directive('clickoutside', vClickOutSide)
app.directive('hover', vHover)
app.directive('textellipsis', vTextEllipsis)
app.directive('money', vMoney)

app.mount('#app')
