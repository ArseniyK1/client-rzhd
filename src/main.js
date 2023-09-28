import { createApp } from "vue";
import App from "./App.vue";
import componets from "@/components/UI";
import { createPinia } from "pinia";

const app = createApp(App);

componets.forEach((component) => app.component(component.name, component));

app.use(createPinia()).mount("#app");
