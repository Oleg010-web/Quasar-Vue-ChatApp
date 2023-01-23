<template>
  <q-page class="flex" column>
    <q-banner  class="text-white bg-grey-5 text-center">
      User is offline.
    </q-banner>
    <div class="q-pa-md column col justify-end">
      <q-chat-message
        v-for="message in messages"
        :key="message.text"
        :name="message.from"
        :text="[message.text]"
        :sent="message.from == 'me' ? true : false"
      />
    </div>
    <q-footer elevated>
        <q-toolbar>
          <q-form  @submit="sendMessage"
          class="full-width">
            <q-input 
              bg-color="white" 
              outlined 
              rounded 
              v-model="newMessage" 
              label="Message" 
              dense>
              <template v-slot:after>
                <q-btn 
                  @click="sendMessage"
                  round
                  color="white" 
                  dense 
                  flat 
                  icon="send" />
              </template>
            </q-input>
          </q-form>
        </q-toolbar>
      </q-footer>
  </q-page>
</template>

<script>
 export default {
  data() {
    return {
      newMessage: '',
      messages: [
        {
          text: 'Hi, my friend, how are you today?',
          from: 'me'
        }, {
          text: 'I was on vacation last week, had a good time)',
          from: 'me'
        },
        {
          text: 'Wow, that is really interestig, glad for you, where have you been?',
          from: 'them'
        },
        {
          text: 'Was in Thailand) I need to tell you so many things, lets meet and i will tell you everything. I think it will be better then to chat here',
          from: 'me'
        },{
          text: 'Cool) Yeah, i agree.',
          from: 'them'
        }
      ]
    }
  },

  // methods

  methods: {
    sendMessage() {
      this.messages.push({
        text: this.newMessage,
        from: 'me'
      })
      this.newMessage = ''
    }
  },
 }


</script>

<style>
</style>