<template>
  <q-page class="flex ">
    <q-card class="auth-page-card" >
      <q-tabs
        v-model="tab"
        dense
        class="auth-page-card__tab-item"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="login" label="Login" />
        <q-tab name="register" label="Register" />
      </q-tabs>

      <q-separator />
      
      <q-tab-panels v-model="tab" animated class="auth-page-card__tab-panel">
        <q-tab-panel name="login">
          <login-register :tab="tab" />
        </q-tab-panel>

        <q-tab-panel name="register">
          <login-register :tab="tab" />
        </q-tab-panel>
      </q-tab-panels>
      <pre-loader  v-if="getPreloadStatus" class="auth-page-card__preloader"/>
    </q-card>
  </q-page>
</template>

<script>
// imports
import { ref } from "vue";
import LoginRegister from "components/LoginRegister.vue";
import PreLoader from "src/components/PreLoader.vue";
import { mapGetters } from "vuex";
import { getPreloadStatus } from "src/store/store/getters";

// data
export default {
  setup() {
    return {
      tab: ref("login"),
      loadingStatus: getPreloadStatus
    };
  },
  // components
  components: {
    LoginRegister,
    PreLoader
  },

  // Computed

  computed: {
    ...mapGetters("state", ["getPreloadStatus"]),
  }
};
</script>

<style scoped lang="scss">
.auth-page-card {
  width: 1200px;
  margin: 0 auto;
  background-color: $secondary;
  box-sizing: border-box;

  &__tab-item {
    color: $light;
  }

  &__preloader {
    margin: 0 auto;
    width: 100px;
  }

  &__tab-panel {
    padding: 0;
    background-color: $primary;
  }
}
</style>
