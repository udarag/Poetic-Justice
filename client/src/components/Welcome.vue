<template>
  <v-container bg fill-height grid-list-md text-xs-center>
    <v-layout row wrap align-center>
      <v-flex
        hidden-sm-and-down
        align-self-center
      >
        <v-img
          :src="require('@/assets/logo.png')"
        />
      </v-flex>

      <v-flex
        xs12
        md6
        align-content-space-between
        layout
        :pa-5="$vuetify.breakpoint.smAndDown"
        wrap
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs10
            md6
          >
            <h1>Welcome!</h1>
            <p>
              This is Poetic Justice. The web app that allows you to unleash your
              inner Kendrick Lamar by placing your own words. Let me figure out the formulation. <br><br>
              What are you waiting for? Start by loging in in the top right!
            </p>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color:white;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a,p {
  color: #42b983;
}
</style>
