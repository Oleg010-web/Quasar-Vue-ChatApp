<template>
  <q-banner v-if="!otherUserDetails.online" class="banner text-white bg-grey-5 text-center">
    {{ otherUserDetails.name }} is offline.
  </q-banner>
  <q-page ref="pageChat" class="page-chat flex" column>
    <div 
    :class="{ invisible : !showMessages }"
    class="message q-pa-md column col justify-end">
      <q-chat-message
        v-for="(message, key) in messages"
        :key="key"
        :name="message.from == 'me' ? userDetails.name : otherUserDetails.name"
        :text="[message.text]"
        :sent="message.from == 'me' ? true : false"
        :bg-color="message.from == 'me' ? 'light-grey-3' : 'light-green-2'"
        
      />
    </div>
    <q-footer elevated>
      <q-toolbar >
        <q-form @submit="sendMessage" class="full-width" >
          <q-input
            ref="newMessasge"
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

<style>
  .page-chat{
    
    content: '';
    background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='40' height='40' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(135)'%3E%3Crect width='100%25' height='100%25' fill='%232a4365'/%3E%3Cpath d='M0 29a 9-9 0 0 0 9-9a 11-11 0 0 1 11-11v2a-9 9 0 0 0-9 9a-11 11 0 0 1-11 11zM0 69a 9-9 0 0 0 9-9a 11-11 0 0 1 11-11v2a-9 9 0 0 0-9 9a-11 11 0 0 1-11 11z' fill='%231a202c'/%3E%3Cpath d='M20 29.5a 9.5-9.5 0 0 0 9.5-9.5a 10.5-10.5 0 0 1 10.5-10.5v1a-9.5 9.5 0 0 0-9.5 9.5a-10.5 10.5 0 0 1-10.5 10.5z' fill='%23ecc94b'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ");

/* source: https://doodad.dev/pattern-generator */
  }
  .message{
    font-weight: 600;
    
  }
  .banner{
    position: fixed;
    width: 100%;
    top: 50px;
    z-index: 2;
    opacity: 0.8;
  }
</style>
