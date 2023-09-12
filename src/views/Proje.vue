<template>
  <div class="ortaa">
    <div class="grid-container">
        <div class="grid-item"><img src="../assets/anıt.jpg" class="res"><div>Anıtkabir</div></div>
        <div class="grid-item"><img src="../assets/indir.jpg" class="res"><div>Kız Kulesi</div></div>
        <div class="grid-item"><img src="../assets/Pamukkale-Travertenleri.jpg" class="res"><div>Pamukkale</div></div>
        <div class="grid-item"><img src="../assets/indir1.jpg" class="res"><div>Nemrut Dağı</div></div>
        <div class="grid-item"><img src="../assets/budget_4.png" class="res"><div>Kapadokya</div></div>
        <div class="grid-item"><img src="../assets/urgup-three-beauties.jpg" class="res"><div>Peri Bacaları</div></div>
    </div>
  </div>
</template>
<style>
.ortaa {
  width: 100%;
  height: 90%;
  text-align: center;
}
.yerler {
  padding-left: 100px;
  padding-top: 75px;  margin-left: 200px;

}
.res{
    width: 300px;
    height: 150px;
    border-radius: 12px;
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.3)  ;
    animation: ressam;
  animation-iteration-count: 1;
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
    border:none;
    text-align: center;
}
@keyframes ressam {
  1% {
    opacity: 0;
  }
}
@media (max-width: 426px) {
 .res{
  width: 92px;
  height: 100px;
 }
 .yerler{
  padding-top: 0;
  margin-left: 0;
  padding-left: 0;
  display: flex;
  
 }
 .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 100px);
    grid-template-rows: repeat(3, 125px); 
    gap: 25px; 
    justify-content: center; 
    align-content: center; 
    height: 500px; 
}
}
@media (max-width: 321px) {

  .res{
  width: 115px;
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
    margin-left: 50px;
}
}

</style>
