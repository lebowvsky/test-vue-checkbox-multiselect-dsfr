import { createApp } from "vue";
import App from "./App.vue";
import "@gouvminint/vue-dsfr/dist/vue-dsfr.css"; // Import des styles globaux
import VueDsfr from "@gouvminint/vue-dsfr";
import "remixicon/fonts/remixicon.css";

createApp(App).use(VueDsfr).mount("#app");
// createApp(App).mount("#app");
