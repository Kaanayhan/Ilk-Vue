<template>
  <div class="mid">
    <div class="left">
      <div class="text">
        <h1>Welcome,</h1>

        <div style="text-align: left">
          <p>I am Kaan, a product designer from</p> <p>Turkey currently working with intime Merhaba</p>
        </div>
      </div>
    </div>
    <div class="right">
      <img src="../assets/volibear.png" class="img" />
    </div>
  </div>
</template>
<style scoped>
p {
  text-align: left;
}
.img {
  width: 450px;
  height: 630px;
  animation: mySlide;
  animation-iteration-count: 1;
  animation-duration: 2s;
  z-index: -1;
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
  margin-top: 7.5%;
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
@media (max-width: 768px) {
  .img {
    height: auto;
    max-width: 100%;
  }
  .mid {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
  .left {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    margin-right: 100px;
  }
  .right {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>
