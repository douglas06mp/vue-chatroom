<template>
  <div class="media w-100 align-items-center px-3">
    <div class="avatar rounded-circle mr-3">
      <img src="https://picsum.photos/100/100?random=1" alt="avatar" />
    </div>
    <div class="media-body d-flex justify-content-between align-items-center">
      <h3>{{ user }}</h3>
      <button class="btn btn-primary rounded-circle" @click="logout">
        <i class="fas fa-sign-out-alt"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: { user: String },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(this.$router.push("/"));
    }
  }
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
