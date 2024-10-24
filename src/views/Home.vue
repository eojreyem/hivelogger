<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Hive Logger</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list style="background-color: lightgrey;">
        <ion-card v-for="apiary in apiaries" :key="apiary.id">
          <ion-card-header>
            <ion-card-title>{{ apiary.name }}</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-button :router-link="`/apiary/${apiary.id}`">Hives</ion-button>
          </ion-card-content>
        </ion-card>
      </ion-list>
      <ion-button router-link="/apiary/new">New Apiary</ion-button>
      <ion-button 
        color="danger" 
        @click="deleteTables" 
        size="small" 
        class="delete-tables-button"
      >
        Delete All Tables
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButton, IonPage, IonItem, IonList, IonContent, IonHeader, IonToolbar, IonTitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';
import { SqliteService } from '@/services/sqlite_service';

export default defineComponent({
  components: { IonButton, IonPage, IonItem, IonList, IonContent, IonHeader, IonToolbar, IonTitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent },
  data() {
    return {
      apiaries: [],
      sqlite_service: null as SqliteService | null,
    };
  },  
  async mounted() {
    this.sqlite_service = new SqliteService();
    await this.sqlite_service.initDB();
    this.apiaries = await this.sqlite_service.getApiaries();
  },
  methods: {
    async deleteTables() {
      if (this.sqlite_service) {
        await this.sqlite_service.deleteAllTables();
        // Refresh the apiaries list after deleting tables
        this.apiaries = await this.sqlite_service.getApiaries();
      }
    },
  },
});
</script>

<style scoped>
.delete-tables-button {
  position: fixed;
  left: 10px;
  bottom: 10px;
  font-size: 0.8em;
}
</style>
