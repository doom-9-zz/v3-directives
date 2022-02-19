import { Directive } from 'vue'

const elMapToHandlers: WeakMap<Element, () => void> = new WeakMap()

const getCopyHandler = (value: string): (() => void) => {
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
    if (!value) return
    const copyHandler = getCopyHandler(value)

    elMapToHandlers.set(el, copyHandler)
    el.addEventListener('click', copyHandler)
  },
  updated(el, binding) {
    const { value } = binding
    if (!value) return
    if (elMapToHandlers.has(el)) {
      el.removeEventListener('click', elMapToHandlers.get(el))
    }

    const copyHandler = getCopyHandler(value)
    elMapToHandlers.set(el, copyHandler)
    el.addEventListener('click', copyHandler)
  }
}
export default vCopy
