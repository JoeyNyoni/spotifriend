import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import BasicCard from "./components/ui/BasicCard.vue";

createApp(App)
  .use(store)
  .use(router)
  .component("BasicCard", BasicCard)
  .mount("#app");
