import { Directive, DirectiveBinding } from 'vue'
import { elMapToHandlers, isFunction } from '../../utils/index'

const elMapToEventName: WeakMap<Element, string> = new WeakMap()

const addEventListener = (el: Element, binding: DirectiveBinding): void => {
  const { value, arg } = binding
  if (!isFunction(value)) return

  const delay = arg ? Number(arg.split('-')[1]) : 300

  const eventName = arg ? arg.split('-')[0] : 'click'

  let timer: undefined | number = undefined

  const handler = (): void => {
    if (timer === undefined) {
      timer = window.setTimeout(() => {
        value()
        timer = undefined
      }, delay)
    } else {
      window.clearTimeout(timer)
      timer = window.setTimeout(() => {
        value()
        timer = undefined
      }, delay)
    }
  }

  elMapToHandlers.set(el, handler)
  elMapToEventName.set(el, eventName)
  el.addEventListener(eventName, handler)
}

const vDebounce: Directive = {
  mounted(el, binding) {
    addEventListener(el, binding)
  },
  updated(el, binding) {
    if (elMapToHandlers.has(el)) {
      el.removeEventListener(elMapToEventName.get(el), elMapToHandlers.get(el))
    }

    addEventListener(el, binding)
  }
}
export default vDebounce
