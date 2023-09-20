<script setup>
import { useCommentStore } from '../stores/comment'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useCommentStore()

const sendComment = () => {
  router.push('/yorum')
}
</script>
<template>    

  <div class="yorumm"><button class="buttonnn" @click="sendComment">Yorum Yap</button>
    <b> Kaan Ayhan</b>
    <div class="alinanyorum">Efsane site</div>
    <div class="isim" v-for="(comment, index) in store.getComments" :key="index">
      <b> {{ comment.username }} {{ comment.surname }}</b>
      <div class="alinanyorum">{{ comment.comment }}</div>
    </div>
  </div>
</template>

<style>
.yorumm {
  padding-left: 50px;
  width: 75%;
  margin: 0 auto;
}
.isim {
  margin-top: 20px;
}
.alinanyorum {
  background-color: lightgray;
  word-wrap: break-word;
  margin-top: 10px;
  width: 75%;
  height: 100px;
}
.buttonnn {
  margin-left: 950px;

  padding: 15px 15px;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #04aa6d;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  animation: mySlide;
  animation-iteration-count: 1;
  animation-duration: 2s;
}
.buttonnn:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>
