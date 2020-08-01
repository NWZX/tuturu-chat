<template>
  <b-container>
    <b-row>
      <b-col>
        <Message username="ME" message="test" v-bind:timestamp="time"/>
      </b-col>
    </b-row>
    <b-row class="align-items-center">
      <b-col>
        <textarea id="msg" placeholder="tuturu!" class="w-100"></textarea>
      </b-col>
      <b-col cols="2">
        <b-avatar icon="arrow-up"></b-avatar>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Message from "../Message/Message";

export default {
  name: "Chat",
  components: {
    Message
  },
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      time: Date.now()
    };
  },
  methods: {
    onSubmit() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='./Chat.scss'>
</style>