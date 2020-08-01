export default {
  name: "Message",
  props: {
    username: String,
    message: String,
    timestamp: Number
  },
  computed: {
    timeConversion() {
      let time = new Date(this.timestamp);
      return time.getHours() + ":" + time.getMinutes().toPrecision(2);
    }
  }
};
