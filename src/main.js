import { createApp } from "vue";

import App from "./App.vue";
import FriendCard from "./components/FriendCard.vue";
import "./styles.css";

const app = createApp(App);

app.component("friend-card", FriendCard);

app.mount("#app");
