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
      {{ country.name }}
    </div>
  </div>
  <div v-if="selectedCountry" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>{{ selectedCountry.name }}</h2>
      <p>Başkent: {{ selectedCountry.capital }}</p>
      <p>Nüfus: {{ selectedCountry.population }}</p>
      <!-- Daha fazla ülke bilgisi eklemek için gerekli alanları buraya ekleyebilirsiniz -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const weatherCode = ref(0)
const countryList = ref([])
const selectedCountry = ref(null)

navigator.geolocation.getCurrentPosition((position) => {
  fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=' +
      position.coords.latitude +
      '&longitude=' +
      position.coords.longitude +
      '&current_weather=true'
  )
    .then((res) => res.json())
    .then((data) => (weatherCode.value = data.current_weather.weathercode))
})

fetch('https://countriesnow.space/api/v0.1/countries/positions')
  .then((res) => res.json())
  .then((data) => (countryList.value = data.data))

function showCountryInfo(country) {
  selectedCountry.value = country
  console.log('Tıklanan Ülke Bilgisi:', country)
}

function closeModal() {
  selectedCountry.value = null
}
</script>

<style scoped>
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
