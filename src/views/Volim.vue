<template>
<div class="orta">
    <div class="soll">
      <h1>Welcome,</h1>
      I am Ramon,a product designer from Barcelona <br />
      currently working with <span class="textcolor"> Red Bull </span> and teaching design at<br />
      <span class="textcolor">SketchCasts.</span> In the past,I've worked for clients such as<br />
      Varner and Intersport.
    </div>
    <div class="sag">
      <img src="../assets/images.jfif" class="img" />
    </div>
  </div>
  </template>
  <style>
  .img {
  width: 100%;
  height: 120%;
  animation: mySlide;
  animation-iteration-count: 1;
  animation-duration: 2s;
}
@keyframes mySlide {
  from {
    margin-left: 33%;
  }
  to {
    margin-left: 0%;
  }
  1% {
    opacity: 0;
  }
}
.textcolor {
  color: red;
}
.orta {
  display: flex;
  width: 100%;
  height: 90%;
}
.soll {
  width: 50%;
  height: 84%;
  padding-left :100px;
  padding-top: 150px;
}
.sag {
  width: 50%;
  height: 84%;
}
</style>