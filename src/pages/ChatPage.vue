<template>
  <q-page class="flex">
    <q-footer elevated>
        <q-toolbar>
          <q-input 
            bg-color="white" 
            class="full-width"
            outlined 
            rounded 
            v-model="newMessge" 
            label="Message" 
            dense>
            <template v-slot:after>
              <q-btn 
                round
                color="white" 
                dense 
                flat 
                icon="send" />
            </template>
          </q-input>
        </q-toolbar>
      </q-footer>
  </q-page>
</template>

<script setup>



</script>

<style>
</style>