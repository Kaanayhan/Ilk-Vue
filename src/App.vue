<script setup>
</script>
<template>
  <div>
    <div class="top">
      <div class="logo">
        <router-link to="/" class="color">
          <img src="./assets/voli.png" class="image"
        /></router-link>
      </div>

      <nav class="tab">
        <h1 class="textTop">
          <router-link to="/hakkimizda" class="color"> Hakkimizda </router-link>
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
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script></script>

<style>

.logo {
  width: 7.5%;
  height: 10%;
  margin-top: 5px;
  margin-left: 5px;
}
.top {
  width: 100%;
  display: flex;
}
.tab {
  text-align: center;
  width: 90%;
  display: flex;
  justify-content: space-evenly;
}
.textTop {
  width: 22.5;
  line-height: 90px;
}

.textTop a {
  text-decoration: none;
}
.color:hover {
  color: darkred;
}
@media (max-width: 426px) {
  .textTop {
    padding-left: 13px;
  }

  .tab {
    font-size: 14px;
  }
}
@media (max-width: 321px) {
  .tab {
    width: 10%;
    font-size: 11px;
  }
  .textTop {
    padding-left: 7.5px;
    margin-left: 2px;
  }
}
</style>
