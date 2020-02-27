import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Login from "../views/Login.vue";
import ChatRoom from "../views/ChatRoom.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/chat",
    name: "chat",
    component: ChatRoom,
    beforeEnter: (to, from, next) => {
      console.log(store.getters.user);
      store.getters.user ? next() : next(false);
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
