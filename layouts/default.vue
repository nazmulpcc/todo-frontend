<template>
  <v-app>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="primary"
      class="accent--text"
    >
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        color="accent"
        @click="logout"
      >
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Dashboard',
          to: '/'
        },
        {
          icon: 'mdi-pen',
          title: 'Forms',
          to: '/forms'
        },
        {
          icon: 'mdi-grid',
          title: 'Tables',
          to: '/tables'
        },
        {
          icon: 'mdi-reload',
          title: 'Loading',
          to: '/loading'
        },
        {
          icon: 'mdi-step-forward',
          title: 'Stepper',
          to: '/stepper'
        }
      ],
      title: 'Todo'
    }
  },
  computed: {
    loggedIn(){
      return this.$auth.loggedIn
    }
  },
  methods: {
    logout(){
      this.$auth.logout().then(() => {
        this.$router.push('/auth/login')
      })
    }
  }
}
</script>
