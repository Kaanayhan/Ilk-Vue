<template>
  <div class="ortaa">
    <table class="yerler">
      <tr>
        <td>
          <a href="https://kizkulesi.gov.tr/"
            ><img src="../assets/indir.jpg" class="res"/></a
          ><br />Kız Kulesi
        </td>
        <td>
          <a href="https://www.anitkabir.com.tr/"
            ><img src="../assets/anıt.jpg" class="res" /></a
          ><br />AnıtKabir
        </td>
        <td>
          <a href="https://www.pamukkale.com.tr/"
            ><img src="../assets/Pamukkale-Travertenleri.jpg" class="res" /></a
          ><br />Pamukkale
        </td>
      </tr>
      <tr>
        <td>
          <a href="https://tr.wikipedia.org/wiki/Nemrut_Da%C4%9F%C4%B1"
            ><img src="../assets/indir (1).jpg" class="res" /></a
          ><br />Nemrut Dağı
        </td>
        <td>
          <a href="https://tr.wikipedia.org/wiki/Kapadokya"
            ><img src="../assets/budget_4.png"  class="res" /></a
          ><br />Kapadokya
        </td>
        <td>
          <a href="https://cappadocia4u.com/tr/kapadokya-peri-bacalari/"
            ><img src="../assets/urgup-three-beauties.jpg" class="res" /></a
          ><br />Peri Bacaları
        </td>
      </tr>
    </table>
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
    width: 285px;
    height: 163px;
    margin: 5px;
    border-radius: 10px;
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.3)  ;
    animation: ressam;
  animation-iteration-count: 1;
  animation-duration: 2s;
}
@keyframes ressam {
  1% {
    opacity: 0;
  }
}
@media (max-width: 320px) {
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

}
</style>
