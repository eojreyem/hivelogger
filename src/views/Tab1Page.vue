<template>
  <div class="rate-colony">
    <h2>Rate Colony</h2>
    <div v-if="showModal" class="modal-overlay">
      <div class="modal modal-fullscreen">
        <h3>Update Rating Criteria</h3>
        <textarea id="criteria-input" v-model="newCriteria" placeholder="Enter criteria, separated by commas"></textarea>
        <div class="modal-actions">
          <button @click="closeModal">Cancel</button>
          <button @click="updateCriteria">Update Criteria</button>
        </div>
      </div>
    </div>
    <div v-for="(criterion, index) in User_Rating_Criteria" :key="index" class="rating-row">
      <label>{{ criterion }}</label>
      <div class="rating-options">
        <label v-for="(label, i) in ratingLabels" :key="i" class="rating-option">
          <input type="radio" :name="`rating-${index}`" :value="i + 1" v-model="ratings[index]" class="rating-input" />
          <span>{{ label }}</span>
        </label>
      </div>
    </div>
    <div class="actions">
      <button @click="cancel">Cancel</button>
      <button @click="save">Save</button>
    </div>
    <button @click="openModal" class="update-criteria-button">Update Rating Criteria</button>
  </div>
</template>

<script>
export default {
  name: 'RateColony',
  data() {
    return {
      User_Rating_Criteria: ["YourText1", "YourText2", "YourText3", "YourText4", "YourText5"],
      ratings: Array(5).fill(null),
      newCriteria: "",
      showModal: false,
      ratingLabels: ["Bad", " ", " ", " ", "Good"],
    };
  },
  methods: {
    cancel() {
      // Logic to handle cancel action
      this.ratings = Array(5).fill(null);
    },
    save() {
      // Logic to handle save action
      console.log("Ratings saved: ", this.ratings);
    },
    updateCriteria() {
      // Update User_Rating_Criteria with new input
      if (this.newCriteria.trim()) {
        this.User_Rating_Criteria = this.newCriteria.split(',').map(item => item.trim());
        this.ratings = Array(this.User_Rating_Criteria.length).fill(null);
      }
      this.closeModal();
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.rate-colony {
  max-width: 300px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
}

.modal-fullscreen {
  max-width: 600px;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

textarea {
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.rating-row {
  margin-bottom: 15px;
}

.rating-options {
  display: flex;
  gap: 10px;
  margin-top: 5px;
  width: 100%;
}

.rating-option {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rating-input {
  transform: scale(1.5);
}

.rating-option:first-of-type input {
  accent-color: red;
}

.rating-option:last-of-type input {
  accent-color: green;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.update-criteria-button {
  display: block;
  margin: 20px auto 0;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: #fff;
  cursor: pointer;
}

.update-criteria-button:hover {
  opacity: 0.8;
}

button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

button:first-of-type {
  background-color: #f44336;
  color: #fff;
}

button:last-of-type {
  background-color: #4caf50;
  color: #fff;
}
</style>
