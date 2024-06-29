<template>
    <h1>New Colony</h1>
    <ion-page>
      <ion-button href="/apiary/1/colony/1">Create Colony</ion-button>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonButton, IonPage } from '@ionic/vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
      components: { IonButton },
    });
  </script>
  