// Meta
import Meta from "vue-meta";
Vue.use(Meta, {
	keyName: "metaInfo",
	attribute: "vue-meta",
	ssrAttribute: "vue-meta-server-rendered",
	tagIDKeyName: "vmid",
	// refreshOnceOnNavigation: true,
});

// Tailwind CSS
import "./assets/styles/tailwind.css";

// Vue
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Inline SVG
import { InlineSvgPlugin } from "vue-inline-svg";
Vue.use(InlineSvgPlugin);

Vue.config.productionTip = false;

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
