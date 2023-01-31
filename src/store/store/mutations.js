import { set, Vue2 } from "vue-demi";
/*
export function someMutation (state) {
}
*/
export function setUserDetails (state, payload) {
    state.userDetails = payload
}

export function addUser (state, payload) {
    set(state.users, payload.userId, payload.userDetails)
    console.log('state: ', state.users);
}