<template>
  <div>
    <div class="menu-btn" @click="toggleMenu">
      <i
        :class="[menuOpen ? 'fa-times' : 'fa-bars', 'fa-solid', 'fa-2xl']"
        style="color: yellow"
      ></i>
    </div>
    <div class="top">
      <div class="logo">
        <router-link to="/" class="color">
          <img src="@/assets/voli.png" class="image" />
        </router-link>
      </div>

      <nav class="tab" :class="{ active: menuOpen }">
        <h1 class="textTop">
          <router-link to="/hakkimizda" class="color"> Hakkımızda </router-link>
        </h1>
        <h1 class="textTop">
          <router-link to="/sosyal" class="color"> Sosyal </router-link>
        </h1>
        <h1 class="textTop">
          <router-link to="/projeler" class="color"> Projeler </router-link>
        </h1>
        <h1 class="textTop">
          <router-link to="/kayit" class="color"> Kayıt </router-link>
        </h1>
        <h1 class="textTop">
          <router-link to="/yorumlar" class="color"> Yorum </router-link>
        </h1>
        <h1 class="textTop">
          <router-link to="/havadurumu" class="color"> Ülkeler</router-link>
        </h1>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style scoped>
i {
  display: none;
}
.logo {
  width: 7.5%;
  height: 10%;
  margin-top: 2%;
  margin-left: 2%;
}
.top {
  justify-content: space-between;
  width: 100%;
  display: flex;
}

.tab {
  text-align: center;
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.color:hover {
  color: gray;
}

@media (max-width: 767px) {
  .menu-btn {
    flex-direction: column;
    cursor: pointer;
    padding: 2% 2%;
    position: fixed;
    top: 3.5%;
    transition: 0.3s;
    right: 2.5%;
    z-index: 999;
  }
  .image {
    display: none;
  }
  i {
    display: block;
  }
  .tab {
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    background-color: #fff;
    box-shadow: -2px 0px 5px 0px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    z-index: 998;
    text-align: center;
    display: none;
    height: 0px;
    transition: height 0.3s ease-in-out;
  }
  .active {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
}
</style>
