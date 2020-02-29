<template>
  <div id="app" class="h-100 d-flex justify-content-center align-items-center">
    <div v-if="isAppLoading" class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <router-view v-else />
  </div>
</template>

<script>
export default {
  computed: {
    isAppLoading() {
      return this.$store.getters.isAppLoading;
    }
  },
  created() {
    this.$store.dispatch("setData");
  }
};
</script>

<style lang="scss">
#app {
  background: linear-gradient(to bottom, #fdc830, #f37335);
  font-family: "Lato", sans-serif;
}
</style>
