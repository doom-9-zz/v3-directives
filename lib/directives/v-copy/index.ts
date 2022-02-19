import { Directive } from 'vue'

const elMapToHandlers: WeakMap<Element, () => void> = new WeakMap()

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

const vCopy: Directive = {
  mounted(el, binding) {
    const { value } = binding
    const copyHandler = getCopyHandler(value)

    elMapToHandlers.set(el, copyHandler)
    el.addEventListener('click', copyHandler)
  },
  updated(el, binding) {
    const { value } = binding
    if (elMapToHandlers.has(el)) {
      el.removeEventListener('click', elMapToHandlers.get(el))
    }

    const copyHandler = getCopyHandler(value)
    elMapToHandlers.set(el, copyHandler)
    el.addEventListener('click', copyHandler)
  }
}
export default vCopy
