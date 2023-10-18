<template>
  <div class="mid">
    <div class="left">
      <div class="text">
        <h1>Merhaba,</h1>

        Merhaba Merhaba Merhaba Merhaba  <br />
        Merhaba Merhaba Merhaba<span class="textcolor"> Merhaba </span> <br />
        Merhaba Merhaba Merhaba Merhaba
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
@media (max-width: 767px) {
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
