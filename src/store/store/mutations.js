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

export function updateUser(state, payload) {
    Object.assign(state.users[payload.userId], payload.userDetails)
}

export function addMessage(state, payload) {
    set(state.messages, payload.messageId, payload.messageDetails)
}

export function clearMessages(state) {
    state.messages = {}
}

export function preloadStatus(state, payload) {
    if (payload.loadingStatus == true) {
        state.loadingStatus = payload.loadingStatus
        console.log(state.loadingStatus);
    }else if (payload.loadingStatus == false) {
        state.loadingStatus = payload.loadingStatus
        console.log(state.loadingStatus);
    }
    
}