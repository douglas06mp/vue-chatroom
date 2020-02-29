<template>
  <div class="room-list h-100 p-3 d-flex flex-column justify-content-between">
    <h3 class="font-weight-bold">Chat Room</h3>

    <ul class="list-group">
      <li
        class="list-group-item my-2 d-flex justify-content-between align-items-center"
        v-for="(chats, key, idx) in chats"
        :key="idx"
        @click="selectChat(key)"
      >
        <h5 class="d-inline-block">{{ key }}</h5>
        <button
          class="btn btn-danger rounded-circle"
          @click.stop="deleteChat(key)"
        >
          <i class="fas fa-trash"></i>
        </button>
      </li>
    </ul>

    <form
      class="form d-flex justify-content-between align-items-center"
      @submit.prevent="addChat"
    >
      <input
        type="text"
        v-model="newChatName"
        class="form-control d-inline-block"
      />
      <button type="submit" class="btn btn-warning rounded-circle">
        <i class="fas fa-plus"></i>
      </button>
    </form>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  props: { chats: Object },
  data() {
    return {
      newChatName: ""
    };
  },
  methods: {
    selectChat(key) {
      this.$store.dispatch("selectChat", key);
    },
    addChat() {
      if (!this.newChatName.trim()) {
        this.newChatName = "";
        return;
      }
      const newChatName = _.capitalize(this.newChatName);
      this.$store.dispatch("addChat", newChatName);
      this.newChatName = "";
    },
    deleteChat(key) {
      this.$store.dispatch("deleteChat", key);
      this.$forceUpdate();
    }
  }
};
</script>

<style lang="scss" scoped>
.room-list {
  .list-group {
    overflow-y: scroll;
    flex-basis: 80%;
    .list-group-item {
      color: #fff;
      background: #007bff;
      border: none;
      border-radius: 20px;
      cursor: pointer;

      &:hover .btn {
        opacity: 1;
      }
      .btn {
        transition: opacity 0.5s;
        opacity: 0;
      }
    }
  }

  .form {
    flex-basis: 8%;
    input {
      flex-basis: 85%;
    }
  }
}

::-webkit-scrollbar {
  width: 16px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  &:active,
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>
