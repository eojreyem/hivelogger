<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Hive Logger</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-button @click="addApiary">Add Apiary</ion-button>
      <ion-list>
        <ion-item v-for="apiary in apiaries" :key="apiary.id">
          {{ apiary.name }}
        </ion-item>
      </ion-list>
    </ion-content>


    <ion-button router-link="/apiary/1">Apiary-1</ion-button>
    <ion-button router-link="/apiary/new">New Apiary</ion-button>
  </ion-page>
</template>

<script lang="ts">
import { SqliteService } from '@/services/sqliteService';
import { IonButton, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';

export default {
  data() {
    return {
      apiaries: []
    };
  },
  async mounted() {
    this.sqliteService = new SqliteService();
    await this.sqliteService.initDB();
    this.apiaries = await this.sqliteService.getApiaries();
  },
  methods: {
    async addApiary() {
      await this.sqliteService.addApiary('Market10');
      this.apiaries = await this.sqliteService.getApiaries();
    }
  }
};
</script>
