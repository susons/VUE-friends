import { createApp } from "vue";

import App from "./App.vue";
import FriendCard from "./components/FriendCard.vue";
import AddFriend from "./components/AddFriend.vue";

import "./styles.css";
import LogSmile from "./components/LogSmile.vue";

const app = createApp(App);

app.component("friend-card", FriendCard);
app.component("add-friend", AddFriend);
app.component("log-smile", LogSmile);

app.mount("#app");
