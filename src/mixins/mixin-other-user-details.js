export default {
    computed: {
        otherUserDetails() {
            return this.$store.state.state.users[this.$route.params.otherUserId]
            
          }
    }
}