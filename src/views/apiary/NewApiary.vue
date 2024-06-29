<template>
    <h1>New Apiary</h1>
    <ion-page>
      <ion-button href="/apiary/1">Apiary-1</ion-button>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonButton, IonPage } from '@ionic/vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
      components: { IonButton },
    });
  </script>
  