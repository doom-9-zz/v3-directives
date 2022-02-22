import { Directive } from 'vue'

const vFocus: Directive = {
  mounted(el) {
    el.focus && el.focus()
  },
  updated(el) {
    el.focus && el.focus()
  }
}
export default vFocus
