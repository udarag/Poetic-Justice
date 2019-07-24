<template>
  <v-toolbar color=#ff1744>
    <v-toolbar-title class ="mr-4">
      <v-btn flat dark v-if="!$store.state.loggedIn"
        @click="navigateTo({name: 'welcome'})">
        Poetic Justice
      </v-btn>
      <v-btn flat dark v-if="$store.state.loggedIn"
        @click="navigateTo({name: 'home'})">
        Poetic Justice
      </v-btn>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark v-if="$store.state.loggedIn"
        @click="navigateTo({name: 'browse'})">
        Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark v-if="!$store.state.loggedIn"
        @click="navigateTo({name: 'login'})">
        Log in
      </v-btn>
      <v-btn flat dark v-if="$store.state.loggedIn"
        @click="logout">
        Log out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'welcome'
      })
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
