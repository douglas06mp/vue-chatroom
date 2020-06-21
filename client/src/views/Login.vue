<template>
  <form
    id="login"
    class="w-100 h-100 d-flex justify-content-center align-items-center"
    @submit.prevent="login"
  >
    <div class="wrapper rounded p-3">
      <div class="w-100 mb-4">
        <h4 class="text-white d-inline-block">Enter your name</h4>
        <button
          class="btn btn-primary rounded-circle float-right"
          type="submit"
        >
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
      <div class="input-group">
        <span class="message text-warning">{{
          validation.firstError("name")
        }}</span>
        <input
          type="text"
          class="form-control"
          v-model="name"
          placeholder="name"
        />
      </div>
    </div>
  </form>
</template>

<script>
import Vue from "vue";
import SimpleVueValidator from "simple-vue-validator";
import _ from "lodash";
const Validator = SimpleVueValidator.Validator;
Vue.use(SimpleVueValidator);

export default {
  data() {
    return {
      name: ""
    };
  },
  methods: {
    login() {
      this.$validate().then(success => {
        if (success) {
          const name = _.capitalize(this.name.trim());
          this.$store.dispatch("login", name).then(this.$router.push("/chat"));
        }
      });
    }
  },
  validators: {
    name: function(value) {
      return Validator.value(value).required();
    }
  }
};
</script>

<style lang="scss" scoped>
#login {
  .wrapper {
    background: rgba(0, 0, 0, 0.3);
    width: 350px;
    height: 130px;

    .input-group {
      .message {
        position: absolute;
        content: "";
        top: -25px;
        left: 0;
      }
    }
  }
}
</style>
