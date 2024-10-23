<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Hive Logger</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item v-for="apiary in apiaries" :key="apiary.id">
          <ion-button :router-link="`/apiary/${apiary.id}`">{{ apiary.name }}</ion-button>
        </ion-item>
      </ion-list>
      <ion-button router-link="/apiary/new">New Apiary</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButton, IonPage, IonItem, IonList, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
import { SqliteService } from '@/services/sqlite_service';

export default defineComponent({
  components: { IonButton, IonPage, IonItem, IonList, IonContent, IonHeader, IonToolbar, IonTitle },
  data() {
    return {
      apiaries: [],
    };
  },  
  async mounted() {
    this.sqlite_service = new SqliteService();
    await this.sqlite_service.initDB();
    this.apiaries = await this.sqlite_service.getApiaries();
  },
});
</script>
