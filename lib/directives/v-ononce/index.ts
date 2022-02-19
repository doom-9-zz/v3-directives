import { Directive, DirectiveBinding } from 'vue'
import { isFunction } from '../../utils/index'

const elMapToHandlers: WeakMap<Element, () => void> = new WeakMap()

const elMapToEventName: WeakMap<Element, string> = new WeakMap()

const addEventListener = (el: Element, binding: DirectiveBinding) => {
  const { value, arg } = binding
  if (!isFunction(value)) return

  const eventName = arg ? arg : 'click'
  const handler = (): void => {
    value()
    el.removeEventListener(eventName, handler)
  }

  elMapToHandlers.set(el, handler)
  elMapToEventName.set(el, eventName)
  el.addEventListener(eventName, handler)
}

const vOnOnce: Directive = {
  mounted(el, binding) {
    addEventListener(el, binding)
  },
  updated(el, binding) {
    if (elMapToHandlers.has(el)) {
      el.removeEventListener(elMapToEventName.get(el), elMapToHandlers.get(el))
      elMapToHandlers.delete(el)
      elMapToEventName.delete(el)
    }

    addEventListener(el, binding)
  },
  beforeUnmount(el) {
    elMapToHandlers.delete(el)
    elMapToEventName.delete(el)
  }
}
export default vOnOnce
