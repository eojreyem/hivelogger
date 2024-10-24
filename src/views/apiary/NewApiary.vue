<template>
   <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Add New Apiary</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item>
        <ion-label position="floating">Apiary Name</ion-label>
        <ion-input v-model="newApiaryName" placeholder="Enter apiary name"></ion-input>
      </ion-item>
      <ion-button expand="block" @click="addApiary" class="ion-margin-top">Create Apiary</ion-button>
    </ion-content>
  </ion-page>
 </template>
  
  <script lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonBackButton, IonButtons } from '@ionic/vue';
import { defineComponent } from 'vue';
import { ApiaryService } from '@/services/apiary_service';

export default defineComponent({
  components: { IonButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonBackButton, IonButtons },
  data() {
    return {
      newApiaryName: '',
    };
  },
  methods: {
    async addApiary() {
      if (this.newApiaryName.trim()) {
        try {
          const apiaryService = new ApiaryService();
          await apiaryService.addApiary(this.newApiaryName);
          this.newApiaryName = '';
          // Optionally, you can add a success message or redirect to the home page
          this.$router.push('/');
        } catch (error) {
          console.error('Error adding apiary:', error);
          // Optionally, you can show an error message to the user
        }
      }
    },
  },
});
</script>
