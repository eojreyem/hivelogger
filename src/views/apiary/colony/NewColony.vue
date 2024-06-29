<template>
    <ion-page>
        <h1>New Colony for Apiary {{ apiary }}</h1>
        <ion-button :href="`/apiary/${apiary}/colony/1`">Create Colony</ion-button>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonButton, IonPage } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { useRoute } from 'vue-router';

  export default defineComponent({
      components: { IonButton },
      setup() {
        const route = useRoute();
        const { apiary } = route.params;
        return { apiary };
      },
    });
  </script>
  