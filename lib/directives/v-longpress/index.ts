import { Directive, DirectiveBinding } from 'vue'
import { isFunction } from '../../utils'

const elMapToMouseDownHandlers: WeakMap<Element, () => void> = new WeakMap()

const elMapToMouseUpHandlers: WeakMap<Element, () => void> = new WeakMap()

const addEventListener = (el: Element, binding: DirectiveBinding) => {
  const { value, arg } = binding
  if (!isFunction(value)) return
  let timer: number | undefined
  const pressHandler = () => {
    timer = window.setTimeout(value, arg ? Number(arg) : 300)
  }
  const clearTimeoutHandler = () => {
    clearTimeout(timer)
  }
  el.addEventListener('mousedown', pressHandler)
  el.addEventListener('mouseup', clearTimeoutHandler)
  elMapToMouseDownHandlers.set(el, pressHandler)
  elMapToMouseUpHandlers.set(el, clearTimeoutHandler)
}

const vLongPress: Directive = {
  mounted(el, binding) {
    addEventListener(el, binding)
  },
  updated(el, binding) {
    if (elMapToMouseDownHandlers.has(el)) {
      el.removeEventListener('mousedown', elMapToMouseDownHandlers.get(el))
    }
    if (elMapToMouseUpHandlers.has(el)) {
      el.removeEventListener('mouseup', elMapToMouseUpHandlers.get(el))
    }
    addEventListener(el, binding)
  },
  beforeUnmount(el) {
    elMapToMouseDownHandlers.delete(el)
    elMapToMouseUpHandlers.delete(el)
  }
}
export default vLongPress
