import Vue from "vue";
import Vuex from "vuex";
import firebase from "../firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAppLoading: true,
    user: "Bob",
    currentChat: {},
    chats: {}
  },
  mutations: {
    setData(state, { chats, currentChat }) {
      state.chats = chats;
      state.currentChat = currentChat;
      state.isAppLoading = false;
    },
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
      state.currentChat.chats = {
        ...state.currentChat.chats,
        [idx]: { name: user, text: message }
      };
    }
  },
  actions: {
    async setData({ commit }) {
      const { data } = await firebase.get("data.json");
      const chats = data;
      const currentChat = data[Object.keys(data)[0]];
      commit("setData", { chats, currentChat });
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
    sendMessage({ commit, state }, { idx, user, message }) {
      firebase.put(`data/${state.currentChat.name}/chats.json`, {
        ...state.currentChat.chats,
        [idx]: { name: user, text: message }
      });
      commit("sendMessage", { idx, user, message });
    }
  },
  getters: {
    isAppLoading: state => {
      return state.isAppLoading;
    },
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
