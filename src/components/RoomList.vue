<template>
  <div class="room-list p-3">
    <div class="mb-3">
      <h3>Chat Room</h3>
    </div>

    <ul class="list-group mt-2">
      <li
        class="list-group-item my-2"
        v-for="(room, index) in chats"
        :key="index"
      >
        <h5>{{ index }}</h5>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: { chats: Object }
};
</script>

<style lang="scss" scoped>
.room-list {
  .list-group-item {
    background: rgb(41, 236, 188);
    border: none;
    border-radius: 20px;
    cursor: pointer;
  }
}
</style>
