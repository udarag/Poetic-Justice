<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'This field is required']"
            label="Name your poem"
            placeholder="Poetic Justice"
            required
          ></v-text-field>
            <v-layout wrap>
              <v-flex xs12 md4>
                <v-text-field
                  label="Enter 3 Nouns"
                  placeholder="Noun"
                  outlined = "true"
                  v-model="noun1"
                  :counter="10"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field
                  v-model="noun2"
                  :counter="10"
                  label="Noun"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field
                  v-model="noun3"
                  :counter="10"
                  label="Noun"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout wrap>
              <v-flex xs12 md4>
                <v-text-field
                  label="Enter 3 Adjectives"
                  placeholder="Adjective"
                  outlined = "true"
                  v-model="adjective1"
                  :counter="10"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field
                  v-model="adjective2"
                  :counter="10"
                  label="Adjective"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field
                  v-model="adjective3"
                  :counter="10"
                  label="Adjective"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout wrap>
              <v-flex xs12 md4>
                <v-text-field
                  label="Enter 3 Adverbs"
                  placeholder="Adverb"
                  outlined = "true"
                  v-model="adverb1"
                  :counter="10"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field
                  v-model="adverb2"
                  :counter="10"
                  label="Adverb"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field
                  v-model="adverb3"
                  :counter="10"
                  label="Adverb"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
             <v-layout wrap>
              <v-flex xs12 md4>
                <v-text-field
                  label="Enter 3 Prepositions"
                  placeholder="Preposition"
                  outlined = "true"
                  v-model="preposition1"
                  :counter="10"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field
                  v-model="preposition2"
                  :counter="10"
                  label="Preposition"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field
                  v-model="preposition3"
                  :counter="10"
                  label="Preposition"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
             <v-layout wrap>
              <v-flex xs12 md4>
                <v-text-field
                  label="Enter 3 Verb"
                  placeholder="Verb"
                  outlined = "true"
                  v-model="verb1"
                  :counter="10"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field
                  v-model="verb2"
                  :counter="10"
                  label="Verb"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field
                  v-model="verb3"
                  :counter="10"
                  label="Verb"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="submit">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
import auth from '@/services/auth'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Create your poem',
      name: '',
      noun1: '',
      noun2: '',
      noun3: '',
      adjective1: '',
      adjective2: '',
      adjective3: '',
      adverb1: '',
      adverb2: '',
      adverb3: '',
      preposition1: '',
      preposition2: '',
      preposition3: '',
      verb1: '',
      verb2: '',
      verb3: ''
    }
  },
  methods: {
    async submit () {
      try {
        const response = await auth.poem({
          name: this.name,
          email: this.$store.state.user.email,
          noun1: this.noun1,
          noun2: this.noun2,
          noun3: this.noun3,
          adjective1: this.adjective1,
          adjective2: this.adjective2,
          adjective3: this.adjective3,
          adverb1: this.adverb1,
          adverb2: this.adverb2,
          adverb3: this.adverb3,
          preposition1: this.preposition1,
          preposition2: this.preposition2,
          preposition3: this.preposition3,
          verb1: this.verb1,
          verb2: this.verb2,
          verb3: this.verb3
        })
        console.log(response)
        this.$router.push({
          name: 'browse'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: white;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: white;
}
</style>
