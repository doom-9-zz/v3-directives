import { Directive, DirectiveBinding } from 'vue'

const options = {
  root: document.querySelector('html'),
  threshold: 0.1
}

const callback: IntersectionObserverCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target as HTMLImageElement
      if (img.src !== img.dataset.src) {
        img.src = img.dataset.src || ''
      }
    }
  })
}

const observer: IntersectionObserver = new IntersectionObserver(
  callback,
  options
)

const observerHandler: (el: Element, binding: DirectiveBinding) => void = (
  el,
  binding
) => {
  if (el.tagName !== 'IMG') return
  const { value } = binding
  el.setAttribute('data-src', String(value))
  observer.observe(el)
}

const vImgLazyLoad: Directive = {
  mounted(el, binding) {
    observerHandler(el, binding)
  },
  updated(el, binding) {
    observerHandler(el, binding)
  },
  beforeUnmount(el) {
    if (observer) {
      observer.unobserve(el)
    }
  }
}
export default vImgLazyLoad
