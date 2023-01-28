<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import store from './store/index';

export default defineComponent({
  name: 'App',
  store: store
})
</script>
