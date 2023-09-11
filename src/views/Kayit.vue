<template>
  <div class="giris">
    <div class="kayit">
      <h1>Kayıt</h1>
      <div class="bos"></div><br>
      <div class="gir">
        <div class="yan">
          <div class="yaziii">
            <div class="bosss">İsim</div>
            <input type="text" placeholder="ismini gir" class="buton" />
          </div>
          <div class="yaziii">
            <div class="bosss">Soyisim</div>
            <input type="text" placeholder="Soyismini gir" class="buton" />
          </div>
        </div>
        <div class="yan">
          <div class="yaziii">
            <div class="bosss">Email</div>
            <input type="email" placeholder="emailini gir" class="buton" />
          </div>
          <div class="yaziii">
            <div class="bosss">Numara</div>
            <input type="phone" placeholder="numaranı gir" class="buton" />
          </div>
        </div>
        <div class="yan">
          <div class="yaziii">
            <div class="bosss">Şifre</div>
            <input type="password" placeholder="şifreni gir" class="buton" />
          </div>
          <div class="yaziii">
            <div class="bosss">Tekrar Şifre</div>
            <input type="password" placeholder="tekrar şifreni gir" class="buton" />
          </div>
        </div>
        <h2>Cinsiyet</h2><br>
      
        <div class="radyolar">
        <div> <input type="radio" name="sa" />Erkek</div> 
          <div class="radioo"><input type="radio" name="sa" />Kadın</div>
          <div class="radioo"><input type="radio" name="sa" class="sa"/>Kuruvasan</div>
        </div>
        <input type="button" class="buttonn" value="Onayla"  />
      </div>
    </div>
  </div>
</template>
<style>
.buttonn {
  margin-top: 33px;
  color: white;
  width: 100%;
  height: 35px;
  background: linear-gradient(90deg, hsl(210.58deg 61.18% 66.67%), hsl(276.38deg 41.23% 55.29%));
  border: none;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  border-radius: 10px; 
  cursor: pointer;
}
.bosss {
  padding-bottom: 7.5px;
}
.radyolar {
  display: flex;
}
.radioo {
  margin-left: 274px;
}
.sal {
  width: 100%;
  height: 100%;
}
.giris {
  font-weight: bold;
  padding-top: 80px;
  width: 100%;
  height: 90%;
}
.kayit {
  width: 50%;
  height: 50%;
  margin-left: 25%;
}
.bos {
  width: 10%;
  height: 1%;
  background: linear-gradient(90deg, hsl(210.58deg 61.18% 66.67%), hsl(276.38deg 41.23% 55.29%));
}
.gir {
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
}
.yan {
  display: flex;
  height: 75px;
  justify-content: space-between;
}
.yaziii {
  font-size: large;
}
.buton {
  width: 200px;
  height: 33px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  border: none;
  padding: 10px;
}
@media (max-width: 426px) {

 .giris{
    padding-top: 0;
 }
 .kayit{
  margin-left: 0;
 }
.yaziii{
  font-size: medium;
  
}
.buton{
  width: 150px;
  margin-right: 8px;
}
.buttonn{
  width:320px;
  height: 33px;
}
.radioo{
  margin-left: 65px;
}

}


</style>
<script></script>
