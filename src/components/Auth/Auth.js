export default {
  name: "Auth",
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      alert(this.form.username);
      alert(this.form.password);
    }
  }
};
