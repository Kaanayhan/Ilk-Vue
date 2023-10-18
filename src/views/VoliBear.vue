<template>
  <div class="mid">
    <div class="left">
      <div class="text">
        <h1>Welcome,</h1>

        <p>
          I am Kaan, a product designer from Turkey currently working with intime Merhaba Merhaba
          Merhaba 
        </p>
      </div>
    </div>
    <div class="right">
      <img src="../assets/volibear.png" class="img" />
    </div>
  </div>
</template>
<style scoped>
p{
  text-align: left;
}
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
