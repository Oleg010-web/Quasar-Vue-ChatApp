<template>
  <q-page class="flex q-pa-md">
    <q-card class="auth-page-card">
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

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <login-register :tab="tab" />
        </q-tab-panel>

        <q-tab-panel name="register">
          <login-register :tab="tab" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
// imports
import { ref } from "vue";
import LoginRegister from "components/LoginRegister.vue";

// data
export default {
  setup() {
    return {
      tab: ref("login"),
    };
  },
  // components
  components: {
    LoginRegister,
  },
};
</script>

<style>
  .auth-page-card{
    width: 100%;
  }

  .auth-page-card__tab-item{
    color: grey;
  }

</style>
