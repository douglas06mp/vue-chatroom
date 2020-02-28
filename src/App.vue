<template>
  <div id="app" class="h-100 d-flex justify-content-center align-items-center">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("setData");
  }
};
</script>

<style lang="scss">
#app {
  background: linear-gradient(to top, #7f7fd5, #86a8e7, #91eae4);
}
</style>
