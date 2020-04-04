<template>
  <v-col xs=12 md=4>
    <v-card class="pa-3 " >
      <v-row>
        <v-col xs=12>
          <v-btn small fab icon mr-0 nuxt to="/">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>Back
        </v-col>
      </v-row>
      <v-card-text>
        <h1 class="display-1 mb-3">Login</h1>
        <v-form @submit.prevent="login">
          <v-text-field v-model="email" label="Email" required outlined rounded/>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            :type="showPassword ? 'text' : 'password'"
            hint="At least 8 characters"
            label="Password"
            required
            outlined
            rounded
          />
          <v-row ma-2 wrap>
            <v-col>
              <nuxt-link to="/auth/register">Don't have an account?</nuxt-link>
            </v-col>
          </v-row>

          <v-row>
            <v-col xs=12>
              <v-btn type="submit" large block color="primary" :loading="loading" rounded>Login</v-btn>
            </v-col>
          </v-row>
        </v-form>

        <v-row align-center>
          <v-col cols=8 offset=4 v-show="false">
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
  import Swal from 'sweetalert2'
  export default {
    layout: 'auth',
    auth: 'guest',
    data () {
      return {
        loading: false,
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
      login () {
        if(this.email == '' || this.password == ''){
          this.$toast.failed('Please fill up your credentials')
          return;
        }
        this.loading = true;
        this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        }).then(response => {
          this.$toast.success('Login Successful!')
          this.$router.push('/')
        }).catch((err, res) => {
          this.$toast.failed("Wrong Password of Email")
        }).finally(() => {
          this.loading = false
          console.log(this.$auth.loggedIn)
          console.log(this.$auth.user)
        })
      }
    }
  }
</script>
