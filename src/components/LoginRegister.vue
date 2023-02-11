<template>
  <q-form @submit="submitForm" class="formSubmit">
    <q-input
      v-if="tab == 'register'"
      outlined
      v-model="formData.name"
      label="Name"
      class="formSubmit__input q-mb-md"
      :disable="getPreloadStatus"
    />
    <q-input
      outlined
      type="email"
      v-model="formData.email"
      label="Email"
      class="formSubmit__input q-mb-md"
      :disable="getPreloadStatus"
    />
    <q-input
      outlined
      type="password"
      v-model="formData.password"
      label="Password"
      class="formSubmit__input q-mb-md"
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

<style scoped lang="scss">
 .formSubmit {
  max-width: 1200px;
  background-color: $primary;
  box-sizing: border-box;
  color: $light;
  margin-left: 0;
  margin-right: 0;

  &__input {
    border: 1 px solid $light;
    background-color: $light;
    color: $secondary;
  }
 }
</style>
