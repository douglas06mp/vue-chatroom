<template>
  <div class="media align-items-center px-3">
    <div class="avatar rounded-circle mr-3">
      <img src="https://picsum.photos/100/100?random=1" alt="avatar" />
    </div>
    <div class="media-body">
      <h3>{{ user }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: { user: String }
};
</script>

<style lang="scss" scoped>
.media {
  .avatar {
    width: 50px;
    overflow: hidden;
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
}
</style>
