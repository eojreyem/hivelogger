<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ apiary.name }}</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content>
      <ion-list>
        <ion-item v-for="hive in hives" :key="hive.id">
          <ion-button expand="block" :router-link="`/apiary/${apiary.id}/hive/${hive.id}`">
            Hive {{ hive.number }}
          </ion-button>
        </ion-item>
      </ion-list>
      <ion-item>
        <ion-label>Apiary ID: {{ apiary.id }}</ion-label>
      </ion-item>
      <ion-button expand="block" :router-link="`/apiary/${apiary.id}/hive/new`">New Hive</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { SqliteService } from '@/services/sqlite_service';

export default defineComponent({
  components: { 
    IonButton, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar 
  },
  setup() {
    const route = useRoute();
    const apiaryId = ref(Number(route.params.id));
    const hives = ref([]);
    const apiary = ref({});
    const sqlite_service = new SqliteService();

    onMounted(async () => {
      await sqlite_service.initDB();
      hives.value = await sqlite_service.getHivesInApiaryById(apiaryId.value);
      // Fetch apiary details
      apiary.value = await sqlite_service.getApiaryById(apiaryId.value);
    });

    return { hives, apiary, apiaryId };
  },
});
</script>
