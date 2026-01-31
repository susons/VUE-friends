<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <ul>
      <li>
        <friend-card
          v-for="{ id, name, phone, email, isFavorite } in friends"
          :key="id"
          :id="id"
          :name="name"
          :phone="phone"
          :email="email"
          :is-favorite="isFavorite"
          @update-favorite="(isFav, id) => toggleFavoriteStatus(isFav, id)"
        ></friend-card>
      </li>
    </ul>
  </section>
</template>

<script>
import FriendCard from "./components/FriendCard.vue";
export default {
  components: { FriendCard },
  name: "App",
  data() {
    return {
      friends: [
        {
          id: 1,
          name: "Manuel Lorenz",
          phone: " 01234 5678 991",
          email: "manuel@localhost.com",
          isFavorite: true,
        },
        {
          id: 2,
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(isFavorite, id) {
      console.log(isFavorite, id);
      const friend = this.friends.find((f) => f.id === id);
      if (friend) {
        friend.isFavorite = !isFavorite;
      }
    },
  },
  computed: {},
};
</script>
