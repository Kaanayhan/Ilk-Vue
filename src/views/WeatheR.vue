<template>
  <div class="search-container">
    <input type="text" id="search-bar" placeholder="Ülke ara..." />
  </div>
  <div v-if="countryList.length > 0" class="grid-container">
    <div 
      v-for="(country, index) in countryList"
      :key="index"
      class="grid-item"
      @click="showCountryInfo(country)"
    >
      <div class=""><img :src="country.flags.png" alt="Bayrak" class="flag-icon" /></div>
      <div class="">{{ country.name.common }}</div>
    </div>
  </div>
  <div v-if="selectedCountry" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>{{ selectedCountry.name.common }}</h2>
      <p>Başkent: {{ selectedCountry.capital[0] }}</p>
      <p>Nüfus: {{ selectedCountry.population }}</p>
      <p>Bölge: {{ selectedCountry.region }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const countryList = ref([]);
const selectedCountry = ref(null);

onMounted(() => {
  // Ülke verilerini çek
  fetch('https://restcountries.com/v3.1/all?fields=name,flags')
    .then((res) => res.json())
    .then((data) => {
      // Ülke verilerine bayrak URL'sini ekleyerek countryList ref'ine atama
      countryList.value = data.map((country) => {
        return {
          ...country,
          flag: country.flags[0] // Bayrak URL'si
        };
      });

      // Ülke isimlerine göre A'dan Z'ye doğru sırala
      countryList.value.sort((a, b) => {
        const nameA = a.name.common.toUpperCase();
        const nameB = b.name.common.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    });
});

function showCountryInfo(country) {
  selectedCountry.value = country;
  console.log('Tıklanan Ülke Bilgisi:', country);
}

function closeModal() {
  selectedCountry.value = null;
}
</script>

<style scoped>
.search-container {
  margin-bottom: 20px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
}

.grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  border-radius: 10px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.flag-icon {
  width: 75px;
  height: 40px;
}
.search-container {
  margin: 2% 0 1% 2%;
  display: flex;
}

#search-bar {
  padding: 1%;
  font-size: 100%;
  border: 1px solid #ccc;
  width: 25%;
  border-radius: 10px;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 1%;
  grid-gap: 0.25%;
}

.grid-item {
  align-items: center;
  grid-template-rows: 50px;
  background-color: darkgray;
  color: white;
  text-align: center;
  padding: 10%;
  font-size: 129%;
  display: grid;
  cursor: pointer;
}
</style>
