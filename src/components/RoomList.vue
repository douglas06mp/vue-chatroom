<template>
  <div class="room-list p-3">
    <div class="mb-3">
      <h3>Chat Room</h3>
    </div>

    <ul class="list-group mt-2">
      <li class="list-group-item my-2" v-for="chat in chats" :key="chat.name">
        <h5>{{ chat.name }}</h5>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: { chats: Array }
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
