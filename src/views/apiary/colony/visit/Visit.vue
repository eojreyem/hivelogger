<template>
    <ion-page>
        <h1>Visit</h1>
        <ion-button :href="`/apiary/${apiary}/colony/${colony}`">Colony-{{ colony }}</ion-button>
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
        const { apiary, colony } = route.params;
        return { apiary, colony };
      },
    });
  </script>
  