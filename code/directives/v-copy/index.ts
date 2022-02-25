import { Directive, DirectiveBinding } from 'vue'

const elMapToHandlers: WeakMap<Element, () => void> = new WeakMap()

const addEventListener = (el: Element, binding: DirectiveBinding) => {
  const { value } = binding
  const copyHandler = (): void => {
    navigator.clipboard
      .writeText(String(value))
      .then(() => {
        window.alert('Copy successful')
      })
      .catch(() => {
        window.alert('Copy failed')
      })
  }

  elMapToHandlers.set(el, copyHandler)
  el.addEventListener('click', copyHandler)
}

const vCopy: Directive = {
  mounted(el: HTMLElement, binding) {
    addEventListener(el, binding)
  },
  updated(el: HTMLElement, binding) {
    if (elMapToHandlers.has(el)) {
      const handler = elMapToHandlers.get(el)
      handler && el.removeEventListener('click', handler)
      elMapToHandlers.delete(el)
    }
    addEventListener(el, binding)
  },
  beforeUnmount(el) {
    elMapToHandlers.delete(el)
  }
}
export default vCopy
