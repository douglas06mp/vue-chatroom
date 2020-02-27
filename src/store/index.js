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
  mutations: {
    login(state, payload) {
      state.user = payload;
    },
    logout(state) {
      state.user = "";
    },
    selectChat(state, payload) {
      const selectChat = data.filter(chat => chat.name === payload)[0];
      state.currentChat = selectChat;
    }
  },
  actions: {
    login({ commit }, payload) {
      commit("login", payload);
    },
    logout({ commit }) {
      commit("logout");
    },
    selectChat({ commit }, payload) {
      commit("selectChat", payload);
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
