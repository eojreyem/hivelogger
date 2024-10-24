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
          <ion-button expand="block" @click="goToHive(hive.id)">
            Hive {{ hive.number }}
          </ion-button>
        </ion-item>
      </ion-list>
      <ion-button expand="block" @click="goToNewHive">New Hive</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent, ref, onMounted, onActivated } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// Import the specific functions from apiary_service.js
import { SqliteService } from '@/services/sqlite_service';

export default defineComponent({
  components: { 
    IonButton, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar 
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const apiaryId = ref(Number(route.params.id));
    const hives = ref([]);
    const apiary = ref({});
    const sqliteService = new SqliteService();
    const fetchData = async () => {
      await sqliteService.initDB();
      hives.value = await sqliteService.apiaryService.getHivesInApiaryById(apiaryId.value);
      apiary.value = await sqliteService.apiaryService.getApiaryById(apiaryId.value);
    };

    onMounted(fetchData);
    onActivated(fetchData);

    // Navigation functions
    const goToHive = (hiveId: number) => {
      router.push(`/apiary/${apiaryId.value}/hive/${hiveId}`);
    };

    const goToNewHive = () => {
      router.push(`/apiary/${apiaryId.value}/hive/new`);
    };

    return { hives, apiary, apiaryId, goToHive, goToNewHive };
  },
});
</script>
