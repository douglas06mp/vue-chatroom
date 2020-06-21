<template>
  <div class="chat py-3 px-4">
    <h3 class="font-weight-bold">{{ currentChat.name }}</h3>
    <div class="content p-3 rounded" ref="content">
      <div
        class="user d-flex align-items-start mb-4"
        :class="{ local: chat.name === user, remote: chat.name !== user }"
        v-for="(chat, idx) in currentChat.chats"
        :key="idx"
      >
        <div class="avatar text-center mb-2">
          <div class="pic rounded-circle">
            <img src="https://picsum.photos/100/100?random=2" alt="avatar" />
          </div>
          <h5 class="mt-2">{{ chat.name }}</h5>
        </div>
        <div class="text rounded px-3 py-2">{{ chat.text }}</div>
      </div>
    </div>
    <form
      class="form mt-4 d-flex justify-content-between align-items-center"
      @submit.prevent="sendMessage"
    >
      <input
        type="text"
        v-model="message"
        class="form-control d-inline-block"
      />
      <button type="submit" class="btn btn-primary">
        <i class="fas fa-reply"></i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: { currentChat: Object, user: String },
  data() {
    return {
      message: ""
    };
  },
  methods: {
    sendMessage() {
      if (!this.message.trim()) {
        this.message = "";
        return;
      }
      const idx = new Date().getTime();
      const user = this.user;
      const message = this.message.trim();
      this.$store
        .dispatch("sendMessage", { idx, user, message })
        .then(() => this.scrollToBottom());
      this.message = "";
    },
    scrollToBottom(duration) {
      const content = this.$refs.content;
      content.scrollTo({ top: content.scrollHeight, behavior: "smooth" });
    }
  },
  mounted() {
    this.scrollToBottom();
  }
};
</script>

<style lang="scss" scoped>
@mixin pseudo-element {
  content: "";
  position: absolute;
  top: 10px;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
}

.chat {
  height: 100%;
  .content {
    height: 85%;
    background: rgba(255, 255, 255, 0.3);
    overflow-y: scroll;

    .user {
      .avatar {
        width: 50px;
        flex-shrink: 0;
        .pic {
          overflow: hidden;
          img {
            width: 100%;
            vertical-align: middle;
          }
        }
      }

      .text {
        line-height: 1.6;
        background-color: #fff;
        position: relative;
      }

      &.local {
        justify-content: flex-end;
        .text {
          order: -1;
          margin-right: 20px;
          margin-left: 70px;
          background-color: #007bff;
          color: #fff;
          &::before {
            border-left: 10px solid #007bff;
            right: -10px;
            @include pseudo-element;
          }
        }
      }

      &.remote {
        .text {
          margin-right: 70px;
          margin-left: 20px;
          &::before {
            border-right: 10px solid #fff;
            left: -10px;
            @include pseudo-element;
          }
        }
      }
    }
  }

  .form {
    input {
      flex-basis: 90%;
    }
  }
}

::-webkit-scrollbar {
  width: 16px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  &:active,
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>
