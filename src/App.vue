<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <section>
      <add-friend
        @add-friend="(friendData) => addFriend(friendData)"
      ></add-friend>
    </section>
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
          @delete-friend="deleteFriend"
          @send-smile="sendSmile"
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
      animals: ["🐴", "🐕", "🐘", "🐻", "🐞"],
      emojis: "😀 😂 😊 😎 😜",
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
  provide() {
    return {
      animals: this.animals,
      getEmojis: () => this.emojis,
      sendFruit: this.sendFruit,
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
    addFriend(friendData) {
      this.friends.push({ id: this.friends.length + 1, ...friendData });
    },
    deleteFriend(id) {
      console.log("runs? ", id);
      this.friends = this.friends.filter((f) => f.id !== id);
    },
    sendSmile(data) {
      console.log("Smile received in App.vue:", data);
    },
    sendFruit(data) {
      console.log("Fruit received in App.vue:", data);
    },
  },
  computed: {},
  mounted() {
    setTimeout(() => {
      this.animals.push("qweqwewqeqw");
      this.emojis = "😜";
    }, 3000);
  },
};
</script>
