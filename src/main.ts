import { createApp } from "vue";
import App from "./App.vue";
import "./css/base.css";
import { vCopy } from "../lib/main";

const app = createApp(App);

app.directive("copy", vCopy);

app.mount("#app");
