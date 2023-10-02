<template>
  <div class="mid">
    <div class="left">
      <div class="text">
        <h1>Welcome,</h1>
        I am Ramon,a product designer from Barcelona <br />
        currently working with <span class="textcolor"> Red Bull </span> and teaching design at<br />
        <span class="textcolor">SketchCasts.</span> In the past,I've worked for clients such as<br />
        Varner and Intersport.
      </div>
    </div>
    <div class="right">
      <img src="../assets/volibear.png" class="img" />
    </div>
  </div>
</template>
<style scoped>
.img {
  width: 100%;
  height: 120%;
  animation: mySlide;
  animation-iteration-count: 1;
  animation-duration: 2s;
}
@keyframes mySlide {
  from {
    margin-left: 0%;
  }
  to {
    margin-left: 0%;
  }
  1% {
    opacity: 0;
  }
}
.textcolor {
  color: red !important;
}
.mid {
  display: flex;
  width: 100%;
  height: 90%;
}
.left {
  width: 50%;
  height: 84%;
  padding-left: 100px;
  padding-top: 150px;
}
.right {
  width: 50%;
  height: 84%;
}
@media (max-width: 426px) {
  .mid {
    width: 100%;
    height: 560px;
  }
  .text {
    margin: 0 50px 100px 0;
  }
  .left {
    padding-top: 50px;
  }
  .right {
    margin-left: 25%;
  }
  .img {
    position: absolute;
    bottom: 60px;
    width: 300px;
    height: 250px;
    padding: 0;
    left: 75px;
  }
}
@media (max-width: 321px) {

  .img {
    position: absolute;
    bottom: 0px;
    width: 300px;
    height: 250px;
    padding: 0;
    left: 50px;
  }
}
</style>
