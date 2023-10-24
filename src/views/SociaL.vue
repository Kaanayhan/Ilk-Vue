<template>
  <div class="mid">
    <div class="left">
      <table border="0">
        <tr>
          <td>
            <a href="https://www.instagram.com"
              ><img src="../assets/İnsta.png" class="pictures"
            /></a>
          </td>
          <td><span>instagram </span></td>
        </tr>
        <tr>
          <td>
            <a href="https://www.youtube.com"><img src="../assets/y.png" class="pictures" /></a>
          </td>
          <td>Youtube</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.facebook.com"><img src="../assets/Face.png" class="pictures" /></a>
          </td>
          <td>Facebook</td>
        </tr>
        <tr>
          <td>
            <a href="https://twitter.com">
              <img
                src="../assets/x-logo-twitter-elon-musk_dezeen_2364_col_0.webp"
                class="pictures twit"
              />
            </a>
          </td>
          <td>Twitter</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.tiktok.com/tr-TR">
              <img src="../assets/tiktok.png" class="pictures" />
            </a>
          </td>
          <td>Tiktok</td>
        </tr>
      </table>
    </div>
    <div class="right">
      <div class="center">
        <h1 class="title">Bize Katılın</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nihil exercitationem
          perferendis, excepturi odio corrupti, quia dolorum amet dignissimos vitae quidem cumque
          iste! Dolorum cumque et iure laudantium explicabo quia!Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Similique distinctio expedita hic. Labore nihil, corrupti
          consectetur atque, vel quia, consequatur rem quas voluptatem sed ipsam nostrum architecto
          amet minus
        </p>
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
  margin-top: 7.5%;
}
.twit {
  border-radius: 100px;
}
.left {
  width: 50%;
  height: 84%;
  padding-left: 150px;
  padding-top: 10px;
}
.right {
  width: 50%;
  height: 84%;
  padding-top: 150px;
  padding-right: 100px;
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
@media (max-width: 768px) {
  .mid {
    flex-direction: column;
  }
  .left {
    width: 100%;
    padding: 20px;
    margin-top: 15px;
  }
  .right {
    width: 100%;
    padding: 20px;
  }
}
</style>
