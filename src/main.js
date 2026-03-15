import { createApp } from "vue";
// import './style.css'
import Basic from "./Basic.vue";
import Component from "./Component.vue";
import SpecialProps from "./SpecialProps.vue";
import SpecialLatihan from "./SpecialLatihan.vue";
import SpecialEmit from "./SpecialEmit.vue";
import App from "./App.vue";
// import router from "./router";
// import dinamicRouter from "./dinamicRouter";
// import { router } from "./crudrouter";
import SpecialFetch from "./SpecialFetch.vue";
import router from "./spesialFectch.vue/routerapi/routerApi";

// createApp(Basic).mount('#app')
// createApp(App).mount("#app");

// HUBUNGKAN ROUTER APP
createApp(SpecialFetch).use(router).mount('#app')
