import Vue from "vue";
import Vuex from "vuex";
import data from "../data.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "Bob",
    currentChat: data[0],
    chats: data
  },
  mutations: {},
  actions: {},
  getters: {
    user: state => {
      return state.user;
    },
    currentChat: state => {
      return state.currentChat;
    },
    chats: state => {
      return state.chats;
    }
  }
});
