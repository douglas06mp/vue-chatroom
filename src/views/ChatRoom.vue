<template>
  <div
    id="chatroom"
    class="h-100 w-100 d-flex justify-content-center align-items-center"
  >
    <div class="container h-75 d-flex justify-content-between">
      <div class="info h-100 d-flex flex-column justify-content-between">
        <div class="block d-flex align-items-center">
          <User :user="user" />
        </div>
        <div class="block">
          <RoomList :chats="chats" />
        </div>
      </div>
      <div class="block room">
        <Chat :currentChat="currentChat" :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import User from "../components/User";
import RoomList from "../components/RoomList";
import Chat from "../components/Chat";
export default {
  computed: {
    user() {
      return this.$store.getters.user;
    },
    currentChat() {
      return this.$store.getters.currentChat;
    },
    chats() {
      return this.$store.getters.chats;
    }
  },
  components: {
    User,
    RoomList,
    Chat
  }
};
</script>

<style lang="scss" scoped>
#chatroom {
  .container {
    height: 800px;
    .info {
      flex-basis: 35%;
      .block {
        &:first-child {
          flex-basis: 10%;
        }
        &:last-child {
          flex-basis: 85%;
        }
      }
    }

    .room {
      flex-basis: 60%;
    }

    .block {
      background: rgba(0, 0, 0, 0.3);
      border-radius: 15px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
