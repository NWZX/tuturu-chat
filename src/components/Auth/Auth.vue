<template>
  <div class="d-flex w-50 m-auto">
    <b-form @submit="onSubmit" class="w-100">
      <b-form-group id="in-pseudo" label="Pseudo" label-for="Pseudo">
        <b-form-input id="Pseudo" required placeholder="Enter name" v-model="form.username"></b-form-input>
      </b-form-group>
      <b-form-group id="in-pw" label="Password" label-for="password">
        <b-form-input
          id="password"
          type="password"
          required
          placeholder="Enter Password"
          v-model="form.password"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="dark">Submit</b-button>
    </b-form>
  </div>
</template>

<script src="./Auth.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='./Auth.scss'>
</style>
