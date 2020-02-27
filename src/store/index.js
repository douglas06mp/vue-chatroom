import Vue from "vue";
import Vuex from "vuex";
import data from "../data.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "",
    currentChat: data[0],
    chats: data
  },
  mutations: {
    login(state, payload) {
      state.user = payload;
    },
    logout(state) {
      state.user = "";
    }
  },
  actions: {
    login({ commit }, payload) {
      commit("login", payload);
    },
    logout({ commit }) {
      commit("logout");
    }
  },
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
