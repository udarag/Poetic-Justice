<template>
  <div id="app">
    <v-app>
      <toolbar/>
      <main>
          <router-view></router-view>
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
