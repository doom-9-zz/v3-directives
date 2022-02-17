import { Directive } from "vue";

const vFocus: Directive = {
  mounted(el) {
    el.focus();
  },
  updated(el) {
    el.focus();
  },
};
export default vFocus;
