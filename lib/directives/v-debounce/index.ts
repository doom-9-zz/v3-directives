import { Directive } from "vue";

const vDebounce: Directive = {
  mounted(el, binding) {
    const { value, arg } = binding;
    if (typeof value !== "function") return;

    const delay = arg ? Number(arg.split("-")[1]) : 300;

    const eventName = arg ? arg.split("-")[0] : "click";

    let timer: null | number = null;

    el.addEventListener(eventName, () => {
      if (timer === null) {
        timer = window.setTimeout(() => {
          value();
          timer = null;
        }, delay);
      } else {
        window.clearTimeout(timer);
        timer = window.setTimeout(() => {
          value();
          timer = null;
        }, delay);
      }
    });
  },
};
export default vDebounce;
