import { Directive } from 'vue'

let copyHandler: (() => void) | null = null

let copyValue: string | null = null

const vCopy: Directive = {
  mounted(el, binding) {
    const { value } = binding
    if (value) {
      copyValue = String(value)
      copyHandler = () => {
        if (!copyValue) return
        navigator.clipboard
          .writeText(copyValue)
          .then(() => {
            window.alert('Copy successful')
          })
          .catch(() => {
            window.alert('Copy failed')
          })
      }
    }
    el.addEventListener('click', copyHandler)
  },
  updated(el, binding) {
    const { value } = binding
    if (value) {
      copyValue = String(value)
    }
  },
  beforeUnmount(el) {
    el.removeEventListener('click', copyHandler)
    copyHandler = null
    copyValue = null
  }
}
export default vCopy
