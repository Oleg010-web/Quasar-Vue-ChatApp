<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header">
      <q-toolbar class="header__toolbar">
        <q-btn
          v-if="$route.fullPath.includes('/chat')"
          to="/"
          icon="arrow_back"
          flat
          dense
          label=""
        />
        <q-toolbar-title class="absolute-center">
          {{ title }}
        </q-toolbar-title>

        <q-btn
          v-if="!userDetails.userId"
          to="/auth"
          class="absolute-right q-pr-md"
          icon="account_cirlce"
          no-caps
          flat
          dense
          label=""
        />
        <q-btn
          v-else
          @click="logOutUser"
          class="absolute-right q-pr-sm"
          no-caps
          flat
          dense
        >
          <q-icon
            class="icon"
            name="img:https://www.clipartmax.com/png/full/48-489671_email-and-social-login-system-login-icon-for-android.png"
          />
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
import { defineComponent, ref, computed } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { openURL } from "quasar";
import { mapState, mapActions } from "vuex";
import mixinOtherUserFetails from "src/mixins/mixin-other-user-details";

export default {
  mixins: [mixinOtherUserFetails],
  // computed
  computed: {
    ...mapState("state", ["userDetails"]),
    title() {
      const currentPath = this.$route.fullPath;
      if (currentPath == "/") return "SmackChat";
      else if (currentPath.includes("/chat")) return this.otherUserDetails.name;
      else if (currentPath == "/auth") return "Authorization";
      return "";
    },
  },
  // methods
  methods: {
    openURL,
    ...mapActions("state", ["logOutUser"]),
  },
};
</script>

<style scoped lang="scss">
.header {
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;

  &__toolbar {
    max-width: 1200px;
  }
}
.q-btn {
  line-height: 1.2;
}
.icon {
  width: 45px;
  height: 45px;
}
</style>
