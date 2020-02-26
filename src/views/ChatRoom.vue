<template>
  <div id="chatroom" class="container d-flex justify-content-between">
    <div class="info h-100 d-flex flex-column justify-content-between">
      <div class="block d-flex align-items-center">
        <User :user="user" />
      </div>
      <div class="block">
        <RoomList :chats="chats" />
      </div>
    </div>
    <div class="block room">
      <h1>Chat</h1>
    </div>
  </div>
</template>

<script>
import User from "../components/User";
import RoomList from "../components/RoomList";
export default {
  computed: {
    user() {
      return this.$store.getters.user;
    },
    chats() {
      return this.$store.getters.chats;
    }
  },
  components: {
    User,
    RoomList
  }
};
</script>

<style lang="scss" scoped>
#chatroom {
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
  }
}
</style>
