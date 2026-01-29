<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">
      {{ isVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="isVisible">
      <li>
        <strong>Phone: {{ phone }}</strong>
      </li>
      <li>
        <strong>Email: {{ email }}</strong>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "FriendCard",
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.isVisible = !this.isVisible;
    },
  },
  props: {
    name: String,
    phone: String,
    email: String,
  },
};
</script>
