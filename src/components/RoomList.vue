<template>
  <div class="room-list p-3">
    <div class="mb-3">
      <h3>Chat Room</h3>
    </div>

    <ul class="list-group mt-2">
      <li
        class="list-group-item my-2"
        v-for="(chats, key) in chats"
        :key="key"
        @click="selectChat(key)"
      >
        <h5>{{ key }}</h5>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: { chats: Object },
  methods: {
    selectChat(key) {
      this.$store.dispatch("selectChat", key);
    }
  }
};
</script>

<style lang="scss" scoped>
.room-list {
  .list-group-item {
    color: #fff;
    background: #007bff;
    border: none;
    border-radius: 20px;
    cursor: pointer;
  }
}
</style>
