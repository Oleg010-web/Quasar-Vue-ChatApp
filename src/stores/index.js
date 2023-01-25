import { store } from 'quasar/wrappers'
import { createPinia } from 'pinia'
import Vuex from 'vuex'
import  state from './store'
import { Vue } from 'vue-demi'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* {ssrContext} */) {
    const Store = new Vuex.Store({
        modules: {
            state
        },

        strict: process.env.DEV
    })
  
    return Store
}
