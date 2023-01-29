import { DataSnapshot } from "firebase/database";
import { firebaseAuth, firebaseDb, ref, set, signInWithEmailAndPassword, onAuthStateChanged, get} from "src/boot/firebase";
import { createUserWithEmailAndPassword } from "src/boot/firebase";
import { setUserDetails } from "./mutations";
/*
export function someAction (context) {
}
*/

export function registerUser({}, payload) {
    console.log(payload);
    createUserWithEmailAndPassword(firebaseAuth, payload.email, payload.password)
    .then(Response => {
        console.log(Response);
        let userId = firebaseAuth.currentUser.uid
        console.log(userId);
        set(ref(firebaseDb, 'users/' + userId), {
            name: payload.name,
            email: payload.email,
            online: true
          })
    })
    .catch(Error => {
        console.log(Error.message);
    })
} 
export function loginUser({}, payload){
    console.log(payload);
    signInWithEmailAndPassword(firebaseAuth, payload.email, payload.password)
    .then(Response => {
        console.log(Response);
    })
    .catch(Error => {
        console.log(Error.message);
    })
}
export function handleAuthStateChanged({commit}){
    firebaseAuth.onAuthStateChanged(user => {
        if (user) {
          // User is logged in.
          let userId = firebaseAuth.currentUser.uid;
          get(ref(firebaseDb, 'users/' + userId)).then( DataSnapshot => {
            console.log('snapshot: ', DataSnapshot);
            let userDetails = DataSnapshot.val()
            console.log('userDetails: ', userDetails);
            commit('setUserDetails', {
                name: userDetails.name,
                email: userDetails.email,
                userId: userId
            })
          })
        }
        else {
          // User is logged out  

        }
      });
}