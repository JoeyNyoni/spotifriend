import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../src/main.css"

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import BasicCard from "./components/ui/BasicCard.vue";
import BasicButton from "./components/ui/BasicButton.vue";
import BasicModal from "./components/ui/BasicModal.vue";
import SearchBar from "./components/ui/SearchBar.vue";

createApp(App)
  .use(store)
  .use(router)
  .component("BasicCard", BasicCard)
  .component("BasicButton", BasicButton)
  .component("BasicModal", BasicModal)
  .component("SearchBar", SearchBar)
  .mount("#app");
