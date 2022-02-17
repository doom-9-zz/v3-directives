import { isBoolean } from '../../utils/index'
import { Directive } from 'vue'

const svgNode = `
<svg width="120" height="30" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="#fff">
    <circle cx="15" cy="15" r="15">
        <animate attributeName="r" from="15" to="15"
                 begin="0s" dur="0.8s"
                 values="15;9;15" calcMode="linear"
                 repeatCount="indefinite" />
        <animate attributeName="fill-opacity" from="1" to="1"
                 begin="0s" dur="0.8s"
                 values="1;.5;1" calcMode="linear"
                 repeatCount="indefinite" />
    </circle>
    <circle cx="60" cy="15" r="9" fill-opacity="0.3">
        <animate attributeName="r" from="9" to="9"
                 begin="0s" dur="0.8s"
                 values="9;15;9" calcMode="linear"
                 repeatCount="indefinite" />
        <animate attributeName="fill-opacity" from="0.5" to="0.5"
                 begin="0s" dur="0.8s"
                 values=".5;1;.5" calcMode="linear"
                 repeatCount="indefinite" />
    </circle>
    <circle cx="105" cy="15" r="15">
        <animate attributeName="r" from="15" to="15"
                 begin="0s" dur="0.8s"
                 values="15;9;15" calcMode="linear"
                 repeatCount="indefinite" />
        <animate attributeName="fill-opacity" from="1" to="1"
                 begin="0s" dur="0.8s"
                 values="1;.5;1" calcMode="linear"
                 repeatCount="indefinite" />
    </circle>
</svg>
`

let loadingWrapper: HTMLDivElement | null = null

const vLoading: Directive = {
  mounted(el, binding) {
    const { value } = binding
    if (!isBoolean(value)) return
    if (!value) return
    loadingWrapper = document.createElement('div')
    loadingWrapper.style.position = 'absolute'
    loadingWrapper.style.top = '50%'
    loadingWrapper.style.left = '50%'
    loadingWrapper.style.transform = 'translate(-50%, -50%)'
    loadingWrapper.style.zIndex = '9999'
    loadingWrapper.style.pointerEvents = 'none'
    loadingWrapper.innerHTML = svgNode
    el.style.position = 'relative'
    el.appendChild(loadingWrapper)
  },
  updated(el, binding) {
    const { value } = binding
    if (!isBoolean(value)) return
    if (value && loadingWrapper !== null) return
    if (!value && loadingWrapper === null) {
    }
  }
}
export default vLoading
