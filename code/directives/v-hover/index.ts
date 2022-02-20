import { Directive, DirectiveBinding } from 'vue'
import { isFunction } from '../../utils/index'

const elMapToHandlers: WeakMap<Element, () => void> = new WeakMap()

const addEventListener = (el: Element, binding: DirectiveBinding): void => {
  const { value } = binding
  if (isFunction(value)) {
    el.addEventListener('mouseenter', value)
    elMapToHandlers.set(el, value)
  }
}

const vHover: Directive = {
  mounted(el, binding) {
    addEventListener(el, binding)
  },
  updated(el, binding) {
    if (elMapToHandlers.has(el)) {
      el.removeEventListener('mouseenter', elMapToHandlers.get(el))
      elMapToHandlers.delete(el)
    }
    addEventListener(el, binding)
  },
  beforeUnmount(el) {
    elMapToHandlers.delete(el)
  }
}
export default vHover
