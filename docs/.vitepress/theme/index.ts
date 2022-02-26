// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'

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
  vMoney,
  vDoubleClick,
  vDraggable,
  vFlicker,
  vResize
} from '../../../code/main'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
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
    app.directive('doubleclick', vDoubleClick)
    app.directive('draggable', vDraggable)
    app.directive('flicker', vFlicker)
    app.directive('resize', vResize)
  }
}
