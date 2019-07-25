<template>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card fixed class="elevation-12">
              <v-toolbar dark color=#42b883>
                <v-toolbar-title>New User</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form name="register-new-user" autocomplete="off">
                  <v-text-field prepend-icon="alternate_email" name="login" label="New Email" type="email" v-model="email"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="New Password" type="password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
                <v-card-title>
                    <div class="error" v-html="error"/>
                </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="handler()" color=#42b883>Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
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
    async getWords () {
      try {
        const response = await auth.getPoems()
        this.$store.dispatch('setPoems', response)
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    async register () {
      try {
        const response = await auth.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'home'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    handler: function () {
      this.getWords()
      this.register()
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
