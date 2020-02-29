<template>
  <div class="room-list h-100 p-3 d-flex flex-column justify-content-between">
    <h3 class="font-weight-bold">Chat Room</h3>

    <ul class="list-group">
      <li
        class="list-group-item my-2"
        v-for="(chats, key) in chats"
        :key="key"
        @click="selectChat(key)"
      >
        <h5>{{ key }}</h5>
      </li>
    </ul>

    <form
      class="form d-flex justify-content-between align-items-center"
      @submit.prevent="addChat"
    >
      <input type="text" v-model="newChatName" class="form-control" />
      <button type="submit" class="btn btn-warning rounded-circle">
        <i class="fas fa-plus"></i>
      </button>
    </form>
  </div>
</template>

<script>
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
      this.$store.dispatch("addChat", this.newChatName);
      this.newChatName = "";
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
    }
  }

  .form {
    flex-basis: 8%;
    input {
      display: inline-block;
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
