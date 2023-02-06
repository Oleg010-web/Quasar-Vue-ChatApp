<template>
  <q-banner v-if="!otherUserDetails.online" class="text-white bg-grey-5 text-center">
    {{ otherUserDetails.name }} is offline.
  </q-banner>
  <q-page ref="pageChat" class="flex" column>
    <div 
    :class="{ invisible : !showMessages }"
    class="q-pa-md column col justify-end">
      <q-chat-message
        v-for="(message, key) in messages"
        :key="key"
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
import { mapState, mapActions } from "vuex";
import mixinOtherUserFetails from "src/mixins/mixin-other-user-details";
import { watch } from "vue";

export default {
  mixins: [mixinOtherUserFetails],
  data() {
    return {
      newMessage: "",
      showMessages: false
    };
  },
  // computed
  computed: {
    ...mapState("state", ["messages", "userDetails"])
  
  },
  // methods
  methods: {
    ...mapActions("state", ["firebaseGetMessages", "firebaseStopGettingMessages", "firebaseSendMessage"]),
    sendMessage() {
      this.firebaseSendMessage({
        message: {
          text: this.newMessage,
          from: "me",
        },
        otherUserId: this.$route.params.otherUserId
      }),
        
      this.newMessage = "";
    },
    scrollToBottom() {
      let pageChaT = this.$refs.pageChat.$el;
      setTimeout(() => {
        window.scrollTo(0, pageChaT.scrollHeight)
      }, 20);
    }
  },
  // watch
    watch: {
      messages: {
        handler: function(val) {
        if (Object.keys(val).length) {
          this.scrollToBottom()
          setTimeout(() => {
            this.showMessages = true
          }, 200);
        }
      },
      deep: true,
    }
  },
 

  // lifecycle hooks
  mounted() {
    this.firebaseGetMessages(this.$route.params.otherUserId);
  },
  unmounted() {
    this.firebaseStopGettingMessages();
  },
};
</script>

<style></style>
