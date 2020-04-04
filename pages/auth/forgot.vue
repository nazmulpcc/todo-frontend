<template>
  <v-col xs=12 md=4>
    <v-card class="pa-3">
      <v-row>
        <v-col xs=12>
          <v-btn small fab icon mr-0 nuxt to="/">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>Back
        </v-col>
      </v-row>
      <v-card-text>
        <h1 class="display-1 mb-3">Reset Password</h1>
        <v-text-field v-model="email" :rules="emailRules" label="Email" required/>
        <v-row>
          <v-col>
            <nuxt-link to="/auth/register">Register</nuxt-link>
          </v-col>
          <v-col cols="auto">
            <nuxt-link to="/auth/login">Login</nuxt-link>
          </v-col>
        </v-row>

        <v-row>
          <v-col xs=12>
            <v-btn  large block color="primary" @click="reset">Register</v-btn>
          </v-col>
        </v-row>

        <v-row align-center>
          <v-col cols=8 offset=4>
            <v-btn small fab icon class="facebook-color">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn small fab icon class="google-color">
              <v-icon>mdi-google</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>


<script>
  export default {
    layout: 'auth',
    auth: 'guest',
    data () {
      return {
        remember: true,
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        password: '',
        passwordRules: [
          v => !!v || 'Password is required'
        ],
        showPassword: false
      }
    },
    methods: {
      reset () {
        //
      }
    }
  }
</script>
