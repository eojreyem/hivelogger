<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Four Seasons Bees</ion-title>
        <ion-buttons slot="end">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="apiary-list">
        <div v-for="apiary in apiaries" :key="apiary.id" class="apiary-item">
          <div class="apiary-header">
            <h2>{{ apiary.name }}</h2>
            <p>Last visited {{ calculateDaysAgo(apiary.lastVisited) }} days ago</p>
          </div>
          <div class="apiary-actions">
            <ion-button @click="logApiary(apiary.id)">Log</ion-button>
            <ion-button :router-link="`/apiary/${apiary.id}`">{{ getColoniesCount(apiary.id) }} colonies</ion-button>
          </div>
        </div>
      </div>
      <div class="search-colony">
        <ion-button router-link="/search">Colony</ion-button>
      </div>
      <div class="add-apiary">
        <ion-button @click="presentAddApiaryModal">Add Apiary</ion-button>
      </div>
      <ion-button router-link="/tabs/tab1">Go to Tab 1</ion-button>
      <ion-modal :is-open="isAddApiaryModalOpen" @did-dismiss="isAddApiaryModalOpen = false">
        <ion-header>
          <ion-toolbar>
            <ion-title>Add New Apiary</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="isAddApiaryModalOpen = false">Close</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-item>
            <ion-label position="stacked">Apiary Name</ion-label>
            <ion-input v-model="newApiaryName" placeholder="Enter apiary name"></ion-input>
          </ion-item>
          <ion-button expand="full" @click="addApiary">Add Apiary</ion-button>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButton, IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonModal, IonItem, IonLabel, IonInput } from '@ionic/vue';
import { SqliteService } from '@/services/sqliteService';

export default defineComponent({
  components: {
    IonButton,
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonMenuButton,
    IonModal,
    IonItem,
    IonLabel,
    IonInput
  },
  data() {
    return {
      apiaries: [],
      isAddApiaryModalOpen: false,
      newApiaryName: ''
    };
  },
  async mounted() {
    this.sqliteService = new SqliteService();
    await this.sqliteService.initDB();
    this.apiaries = await this.sqliteService.getApiaries();
  },
  methods: {
    calculateDaysAgo(lastVisited: string): number {
      const lastVisitedDate = new Date(lastVisited);
      const currentDate = new Date();
      const differenceInTime = currentDate.getTime() - lastVisitedDate.getTime();
      return Math.floor(differenceInTime / (1000 * 3600 * 24));
    },
    async getColoniesCount(apiaryId: number): Promise<number> {
      try {
        const colonies = await this.sqliteService.getColoniesByApiaryId(apiaryId);
        return colonies ? colonies.length : 0;
      } catch (error) {
        console.error(`Error fetching colonies for apiary ${apiaryId}:`, error);
        return 0;
      }
    },
    async logApiary(apiaryId: number) {
      // Handle logging action
      console.log(`Log for apiary ${apiaryId}`);
    },
    presentAddApiaryModal() {
      this.isAddApiaryModalOpen = true;
    },
    async addApiary() {
      if (this.newApiaryName.trim() !== '') {
        await this.sqliteService.addApiary(this.newApiaryName);
        this.apiaries = await this.sqliteService.getApiaries();
        this.newApiaryName = '';
        this.isAddApiaryModalOpen = false;
      }
    }
  }
});
</script>

<style scoped>
.apiary-list {
  display: flex;
  flex-direction: column;
  padding: 16px;
}
.apiary-item {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}
.apiary-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.apiary-header h2 {
  margin: 0;
  font-size: 1.2em;
}
.apiary-header p {
  margin: 0;
  font-size: 0.9em;
}
.apiary-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}
.search-colony {
  text-align: center;
  margin-top: 24px;
}
.add-apiary {
  text-align: center;
  margin-top: 24px;
}
</style>