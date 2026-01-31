<template>
  <div class="card">
    <div class="div">
      <h2 @click="sendSmile">
        {{ this.smile }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogSmile",
  data() {
    return {
      smile: "😄 😍 💗",
    };
  },
  methods: {
    sendSmile() {
      this.$emit("send-smile", this.smile);
    },
  },
  props: {},
  emits: {
    "send-smile": (data) => {
      console.log("emitting send-smile", data);
      return data;
    },
  },
};
</script>
