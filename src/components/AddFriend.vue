<template>
  <form @submit.prevent="onSubmit">
    <input type="text" placeholder="Name" v-model="name" />
    <input type="text" placeholder="Phone" v-model="phone" />
    <input type="text" placeholder="Email" v-model="email" />
    <input type="checkbox" id="is-favorite" v-model="isFavorite" />
    <button type="submit">Add Friend</button>
  </form>
</template>

<script>
export default {
  name: "AddFriend",
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      isFavorite: false,
    };
  },
  methods: {
    onSubmit() {
      this.$emit("add-friend", this.$data);
      this.dataReset();
    },
    dataReset() {
      this.name = "";
      this.phone = "";
      this.email = "";
      this.isFavorite = false;
    },
  },
  props: {},
  emits: {
    "add-friend": (data) => {
      console.log("emitting add-friend", data);
      return data;
    },
  },
};
</script>
