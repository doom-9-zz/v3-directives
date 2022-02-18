import { Directive } from 'vue'

const options = {
  root: document.querySelector('html'),
  threshold: 0.1
}

const callback: IntersectionObserverCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target as HTMLImageElement
      if (img.src === '' || img.src === null || img.src === undefined) {
        img.src = img.dataset.src || ''
      }
    }
  })
}

const observer = new IntersectionObserver(callback, options)

const vImgLazyLoad: Directive = {
  mounted(el, binding) {
    if (el.tagName !== 'IMG') return
    const { value } = binding
    el.setAttribute('data-src', value)
    observer.observe(el)
  },
  beforeUnmount() {
    observer.disconnect()
  }
}
export default vImgLazyLoad
