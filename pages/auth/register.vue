<template>
  <v-col xs=12 md=4>
    <v-card class="pa-3 " >
      <v-card-text>
        <h1 class="display-1 mb-3">Register</h1>
        <v-text-field
          v-model="name"
          :rules="required"
          label="Name"
          :error-messages="errors.name"
          required
          outlined
          rounded
        />
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Email"
          :error-messages="errors.email"
          required
          outlined
          rounded
        />
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          :type="showPassword ? 'text' : 'password'"
          hint="At least 8 characters"
          label="Password"
          required
          :error-messages="errors.password"
          outlined
          rounded
        />

        <v-row ma-2 wrap>
          <v-col>
            <nuxt-link to="/auth/login">Already have an account?</nuxt-link>
          </v-col>
        </v-row>

        <v-row>
          <v-col xs=12>
            <v-btn  large block color="primary" @click="register" :loading="loading" rounded>Register</v-btn>
          </v-col>
        </v-row>

        <v-row align-center v-show="false">
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
        loading: false,
        errors: {},
        email: '',
        name: '',
        username: '',
        required: [
          v => !!v || 'This field is required'
        ],
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
      register () {
        this.loading = true;
        let {name, email, username, password} = this
        this.$axios.
        $post('/register', {name, email, username, password})
          .then(response => {
            this.$toast.success('You have been registered! Please login now')
            this.$router.replace('/auth/login')
          }).catch(err => {
          this.$toast.failed('Sorry! We could not create your account!')
          this.errors = err.response.data.errors
        }).finally(() => {
          this.loading = false
        })
      }
    }
  }
</script>
