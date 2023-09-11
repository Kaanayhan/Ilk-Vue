<template>  

  <div class="body">
    <div class="ust"><div class="logo">
      <router-link to="/" class="color"> <img src="./assets/voli.png" class="image" /></router-link></div>

      <nav class="tab">
        <h1 class="yazi">
          <router-link to="/hakkimizda" class="color"> Hakkimizda </router-link>
        </h1>
        <h1 class="yazi">
          <router-link to="/sosyal" class="color"> Sosyal </router-link>
        </h1>
        <h1 class="yazi">
          <router-link to="/projeler" class="color"> Projeler </router-link>
        </h1>
<!--         <h1 class="yazi"> <router-link to="/giris" class="colorr"> Giriş </router-link></h1>
 -->        <h1 class="yazi">
          <router-link to="/kayit" class="color"> Kayıt </router-link>
        </h1>
      </nav>
    </div><router-view></router-view>
  </div> 
  
</template>

<script></script>

<style>
@media (max-width:426px) {
  .tab{
     width: 10%;
      font-size: 11px;
  }
  .yazi{
    padding-right: 10px;
    margin-right: 2px ;
  }


}

#body {
  width: 75%;
  height: 700px;
  margin: auto;
}
.logo {
  width: 7.5%;
  height: 10%;
}
.ust {
  width: 100%;
  display: flex;
}
.tab {
  text-align: center;
  width: 90%;
  display: flex;
  justify-content: space-evenly;
}
.yazi {
  width: 22.5;
  line-height: 90px;
}

.yazi a {
  text-decoration: none;
}
.color:hover {
  color: darkred;
}


</style>
