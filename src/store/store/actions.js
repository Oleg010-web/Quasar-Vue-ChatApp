import { firebaseAuth, firebaseDb, ref, set, signInWithEmailAndPassword} from "src/boot/firebase";
import { createUserWithEmailAndPassword } from "src/boot/firebase";
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