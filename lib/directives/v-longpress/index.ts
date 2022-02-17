import { Directive } from 'vue'
import { isFunction } from '../../utils'

const vLongPress: Directive = {
  mounted(el, binding) {
    const { value, arg } = binding
    if (!isFunction(value)) return

    let timer: number | undefined
    const pressHandler = () => {
      timer = window.setTimeout(value, arg ? Number(arg) : 300)
    }
    el.addEventListener('mousedown', pressHandler)
    el.addEventListener('mouseup', () => {
      clearTimeout(timer)
    })
  }
}
export default vLongPress
