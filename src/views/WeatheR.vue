<template>
  <div class="search-container">
    <input type="text" id="search-bar" placeholder="Ülke ara..." />
  </div>
  <div class="grid-container">
    <div
      v-for="(country, index) in countryList"
      :key="index"
      class="grid-item"
      @click="openModal(country)"
    >
      <div class=""><img :src="country.flag" alt="Bayrak" class="flag-icon" /></div>
      <div class="">{{ country.name.common }}</div>
    </div>
  </div>
  <div v-if="selectedCountry" class="modal-overlay" @click="closeModal">
    <div class="modal">
      <div class="modal-content">
        <h2>{{ selectedCountry.name.common }}</h2>
        <div class="country-image">
          <img :src="selectedCountry.flag" alt="Bayrak" class="country-flag" />
        </div>
        <div class="country-map"></div>
        <p>Başkent: {{ selectedCountry.capital?.[0] }}</p>
        <p>Nüfus: {{ selectedCountry.population }}</p>
        <p>Bölge: {{ selectedCountry.region }}</p>
      </div>
      <div style="max-width: 100%; overflow: hidden; color: red; width: 500px; height: 500px">
        <div id="my-map-display" style="height: 100%; width: 100%; max-width: 100%">
          <iframe
            style="height: 100%; width: 100%; border: 0"
            frameborder="0"
            :src="`https://www.google.com/maps/embed/v1/place?q=${selectedCountry.name.common}+country&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`"
          ></iframe>
        </div>
        <a
          class="embedded-map-code"
          href="https://www.bootstrapskins.com/themes"
          id="get-data-for-embed-map"
          >premium bootstrap themes</a
        >
      </div>
      <a
        target="_blank"
        :href="selectedCountry.maps.googleMaps"
        alt="Harita"
        class="map-icon"
        style="color: darkblue"
        >Haritada Göster
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const countryList = ref([])
const selectedCountry = ref(null)
const weatherCode = ref(0)
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position, 'position')

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
onMounted(() => {
  fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => {
      countryList.value = data.map((country) => {
        return {
          ...country,
          flag: country.flags?.png || 'YOK',
          maps: country.maps || 'YOK'
        }
      })

      countryList.value.sort((a, b) => {
        const nameA = a.name.common.toUpperCase()
        const nameB = b.name.common.toUpperCase()
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }
        return 0
      })
    })
})

const openModal = (country) => {
  selectedCountry.value = country
}


const closeModal = () => {
  selectedCountry.value = null
}
</script>
<style scoped>
.search-container {
  margin-top: 1%;
  margin-bottom: 20px;
}
#my-map-display .text-marker {
}
.map-generator {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
#search-bar {
  padding: 10px;
  font-size: 16px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 10px;
}
#gmap_canvas img {
  max-width: none !important;
  background: none !important;
}
.grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  cursor: pointer;
  font-size: 150%;
  text-align: center;
  height: 200px;
}
.country-flag {
  width: 100px;
  height: auto;
}

.flag-icon {
  width: 75px;
  height: 40px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: lightgray;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  max-width: 80%;
  width: 400px;
  text-align: left;
}

.close {
  color: #aaa;
  float: right;
  font-size: 24px;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
}
</style>
