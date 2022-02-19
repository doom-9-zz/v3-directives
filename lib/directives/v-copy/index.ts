import { Directive, DirectiveBinding } from 'vue'
import { elMapToHandlers } from '../../utils'

const getCopyHandler = (value: unknown): (() => void) => {
  return (): void => {
    navigator.clipboard
      .writeText(String(value))
      .then(() => {
        window.alert('Copy successful')
      })
      .catch(() => {
        window.alert('Copy failed')
      })
  }
}

const addEventListener = (el: Element, binding: DirectiveBinding) => {
  const { value } = binding
  const copyHandler = getCopyHandler(value)

  elMapToHandlers.set(el, copyHandler)
  el.addEventListener('click', copyHandler)
}

const vCopy: Directive = {
  mounted(el, binding) {
    addEventListener(el, binding)
  },
  updated(el, binding) {
    if (elMapToHandlers.has(el)) {
      el.removeEventListener('click', elMapToHandlers.get(el))
    }
    addEventListener(el, binding)
  }
}
export default vCopy
