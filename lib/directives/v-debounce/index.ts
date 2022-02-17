import { Directive } from 'vue'
import { isFunction } from '../../utils/index'

const vDebounce: Directive = {
  mounted(el, binding) {
    const { value, arg } = binding
    if (!isFunction(value)) return

    const delay = arg ? Number(arg.split('-')[1]) : 300

    const eventName = arg ? arg.split('-')[0] : 'click'

    let timer: undefined | number = undefined

    el.addEventListener(eventName, () => {
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
    })
  }
}
export default vDebounce
