import state from "./state";

/*
export function someGetter (state) {
}
*/

export function users(state) {
   let usersFiltered = {}
   Object.keys(state.users).forEach( key => {
      if (key !== state.userDetails.userId) {
         usersFiltered[key] = state.users[key]
      }
   })
   return usersFiltered
}