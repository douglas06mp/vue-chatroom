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
    },
    sendMessage(state, { chat, user, text }) {
      state.chats
        .filter(({ name }) => name === chat.name)[0]
        .chats.push({ user, text });
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
    },
    sendMessage({ commit }, payload) {
      commit("sendMessage", payload);
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
