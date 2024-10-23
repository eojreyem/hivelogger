<template>
    <h1>Colony 1</h1>
    <ion-page>
      <ion-button href="/apiary/1/colony/1/visit/1">Visit-1</ion-button>
      <ion-button href="/apiary/1/colony/1/visit/new">New Visit</ion-button>
      <ion-button href="/apiary/1/colony/1/queen/1">Queen-1</ion-button>
      <ion-button href="/apiary/1/colony/1/queen/new">New Queen</ion-button>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonButton, IonPage } from '@ionic/vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
      components: { IonButton },
    });
  </script>
  