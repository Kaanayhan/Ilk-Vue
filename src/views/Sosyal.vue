<template>
  <div class="orta">
    <div class="sol">
      <table border="0">
        <tr>
          <td><img src="../assets/İnsta.png" class="resimler" /></td>
          <td><span>instagram </span></td>
        </tr>
        <tr>
          <td><img src="../assets/y.png" class="resimler" /></td>
          <td>Youtube</td>
        </tr>
        <tr>
          <td><img src="../assets/Face.png" class="resimler" /></td>
          <td>Facebook</td>
        </tr>
        <tr>
          <td>
            <img
              src="../assets/x-logo-twitter-elon-musk_dezeen_2364_col_0.webp"
              class="resimler twit"
            />
          </td>
          <td>Twitter</td>
        </tr>
        <tr>
          <td>
            <img
              src="../assets/tiktok.png"
              class="resimler"
            />
          </td>
          <td>Tiktok</td>
        </tr>
      </table>
    </div>
    <div class="sagg">
      <div class="center"><h1 class="baslık">Bize Katılın</h1>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nihil exercitationem
      perferendis, excepturi odio corrupti, quia dolorum amet dignissimos vitae quidem cumque iste!
      Dolorum cumque et iure laudantium explicabo quia!Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Similique distinctio expedita hic. Labore nihil, corrupti consectetur atque,
      vel quia, consequatur rem quas voluptatem sed ipsam nostrum architecto amet minus</div>
    </div>
  </div>
</template>

<script></script>

<style>

.baslık {
  text-align: center;
}
.orta {
  display: flex;
  width: 100%;
  height: 90%;
}
.twit {
  border-radius: 60px;
}
.sol {
  width: 50%;
  height: 84%;
  padding-left: 150px;
  padding-top: 50px;
}
.sagg {
  width: 50%;
  height: 84%;
  padding-top: 200px;
  padding-right: 100px;
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
.image {
  width: 100%;
  height: 100%;
  animation: myRotate;
  animation-iteration-count: 1;
  animation-duration: 2s;
}
@keyframes myRotate {
  100% {
    transform: rotateZ(360deg);
  }
}
.yazi a {
  text-decoration: none;
}
.color:hover {
  color: red;
}
.textcolor {
  color: red;
}
.resimler {
  width: 100px;
  height: 100px;
  animation: resim;
  animation-iteration-count: 1;
  animation-duration: 2s;
}
@keyframes resim {
  from {
    margin-right: 50%;
  }
  to {
    margin-right: 0%;
  }
  1% {
    opacity: 0;
  }
}@media (max-width: 320px) {
  .center{
    position: absolute;
    right: 1px;
  }
  .resimler {
    margin-left: 2%;
  }
  .sol {
    width: 100%;
    padding-left: 0;
    padding-top: 0;
  }
  .sagg {
    width: 310px;
    text-align: center;
    position: absolute;
    top: 450px;
    z-index: -1;
  }
}
</style>
