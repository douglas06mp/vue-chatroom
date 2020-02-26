<template>
  <div id="chatroom" class="container d-flex justify-content-between">
    <div class="info h-100 d-flex flex-column justify-content-between">
      <div class="block">Name</div>
      <div class="block">Room</div>
    </div>
    <div class="block room">
      <h1>Chat</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#chatroom {
  height: 800px;
  .info {
    flex-basis: 35%;
    .block {
      &:first-child {
        flex-basis: 20%;
      }
      &:last-child {
        flex-basis: 75%;
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
