import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/icon.css";
import "element-ui/lib/theme-chalk/notification.css";
import "element-ui/lib/theme-chalk/loading.css";
import axios from "@/plugin/axios";
import VueAxios from "vue-axios";
import router from "./router";
import EventBus from "./EventBus";
import Crypto from "crypto-js";
import secret from "../secret";
import i18n from "./i18n";
import VuePlyr from "vue-plyr"
import Loading from "vue-loading-overlay";
import 'vue-loading-overlay/dist/vue-loading.css';
// store
import store from "@/store/index";
import VueClipboard from "vue-clipboard2";
import VueLazyload from "vue-lazyload";
import Viewer from "v-viewer";
import cdnpath from "./libs/util.cdn";
import '@/components'
import "viewerjs/dist/viewer.css";
import "@/assets/style/theme/register.scss";

document.write(
  `<script>var _hmt=_hmt||[];(function(){var hm=document.createElement("script");hm.src="https://hm.baidu.com/hm.js?6be1011f95a1bfcdb2179fe2ae6e58fe";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm,s)})();</script>`
);

Vue.prototype.$hash = Crypto;
Vue.prototype.$pass = secret.pass;
Vue.config.productionTip = false;
Vue.prototype.$cdnpath = cdnpath;
Vue.prototype.$bus = EventBus;
Vue.use(ElementUI);
Vue.use(VueAxios, axios);
Vue.use(require('vue-moment'));
Vue.use(VueClipboard);
Vue.use(VuePlyr, {
  plyr: {
    fullscreen: { enabled: true }
  },
});
Vue.use(VueLazyload, {
  loading: cdnpath("images/airplane.gif"),
});
Vue.use(Loading, {
  color: 'pink'
})
Vue.use(Viewer);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
  mounted() {
    this.$store.dispatch("acrou/view/load");
  },
}).$mount("#app");
