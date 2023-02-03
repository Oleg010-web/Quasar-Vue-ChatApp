export default {
  computed: {
    otherUserDetails () {
      if (this.$store.state.state.users[this.$route.params.otherUserId]) {
        return this.$store.state.state.users[this.$route.params.otherUserId]
      }
      return {}
    }
  }
}
