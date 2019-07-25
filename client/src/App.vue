<template>
  <div id="app">
    <v-app :dark="true">
      <toolbar/>
      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import toolbar from '@/components/Toolbar.vue'
export default {
  name: 'App',
  components: {
    toolbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #42b883;
}
</style>
