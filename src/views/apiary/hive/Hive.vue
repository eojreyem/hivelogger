<template>
  <ion-page>
    <ion-header>
      <ion-button fill="outline">Hive {{ hiveNumber }}</ion-button>
      <ion-button class="queen-button" fill="outline">Queen</ion-button>        
    </ion-header>

    <ion-content>
      <ion-button @click="goToNewQueen">New Queen</ion-button>
      <ion-button @click="goToNewVisit">New Visit</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonPage, IonHeader, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    components: { IonButton, IonPage, IonHeader, IonContent },
    setup() {
        const router = useRouter();

        return {
            hiveNumber: 1, // Set the hive number here
            apiary: { id: '1' }, // Replace with actual apiary data
            hive: { id: '1' }, // Replace with actual hive data
            goToNewQueen() {
                router.push(`/apiary/${this.apiary.id}/hive/${this.hive.id}/queen/new`);
            },
            goToNewVisit() {
                router.push(`/apiary/${this.apiary.id}/hive/${this.hive.id}/visit/new`);
            }
        };
    }
});
</script>
