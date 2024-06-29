<template>
  <ion-page>
    <h1>Hello from Home</h1>
    <ion-button router-link="/apiary/1">Apiary-1</ion-button>
    <ion-button router-link="/apiary/1/new">New Apiary</ion-button>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: { IonButton },
  });
</script>
