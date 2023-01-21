<template>
  <q-page class="flex q-pa-md">
    <q-list 
    class="full-width"
    separator=""
    >
      <q-item v-for="user in users" :key="user.id" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ user.name.charAt(0)}}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="chat_bubble" color="green" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>

export default {
  setup () {
    return {
        users : [ {
          id: 1,
          name: 'Ruddy Jedrzej',
        }, {
          id: 2,
          name: 'Mallorie Alessandrini',
        }, {
          id: 3,
          name: 'Elisabetta Wicklen',
        }, {
          id: 4,
          name: 'Seka Fawdrey',
        } ]
      }
    }
  }
</script>

<style>
</style>