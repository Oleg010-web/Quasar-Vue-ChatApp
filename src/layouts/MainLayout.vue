<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn 
          v-if="$route.fullPath.includes('/chat')"
          to="/"
          icon="arrow_back" 
          flat
          dense
          label="Back" />
        <q-toolbar-title class="absolute-center">
          {{title}}
        </q-toolbar-title>

        <q-btn 
          v-if="!userDetails.userId"
          to="/auth"
          class="absolute-right q-pr-md"
          icon="account_cirlce" 
          no-caps
          flat
          dense
          label="login" />
        <q-btn 
          v-else
          @click="logOutUser"
          class="absolute-right q-pr-md"
          icon="account_cirlce" 
          no-caps
          flat
          dense>
          Logout <br>
          {{ userDetails.name }}
          </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

// imports
import { defineComponent, ref, computed } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { openURL } from 'quasar'
import { mapState, mapActions } from 'vuex'

export default {

  // computed
  computed: {
    ...mapState('state', ['userDetails']),
    title () {
      const currentPath = this.$route.fullPath;
      if (currentPath == '/') return 'SmackChat'
      else if (currentPath == '/chat') return 'Chat'
      else if (currentPath == '/auth') return 'Login'
      return ''
  }
  },
  // methods
  methods: {
      openURL,
    ...mapActions('state', ['logOutUser'])
  }
}
</script>

<style>
    .q-btn {
      line-height: 1.2
    }
</style>