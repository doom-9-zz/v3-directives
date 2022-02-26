import { Directive } from 'vue'

const vResize: Directive = {
  mounted(el: HTMLElement) {
    el.focus && el.focus()
  },
  updated(el: HTMLElement) {
    el.focus && el.focus()
  }
}
export default vResize
