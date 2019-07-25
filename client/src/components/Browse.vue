<template>
<div id="app" v-if= "$store.state.loggedIn">
  <v-layout row wrap align-content-center>
    <v-flex md4 class="rows" v-for="(poems, i) in poems" :key="i.name">
           <v-card height="100%">
            <v-card-text>
             <p class="display-1 text--primary">
                {{generateName(i)}}
              </p>
             <!-- <v-card-title primary class="title">{{generateName(i)}}</v-card-title> -->
             <p>Poet: {{generateUser(i)}}</p>
             <div class="poem">
                {{generatePoem(i)}}<br>
                {{generatePoem2(i)}}<br>
                {{generatePoem3(i)}}
              </div>
            </v-card-text>
          </v-card>
       </v-flex>
  </v-layout>
</div>
</template>

<script>

export default {
  name: 'Browse',
  data () {
    return {
      loading: true,
      poems: ''
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async loadPoem () {
      this.poems = await this.$store.state.poems.data.poems
    },
    generateName (index) {
      var name = this.poems[index].name
      return name
    },
    generateUser (index) {
      var user = this.poems[index].email
      return user
    },
    generatePoem (index) {
      var poem1 = this.poems[index].preposition1 + ' ' + this.poems[index].adverb1 + ' ' + this.poems[index].verb1 + ' ' + this.poems[index].adjective1 + ' ' + this.poems[index].noun1
      return (poem1)
    },
    generatePoem2 (index) {
      var poem2 = this.poems[index].preposition2 + ' ' + this.poems[index].adverb2 + ' ' + this.poems[index].verb2 + ' ' + this.poems[index].adjective2 + ' ' + this.poems[index].noun2
      return (poem2)
    },
    generatePoem3 (index) {
      var poem3 = this.poems[index].preposition3 + ' ' + this.poems[index].adverb3 + ' ' + this.poems[index].verb3 + ' ' + this.poems[index].adjective3 + ' ' + this.poems[index].noun3
      return (poem3)
    }
  },
  watch: {
    scenariotype: {
      handler: function () {
        this.loadPoem()
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rows {
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 32px;
}
.loading {
  color:white;
}
.poem {
  font-style: italic;
}
p {
  font-weight: bold;
  font-size: 10px;
}
</style>
