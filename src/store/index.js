import Vue from "vue";
import Vuex from "vuex";
import firebase from "../firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAppLoading: true,
    user: null,
    currentChat: {},
    chats: {}
  },
  mutations: {
    setData(state, { chats, currentChat }) {
      state.chats = chats;
      state.currentChat = currentChat;
      state.isAppLoading = false;
    },
    login(state, name) {
      state.user = name;
    },
    logout(state) {
      state.user = null;
    },
    selectChat(state, chatName) {
      state.currentChat = state.chats[chatName];
    },
    addChat(state, newChatName) {
      state.chats[newChatName] = {
        name: newChatName,
        chats: {}
      };
      state.currentChat = state.chats[newChatName];
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
    login({ commit }, name) {
      commit("login", name);
    },
    logout({ commit }) {
      commit("logout");
    },
    selectChat({ commit }, chatName) {
      commit("selectChat", chatName);
    },
    addChat({ commit }, newChatName) {
      commit("addChat", newChatName);
    },
    sendMessage({ commit, state }, { idx, user, message }) {
      let chatObj = {};
      if (!idx) {
        chatObj = {
          name: state.currentChat.name,
          chats: {
            ...state.currentChat.chats,
            [idx]: { name: user, text: message }
          }
        };
        firebase.put(`data/${state.currentChat.name}.json`, chatObj);
      } else {
        chatObj = {
          ...state.currentChat.chats,
          [idx]: { name: user, text: message }
        };
        firebase.put(`data/${state.currentChat.name}/chats.json`, chatObj);
      }

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
