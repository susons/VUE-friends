<template>
  <div>
    <li>
      <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
      <button @click="toggleDetails">
        {{ isVisible ? "Hide" : "Show" }} Details
      </button>
      <button @click="toggleFavorite">toggle is favorite</button>
      <button @click="deleteFriend">Delete friend</button>
      <ul v-if="isVisible">
        <li>
          <strong>Phone: {{ phone }}</strong>
        </li>
        <li>
          <strong>Email: {{ email }}</strong>
        </li>
      </ul>
    </li>
    <log-smile @send-smile="$emit('send-smile', $event)"></log-smile>
    <send-fruit></send-fruit>
  </div>
</template>

<script>
import LogSmile from "./LogSmile.vue";
import SendFruit from "./SendFruit.vue";
export default {
  components: { LogSmile, SendFruit },
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
    deleteFriend() {
      this.$emit("delete-friend", this.id);
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
    "delete-friend": (id) => {
      return typeof id === "number";
    },
    "send-smile": (data) => {
      console.log("emitting send-smile from FriendCard", data);
      return data;
    },
    "send-fruit": (data) => {
      console.log("send fruit from friend: ", data);
      return data;
    },
  },
};
</script>
