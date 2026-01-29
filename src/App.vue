<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <ul>
      <li>
        <friend-card></friend-card>
        <friend-card></friend-card>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      friends: [
        {
          id: 1,
          name: "Manuel Lorenz",
          phone: " 01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: 2,
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>
