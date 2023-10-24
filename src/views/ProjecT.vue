<template>
  <div class="ortaa">
    <div class="grid-container">
      <div class="grid-item" @click="openModal('Anıtkabir')">
        <img src="../assets/anıt.jpg" class="res" />
        <div>Anıtkabir</div>
      </div>
      <div class="grid-item" @click="openModal('Kız Kulesi')">
        <img src="../assets/indir.jpg" class="res" />
        <div>Kız Kulesi</div>
      </div>
      <div class="grid-item" @click="openModal('Pamukkale')">
        <img src="../assets/Pamukkale-Travertenleri.jpg" class="res" />
        <div>Pamukkale</div>
      </div>
      <div class="grid-item" @click="openModal('Nemrut Dağı')">
        <img src="../assets/indir1.jpg" class="res" />
        <div>Nemrut Dağı</div>
      </div>
      <div class="grid-item" @click="openModal('Kapadokya')">
        <img src="../assets/budget_4.png" class="res" />
        <div>Kapadokya</div>
      </div>
      <div class="grid-item" @click="openModal('Peri Bacaları')">
        <img src="../assets/urgup-three-beauties.jpg" class="res" />
        <div>Peri Bacaları</div>
      </div>
    </div>

    <div v-if="selectedPlace" class="modal-overlay" @click="closeModal">
      <div class="modal" @click.stop>
        <h2>{{ selectedPlace.name }}</h2>
        <p>{{ selectedPlace.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const places = [
  {
    name: 'Anıtkabir',
    description:
      "Anıtkabir, Türkiye Cumhuriyeti'nin kurucusu Mustafa Kemal Atatürk'ün mozolesi ve anıt mezarıdır. Ankara'da Atatürk Orman Çiftliği arazisinde yer alır."
  },
  {
    name: 'Kız Kulesi',
    description:
      "Kız Kulesi, İstanbul Boğazı'nda, Üsküdar ile Salacak arasında yer alan küçük adacık üzerinde kurulu olan kulenin adıdır."
  },
  {
    name: 'Pamukkale',
    description:
      "Pamukkale, Türkiye'nin batısında, Denizli il sınırları içinde yer alan bir turistik bölgedir. Sıcak su kaynaklarının kireç taşı teraslarını oluşturduğu doğal bir güzelliktir."
  },
  {
    name: 'Nemrut Dağı',
    description:
      'Nemrut Dağı, Adıyaman il sınırları içinde yer alan tarihî bir dağdır. Dağın zirvesindeki 2.134 metre yüksekliğindeki platoda, Kommagene Kralı Antiochos tarafından yaptırılan heykeller ve tümülüs bulunur.'
  },
  {
    name: 'Kapadokya',
    description:
      "Kapadokya, Türkiye'nin orta kesimlerinde yer alan tarihî bir bölgedir. Eşsiz kaya oluşumları, yer altı şehirleri ve peri bacalarıyla ünlüdür."
  },
  {
    name: 'Peri Bacaları',
    description:
      'Peri Bacaları, Kapadokya bölgesinde yer alan ve doğal erozyon sonucu oluşmuş kaya oluşumlarıdır. Bu oluşumlar, bölgeye özgü manzarayı oluşturan önemli unsurlardır.'
  }
]

const selectedPlace = ref(null)

const openModal = (placeName) => {
  selectedPlace.value = places.find((place) => place.name === placeName)
}

const closeModal = () => {
  selectedPlace.value = null
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
}

.ortaa {
  width: 100%;
  height: 90%;
  text-align: center;
  margin-top: 7.5%;
}
.yerler {
  padding-left: 100px;
  padding-top: 75px;
  margin-left: 200px;
}
.res {
  width: 300px;
  height: 150px;
  border-radius: 12px;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.3);
  animation-iteration-count: 1;
  cursor: pointer;
  animation-duration: 2s;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-template-rows: repeat(2, 160px);
  gap: 25px;
  justify-content: center;
  align-content: center;
  height: 500px;
}

.grid-item {
  border: none;
  text-align: center;
}
@keyframes ressam {
  1% {
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .res {
    width: 124px;
    height: 100px;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 125px);
    grid-template-rows: repeat(3, 125px);
    gap: 25px;
    justify-content: center;
    align-content: center;
    height: 500px;
    margin-left: 20px;
    margin-top: 25%;
  }
}
</style>
