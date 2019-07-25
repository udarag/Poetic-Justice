<template>
<div id="app">
  <v-layout v-if="poems" row wrap align-content-center>
    <v-flex md4 class="rows" v-for="(poems, i) in poems" :key="i.name">
           <v-card height="100%">
             <v-card-title primary class="title">{{generateName(i)}}</v-card-title>
             <v-card-text>
              <span>{{generateUser(i)}}</span><br>
              <span>
                <span>{{generatePoem(i)}}</span>
              </span>
            </v-card-text>
          </v-card>
       </v-flex>
    <!-- <v-flex md4 class="rows">
      <v-card height="100%">
        <v-card-title primary class="title">Lorem</v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet risus eget massa porttitor scelerisque in vitae dolor. Pellentesque finibus fermentum nunc, vitae facilisis erat rutrum eu. Nam sollicitudin hendrerit vehicula. Ut eleifend ornare augue, ac vehicula ligula aliquet vitae. Cras imperdiet quam ligula, non pharetra lacus aliquam sed. Nam eget ante sit amet diam sodales maximus vel et turpis. Sed dui tellus, pulvinar aliquam viverra nec, suscipit quis nulla. Praesent lacinia ut tortor at feugiat. Etiam tristique, diam eget viverra hendrerit, nibh quam commodo mi, a mollis dolor lacus vitae nunc. Quisque maximus posuere scelerisque. Duis pretium nunc a sem efficitur ultrices. Mauris lacinia metus ac urna consequat fermentum.</v-card-text>
      </v-card>
    </v-flex>
    <v-flex md4 class="rows">
      <v-card height="100%">
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</v-card-text>
      </v-card>
    </v-flex>
    <v-flex md4 class="rows">
      <v-card height="100%">
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet risus eget massa porttitor scelerisque in vitae dolor. Pellentesque finibus fermentum nunc, vitae facilisis erat rutrum eu.</v-card-text>
      </v-card>
    </v-flex>
    <v-flex md4 class="rows">
      <v-card height="100%">
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet risus eget massa porttitor scelerisque in vitae dolor. Pellentesque finibus fermentum nunc, vitae facilisis erat rutrum eu. Nam sollicitudin hendrerit vehicula. Ut eleifend ornare augue, ac vehicula ligula aliquet vitae. Cras imperdiet quam ligula, non pharetra lacus aliquam sed. Nam eget ante sit amet diam sodales maximus vel et turpis. Sed dui tellus, pulvinar aliquam viverra nec, suscipit quis nulla. Praesent lacinia ut tortor at feugiat. Etiam tristique, diam eget viverra hendrerit, nibh quam commodo mi, a mollis dolor lacus vitae nunc. Quisque maximus posuere scelerisque. Duis pretium nunc a sem efficitur ultrices. Mauris lacinia metus ac urna consequat fermentum.</v-card-text>
      </v-card>
    </v-flex>
    <v-flex md4 class="rows">
      <v-card height="100%">
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</v-card-text>
      </v-card>
    </v-flex> -->
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
      var poem = this.poems[index].preposition1 + ' ' + this.poems[index].adverb1 + ' ' + this.poems[index].verb1 + ' ' + this.poems[index].adjective1 + ' ' + this.poems[index].noun1
      return poem
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
</style>
