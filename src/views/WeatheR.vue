<template>
  <div class="search-container">
    <input type="text" id="search-bar" v-model="searchKeyword" placeholder="Ülke ara..." />
  </div>
  <div class="grid-container">
    <div
      v-for="(country, index) in filteredCountries"
      :key="index"
      class="grid-item"
      @click="openModal(country)"
    >
      <div><img :src="country.flag" alt="Bayrak" class="flag-icon" /></div>
      <div>{{ country.translations.tur.common }}</div>
    </div>
    <div v-if="selectedCountry" class="modal-overlay" @click="closeModal">
      <div class="modal" @click.stop>
        <h1 style="text-align: center; margin-bottom: 2.5%; font-size: 48px">
          {{ selectedCountry.translations.tur.common }}
        </h1>
        <div class="modalflex">
          <div class="modal-content">
            <div>
              <div class="country-image">
                <img :src="selectedCountry.flag" alt="Bayrak" class="country-flag" />
              </div>
              <div v-for="weatherType in filteredWeatherTypes" :key="weatherType.code">
                <i :class="weatherType.icon"></i>{{ weatherType.label }}
              </div>
            </div>
            <p>Başkent: {{ selectedCountry.capital?.[0] }}</p>
            <p>Nüfus: {{ selectedCountry.population }}</p>
            <p>Bölge: {{ selectedCountry.region }}</p>
            <p>Para birimi: {{ selectedCountryCurrency.name }}</p>
            <p>Para sembolü: {{ selectedCountryCurrency.symbol }}</p>
            <p>Dil: {{ selectedCountrylanguages.languages.join(', ') }}</p>
          </div>
          <div class="">
            <div style="max-width: 100%; overflow: hidden; color: red; width: 500px; height: 500px">
              <div id="my-map-display" style="height: 100%; width: 100%; max-width: 100%">
                <iframe
                  style="height: 100%; width: 100%; border: 0"
                  frameborder="0"
                  :src="`https://www.google.com/maps/embed/v1/place?q=${selectedCountry.translations.tur.common}Country&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`"
                ></iframe>
              </div>
            </div>
            <a
              class="embedded-map-code"
              href="https://www.bootstrapskins.com/themes"
              id="get-data-for-embed-map"
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { WeatherConstants } from '../../public/constants/weather-constants'

const countryList = ref([])
const selectedCountry = ref(null)
const weatherCode = ref(0)
const selectedCountryCurrency = ref({})
const selectedCountrylanguages = ref({})
const searchKeyword = ref('')

onMounted(() => {
  fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => {
      countryList.value = data.map((country) => {
        return {
          ...country,
          flag: country.flags?.png || 'YOK',
          maps: country.maps || 'YOK',
          name: country.translations.tur.common
        }
      })

      countryList.value.sort((a, b) => {
        const nameA = a.name.toUpperCase()
        const nameB = b.name.toUpperCase()
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
const modalClick = (event) => {
  event.stopPropagation()
}
const filteredCountries = ref([])

const getLastFetchedData = async () => {
  if (searchKeyword.value.length >= 3) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${searchKeyword.value}`)
    const data = await response.json()
    return data.map((country) => {
      return {
        ...country,
        flag: country.flags?.png || 'YOK',
        maps: country.maps || 'YOK',
        name: country.translations.tur.common
      }
    })
  } else {
    return []
  }
}

const filterCountriesByKeyword = async () => {
  filteredCountries.value = await getLastFetchedData()
}

watch(searchKeyword, () => {
  filterCountriesByKeyword()
})
const openModal = (country) => {
  selectedCountry.value = country
  const { latitude, longitude } = enlemBoylamGoster(country)

  getCurrency(country)
  getLanguages(country)

  fetchWeatherData(latitude, longitude)
  const modalElement = document.querySelector('.modal')
  modalElement.addEventListener('click', modalClick)
}

const enlemBoylamGoster = (country) => {
  const latitude = country.latlng[0]
  const longitude = country.latlng[1]

  return {
    latitude,
    longitude
  }
}

const getCurrency = (country) => {
  const currency = country.currencies
  if (currency) {
    const firstCurrency = Object.values(currency)[0]

    selectedCountryCurrency.value = {
      name: firstCurrency.name,
      symbol: firstCurrency.symbol
    }
  } else {
    selectedCountryCurrency.value = {
      name: 'Bilgi Yok',
      symbol: 'Bilgi Yok'
    }
  }
  return {
    currency
  }
}

const getLanguages = (country) => {
  const languages = country.languages
  if (languages && Object.keys(languages).length > 0) {
    const firstLanguageKey = Object.keys(languages)[0]
    const firstLanguage = languages[firstLanguageKey]

    selectedCountrylanguages.value = {
      languages: [firstLanguage]
    }
  } else {
    selectedCountrylanguages.value = {
      languages: ['Bilgi Yok']
    }
  }
}

const closeModal = () => {
  selectedCountry.value = null
}

const fetchWeatherData = (latitude, longitude) => {
  fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  )
    .then((res) => res.json())
    .then((data) => (weatherCode.value = data.current_weather.weathercode))
}

const filteredWeatherTypes = computed(() => {
  return WeatherConstants.filter((weatherType) => {
    if (Array.isArray(weatherType.code)) {
      return weatherType.code.includes(weatherCode.value)
    }
    return weatherType.code === weatherCode.value
  }).map((weatherType) => {
    return {
      code: weatherType.code,
      label: weatherType.label,
      icon: weatherType.icon
    }
  })
})
</script>
<style scoped>
.modalflex {
  display: flex;
  justify-content: space-around;
}
i {
  margin-right: 2%;
}
#search-bar {
  padding: 10px;
  font-size: 16px;
  width: 98%;
  margin-left: 1%;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-top: 1%;
  margin-bottom: 20px;
  border-left: 3px solid;
  border-left-color: salmon;
  transition: border-color 0.4s ease-out;
  margin-top: 85px;
}
#search-bar:focus {
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 1px 2px,
    rgb(51, 51, 51) 0px 0px 0px 1.5px;
  outline: none;

  border: 1px solid #eee;

  border-left: 3px solid #888;
}

p {
  margin-top: 4%;
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
  margin-bottom: 7%;
  width: 230px;
  height: 115px;
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
  margin-top: 10%;
  margin-bottom: 6%;
  background-image: linear-gradient(90deg, lightgray, darkgray);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  max-width: 80%;
  width: 800px;
  text-align: left;
}

@media (max-width: 768px) {
  #search-bar {
    margin-left: 1.5%;
  }
  .modal {
    max-width: 90vw;
    margin-left: 5%;
    margin-top: 70px;
  }

  .modalflex {
    flex-direction: column;
  }

  .country-flag {
    width: 100%;
    height: auto;
  }
  .modal-overlay {
    overflow: scroll;
    display: inline-block;
  }
}
</style>
