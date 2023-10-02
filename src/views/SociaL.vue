<template>
  <div class="mid">
    <div class="left">
      <table border="0">
        <tr>
          <td><img src="../assets/İnsta.png" class="pictures" /></td>
          <td><span>instagram </span></td>
        </tr>
        <tr>
          <td><img src="../assets/y.png" class="pictures" /></td>
          <td>Youtube</td>
        </tr>
        <tr>
          <td><img src="../assets/Face.png" class="pictures" /></td>
          <td>Facebook</td>
        </tr>
        <tr>
          <td>
            <img
              src="../assets/x-logo-twitter-elon-musk_dezeen_2364_col_0.webp"
              class="pictures twit"
            />
          </td>
          <td>Twitter</td>
        </tr>
        <tr>
          <td>
            <img src="../assets/tiktok.png" class="pictures" />
          </td>
          <td>Tiktok</td>
        </tr>
      </table>
    </div>
    <div class="right">
      <div class="center">
        <h1 class="title">Bize Katılın</h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nihil exercitationem
        perferendis, excepturi odio corrupti, quia dolorum amet dignissimos vitae quidem cumque
        iste! Dolorum cumque et iure laudantium explicabo quia!Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Similique distinctio expedita hic. Labore nihil, corrupti
        consectetur atque, vel quia, consequatur rem quas voluptatem sed ipsam nostrum architecto
        amet minus
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  text-align: center;
}
.mid {
  display: flex;
  width: 100%;
  height: 90%;
}
.twit {
  border-radius: 60px;
}
.left {
  width: 50%;
  height: 84%;
  padding-left: 150px;
  padding-top: 50px;
}
.right {
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
.pictures {
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
}
@media (max-width: 426px) {
  .center {
    position: absolute;
    right: 25px;
  }
  .pictures {
    margin-left: 2%;
  }
  .left {
    width: 100%;
    padding-left: 0;
    padding-top: 0;
  }
  .right {
    width: 410px;
    text-align: center;
    position: absolute;
    top: 450px;
    z-index: -1;
  }
}
@media (max-width: 321px) {
  .center {
    position: absolute;
    right: 0px;
  }
  .right {
    width: 300px;
    position: absolute;
    top: 425px;
    z-index: -1;
  }
}
</style>
