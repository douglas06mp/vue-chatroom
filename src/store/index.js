import Vue from "vue";
import Vuex from "vuex";
import firebase from "../firebase";
import data from "../data.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "Bob",
    currentChat: data.Food,
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
      state.currentChat = state.chats[payload];
    },
    sendMessage(state, { idx, user, message }) {
      state.currentChat.chats[idx] = { name: user, text: message };
    }
  },
  actions: {
    async setData({ commit }) {
      const { data } = await firebase.get("data.json");
      console.log(data.Food);
    },
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
