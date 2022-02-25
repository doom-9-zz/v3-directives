import { Directive } from 'vue'

const vFlicker: Directive = {
  mounted(el: HTMLElement) {
    el.focus && el.focus()
  },
  updated(el: HTMLElement) {
    el.focus && el.focus()
  }
}
export default vFlicker
