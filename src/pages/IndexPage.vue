<template>
  <q-page class="flex q-pa-md">
    <q-list class="index-page-list" separator="">
      <q-item
        v-for="(user, key) in users"
        :key="key"
        :to="'/chat/' + key"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-avatar color="primary" class="index-page-list__avatar-item">
            {{ user.name.charAt(0) }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-badge :color="user.online ? 'light-green-5' : 'grey-4'">
            {{ user.online ? "Online" : "Offline" }}
          </q-badge>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
// Imports
import { mapGetters } from "vuex";

export default {
  setup() {},
  // Computed
  computed: {
    ...mapGetters("state", ["users"]),
  },
};
</script>

<style scoped lang="scss">
.index-page-list {
  width: 100%;

  &__avatar-item {
    color: white;
  }
}
</style>
