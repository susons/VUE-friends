<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ isVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavorite">toggle is favorite</button>
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
    toggleFavorite() {
      this.$emit("update-favorite", this.isFavorite, this.id);
    },
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
      validator(value) {
        return value?.trim().split(" ").length >= 2;
      },
    },
    phone: String,
    email: {
      type: String,
      required: false,
      default: "No email provided",
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: {
    "update-favorite": (isFav, id) => {
      return typeof isFav === "boolean" && typeof id === "number";
    },
  },
};
</script>
