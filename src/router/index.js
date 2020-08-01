import Vue from "vue";
import VueRouter from "vue-router";

import Auth from "../components/Auth/Auth";
import Chat from "../components/Chat/Chat";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Chat
    },
    {
      path: "/auth",
      name: "Auth",
      component: Auth
    },
    {
      path: "/chat",
      name: "Chat",
      component: Auth
    }
  ]
});
