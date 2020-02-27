<template>
  <div id="login" class="rounded p-3">
    <div class="w-100 mb-3">
      <h4 class="text-white d-inline-block">Enter your name</h4>
      <button class="btn btn-primary rounded-circle float-right" @click="login">
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        v-model="userName"
        placeholder="name"
      />
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  data() {
    return {
      userName: ""
    };
  },
  methods: {
    login() {
      const userName = _.capitalize(this.userName);
      this.$store.dispatch("login", userName).then(this.$router.push("/chat"));
    }
  }
};
</script>

<style lang="scss" scoped>
#login {
  background: rgba(0, 0, 0, 0.3);
  width: 350px;
}
</style>
