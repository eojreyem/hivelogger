<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :default-href="`/apiary/${apiaryId}`"></ion-back-button>
        </ion-buttons>
        <ion-title>Add New Hive</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item>
        <ion-label position="floating">Hive Number</ion-label>
        <ion-input v-model="newHiveNumber" type="number" placeholder="Enter hive number"></ion-input>
      </ion-item>
      <ion-button expand="block" @click="addHive" class="ion-margin-top">Create Hive</ion-button>
      <ion-item>
        <ion-label>Apiary ID: {{ apiaryId }}</ion-label>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonBackButton, IonButtons } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { SqliteService } from '@/services/sqlite_service';

export default defineComponent({
  components: { IonButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonBackButton, IonButtons },
  setup() {
    const router = useRouter();   
    const route = useRoute();
    const apiaryId = ref(Number(route.params.apiaryId));
    const newHiveNumber = ref('');

    const addHive = async () => {
      if (newHiveNumber.value.trim()) {
        try {
          const sqliteService = new SqliteService();
          await sqliteService.initDB();
          await sqliteService.addHive(Number(apiaryId.value), Number(newHiveNumber.value));
          
          console.log(`Hive number ${newHiveNumber.value} was successfully added to apiary ${apiaryId.value}`);
          newHiveNumber.value = '';
          // Redirect back to the apiary page
          router.push(`/apiary/${apiaryId.value}`);
        } catch (error) {
          console.error('Error adding hive:', error);
          // Optionally, you can show an error message to the user
        }
      }
    };

    return { apiaryId, newHiveNumber, addHive, router };
  },
});
</script>
