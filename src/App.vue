<template>
  <div id="app" class="h-100 d-flex justify-content-center align-items-center">
    <div v-if="isAppLoading" class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <transition name="slide" mode="out-in">
      <router-view v-if="!isAppLoading" />
    </transition>
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
  overflow: hidden;

  .slide-enter-active {
    animation: slide-in 0.5s cubic-bezier(0.65, 1.28, 0.36, 1.04) forwards;
  }

  .slide-leave-active {
    animation: slide-out 0.5s cubic-bezier(0.65, 1.28, 0.36, 1.04) forwards;
  }
}

@keyframes slide-in {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
