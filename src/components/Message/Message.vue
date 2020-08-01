<template>
  <b-container class="rounded bg-secondary">
    <b-row>
      <b-col>
        <strong>{{username}}</strong>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p>{{message}}</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <span>{{timeConversion}}</span>
      </b-col>
    </b-row>
  </b-container>
</template>

<script src="./Message.js">
</script>

<style lang="scss" scoped src="./Message.scss">
</style>


