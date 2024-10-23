<template>
    <ion-page>
        <h1>New Visit</h1>
        <ion-button href="/apiary/1/colony/1">Colony-1</ion-button>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonButton, IonPage } from '@ionic/vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
      components: { IonButton },
    });
  </script>
  