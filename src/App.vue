<template>
  <router-view />
</template>

<script>
// imports
import { defineComponent } from 'vue'
import store from './store/index';
import { mapActions } from 'vuex';

export default defineComponent({
  // name: 'App',
  // store: store
  // methods
  methods: {
    ...mapActions('state', ['handleAuthStateChanged'])
  },
  // hooks
  mounted(){
    this.handleAuthStateChanged()
  }
})
</script>
