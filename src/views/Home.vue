<template>
  <ion-page>
    <h1>Hive Logger</h1>
    <ion-button router-link="/apiary/1">Apiary-1</ion-button>
    <ion-button router-link="/apiary/new">New Apiary</ion-button>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: { IonButton },
  });
</script>
