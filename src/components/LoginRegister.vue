<template>
    <q-form @submit="submitForm">
        <q-input 
            v-if="tab == 'register'"
            outlined 
            v-model="formData.name" 
            label="Name" 
            class="q-mb-md"
        />
        <q-input 
            outlined 
            type="email"
            v-model="formData.email" 
            label="Email" 
            class="q-mb-md"
        />
        <q-input 
            outlined 
            type="password"
            v-model="formData.password" 
            label="Password" 
            class="q-mb-md"
        />
        <div class="row">
            <q-space />
            <q-btn 
            @click="submitForm"
            color="primary" 
            :label="tab" />
        </div>
    </q-form>
</template>

<script>
//imports
import { mapActions } from 'vuex'


   export default{
    props: ['tab'],
    data(){
        return {
            formData: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
   // methods
    methods: {
      ...mapActions('state', ['registerUser']),   
        submitForm(){
        if (this.tab == 'login') {
            console.log ('login the user')
        }
        else {
            this.registerUser()

        }
     }
    } 
}
</script>