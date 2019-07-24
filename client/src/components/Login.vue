<template>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card fixed class="elevation-12">
              <v-toolbar dark color=#ff1744>
                <v-toolbar-title>Welcome Back!</v-toolbar-title>
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
                <v-btn @click="navigateTo({name: 'register'})" color=#ff1744>Sign Up</v-btn>
                <v-btn @click="login" color=#ff1744>Log In</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

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
    async login () {
      try {
        const response = await auth.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.currUser)
        this.$router.push({
          name: 'home'
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

</style>
