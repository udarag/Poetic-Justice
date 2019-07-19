<template>
  <v-app id="register" :dark="true">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Poetic Justice</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="alternate_email" name="login" label="Email" type="email" v-model="email"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
                <v-card-title>
                    <div class="error" v-html="error"/>
                </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="register" color="primary">Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<!--<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" placeholder="email" v-model="email"/>
    <br>
    <input type="password" name="password" placeholder="password" v-model="password"/>
    <br>
    <div class="error" v-html="error"/>
    <br>
    <button @click="register">Register</button>
  </div>
</template> -->

<script>
import auth from '@/services/auth'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await auth.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
