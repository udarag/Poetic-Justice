<template>
  <v-toolbar fixed color=#ff1744 dark>
    <v-toolbar-title class ="mr-4">
      <span
      class="home"
      @click="navigateTo({name: 'home'})">
      Poetic Justice
      </span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark v-if="!$store.state.loggedIn"
        @click="navigateTo({name: 'login'})">
        Log in
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  cursor: pointer;
}
.home:hover{
  color: rebeccapurple
}
</style>
