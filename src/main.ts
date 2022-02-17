import { createApp } from "vue";
import App from "./App.vue";
import "./css/base.css";
import { vCopy, vFocus, vDebounce } from "../lib/main";

const app = createApp(App);

app.directive("copy", vCopy);
app.directive("focus", vFocus);
app.directive("debounce", vDebounce);

app.mount("#app");
