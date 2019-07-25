<template>
  <div class="hello" v-if= "$store.state.loggedIn">
    <h1>{{ msg }}</h1>
    <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <v-form ref="form" v-model="valid">
      <v-card>
        <v-card-text>
          <v-text-field
            ref="name"
            v-model="name"
            :rules="nameRules"
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
                  :rules="wordRules"
                  :counter="14"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field
                  v-model="noun2"
                  :rules="wordRules"
                  :counter="14"
                  label="Noun"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field
                  v-model="noun3"
                  :rules="wordRules"
                  :counter="14"
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
                  :rules="wordRules"
                  :counter="14"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field
                  v-model="adjective2"
                  :rules="wordRules"
                  :counter="14"
                  label="Adjective"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field
                  v-model="adjective3"
                  :rules="wordRules"
                  :counter="14"
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
                  :rules="wordRules"
                  :counter="14"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field
                  v-model="adverb2"
                  :rules="wordRules"
                  :counter="14"
                  label="Adverb"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field
                  v-model="adverb3"
                  :rules="wordRules"
                  :counter="14"
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
                  :rules="wordRules"
                  :counter="14"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field
                  v-model="preposition2"
                  :rules="wordRules"
                  :counter="14"
                  label="Preposition"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field
                  v-model="preposition3"
                  :rules="wordRules"
                  :counter="14"
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
                  :rules="wordRules"
                  :counter="14"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field
                  v-model="verb2"
                  :rules="wordRules"
                  :counter="14"
                  label="Verb"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field
                  v-model="verb3"
                  :rules="wordRules"
                  :counter="14"
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
      </v-form>
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
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 20 || 'Name must be less than 20 characters'
      ],
      wordRules: [
        v => !!v || 'Word is required',
        v => v.length <= 14 || 'Word must be less than 14 characters',
        (v) => /^[a-zA-Z]+$/.test(v) || 'Please enter a valid word'
      ],
      valid: false,
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
      if (this.$refs.form.validate()) {
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
  margin: 0 14px;
}
a {
  color: white;
}
</style>
