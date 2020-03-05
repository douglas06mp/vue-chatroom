import Vue from "vue";
import App from "./App.vue";
import VueSocketio from "vue-socket.io";
import socketio from "socket.io-client";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

Vue.use(
  new VueSocketio({
    debug: true,
    connection: "http://localhost:8080/",
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    }
  })
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
