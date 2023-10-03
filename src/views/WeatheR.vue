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
        <span class="close" @click.stop="closeModal">&times;</span>
        <h2>{{ selectedCountry.name.common }}</h2>
        <p>Başkent: {{ selectedCountry.capital[0] }}</p>
        <p>Nüfus: {{ selectedCountry.population }}</p>
        <p>Bölge: {{ selectedCountry.region }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const countryList = ref([])
const selectedCountry = ref(null)

onMounted(() => {
  fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region')
    .then((res) => res.json())
    .then((data) => {
      countryList.value = data.map((country) => {
        return {
          ...country,
          flag: country.flags.png
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

#search-bar {
  padding: 10px;
  font-size: 16px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
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
  background: white;
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
