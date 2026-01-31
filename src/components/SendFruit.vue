<template>
  <div class="card">
    <div class="div">
      <h2 @click="sendFruit(this.fruit)">
        {{ this.fruit }}
      </h2>
      <h3>{{ this.animals }}</h3>
      <h3>{{ this.getEmojis() }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "SendFruit",
  data() {
    return {
      fruit: "🍇 🍊 🍏 🥝 🥥",
    };
  },
  methods: {
    // sendFruit() {
    //   this.$emit("send-fruit", this.fruit);
    // },
  },
  props: {},
  inject: ["animals", "getEmojis", "sendFruit"],
  // emits: {
  //   "send-fruit": (data) => {
  //     console.log("emitting send-fruit", data);
  //     return data;
  //   },
  // },
};
</script>
