<template>
  <v-app>
    <v-navigation-drawer
      :clipped="true"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
      >
        <v-icon>mdi-account</v-icon>
      </v-btn>
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
    <v-footer
      :fixed="false"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
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
      title: 'UI Basic'
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
