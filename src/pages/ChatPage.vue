<template>
  <q-page class="flex" column>
    <q-banner class="text-white bg-grey-5 text-center"> {{otherUserDetails.name}} is offline. </q-banner>
    <div class="q-pa-md column col justify-end">
      <q-chat-message
        v-for="message in messages"
        :key="message.text"
        :name="message.from == 'me' ? userDetails.name : otherUserDetails.name"
        :text="[message.text]"
        :sent="message.from == 'me' ? true : false"
      />
    </div>
    <q-footer elevated>
      <q-toolbar>
        <q-form @submit="sendMessage" class="full-width">
          <q-input
            bg-color="white"
            outlined
            rounded
            v-model="newMessage"
            label="Message"
            dense
          >
            <template v-slot:after>
              <q-btn @click="sendMessage" round color="white" dense flat icon="send" />
            </template>
          </q-input>
        </q-form>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
// imports
import { mapState ,mapActions } from 'vuex';
import mixinOtherUserFetails from 'src/mixins/mixin-other-user-details'

export default {
  mixins: [mixinOtherUserFetails],
  data() {
    return {
      newMessage: "",
    };
  },
  // computed
  computed: {
    ...mapState('state', ['messages', 'userDetails'])
    // otherUserDetails() {
    //   return this.$store.state.state.users[this.$route.params.otherUserId]
      
    // }
  },
  // methods
  methods: {
    ...mapActions('state', ['firebaseGetMessages', 'firebaseStopGettingMessages']),
    sendMessage() {
      this.messages.push({
        text: this.newMessage,
        from: "me",
      });
      this.newMessage = "";
    },
  },
  // lifecycle hooks
  mounted() {
    this.firebaseGetMessages(this.$route.params.otherUserId)
  },
  unmounted() {
    this.firebaseStopGettingMessages()
  },
};
</script>

<style></style>
