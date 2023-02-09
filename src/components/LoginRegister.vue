<template>
  <q-form @submit="submitForm">
    <q-input
      v-if="tab == 'register'"
      outlined
      v-model="formData.name"
      label="Name"
      class="q-mb-md"
      :disable="getPreloadStatus"
    />
    <q-input
      outlined
      type="email"
      v-model="formData.email"
      label="Email"
      class="q-mb-md"
      :disable="getPreloadStatus"
    />
    <q-input
      outlined
      type="password"
      v-model="formData.password"
      label="Password"
      class="q-mb-md"
      :disable="getPreloadStatus"
    />
    <div class="row">
      <q-space />
      <q-btn @click="submitForm" color="primary" :label="tab" v-if="!getPreloadStatus" />
    </div>
  </q-form>
</template>

<script>
//imports
import { mapActions, mapGetters } from "vuex";
import { getPreloadStatus } from "src/store/store/getters";

export default {
  props: ["tab", "loadingStatus"],
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  // computed

  computed: {
    ...mapGetters("state", ["getPreloadStatus"]),
  },
  // methods
  methods: {
    ...mapActions("state", ["registerUser", "loginUser"]),
    submitForm() {
      if (this.tab == "login") {
        this.loginUser(this.formData);
      } else {
        this.registerUser(this.formData);
      }
    },
  },
};
</script>
