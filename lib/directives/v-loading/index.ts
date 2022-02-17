import { isBoolean } from '../../utils/index'
import { Directive } from 'vue'

const svgNode = `
<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
            <stop stop-color="#fff" stop-opacity="0" offset="0%"/>
            <stop stop-color="#fff" stop-opacity=".631" offset="63.146%"/>
            <stop stop-color="#fff" offset="100%"/>
        </linearGradient>
    </defs>
    <g fill="none" fill-rule="evenodd">
        <g transform="translate(1 1)">
            <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="0.9s"
                    repeatCount="indefinite" />
            </path>
            <circle fill="#fff" cx="36" cy="18" r="1">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="0.9s"
                    repeatCount="indefinite" />
            </circle>
        </g>
    </g>
</svg>
`

let maskElement: HTMLDivElement | null = null

let hasChangePosition = false

const appendChild = (el: HTMLElement): void => {
  let loadingWrapper: HTMLDivElement | null = null
  maskElement = document.createElement('div')
  maskElement.style.position = 'absolute'
  maskElement.style.top = '0'
  maskElement.style.left = '0'
  maskElement.style.right = '0'
  maskElement.style.bottom = '0'
  maskElement.style.zIndex = '9999'
  maskElement.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
  maskElement.style.pointerEvents = 'none'
  loadingWrapper = document.createElement('div')
  loadingWrapper.style.position = 'absolute'
  loadingWrapper.style.top = '50%'
  loadingWrapper.style.left = '50%'
  loadingWrapper.style.transform = 'translate(-50%, -50%)'
  loadingWrapper.style.pointerEvents = 'none'
  loadingWrapper.innerHTML = svgNode
  if (el.style.position === 'static' || el.style.position === '') {
    hasChangePosition = true
    el.style.position = 'relative'
  }
  maskElement.appendChild(loadingWrapper)
  el.appendChild(maskElement)
}

const vLoading: Directive = {
  mounted(el, binding) {
    const { value } = binding
    if (!isBoolean(value)) return
    if (!value) return
    appendChild(el)
  },
  updated(el, binding) {
    const { value } = binding
    if (!isBoolean(value)) return
    if (value && maskElement !== null) return
    if (value && maskElement === null) {
      appendChild(el)
    }
    if (!value && maskElement === null) return
    if (!value && maskElement !== null) {
      if (hasChangePosition) {
        el.style.position = 'static'
        hasChangePosition = false
      }
      el.removeChild(maskElement)
      maskElement = null
    }
  },
  unmounted() {
    maskElement = null
  }
}
export default vLoading
