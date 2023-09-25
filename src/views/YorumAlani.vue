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
  <div class="yorumm">
    <button class="sendComment" @click="sendComment">
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style="padding-right: 7.5px;">
        <path
          d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
        />
      </svg>
      Yorum Yap
    </button>
    <b> Kaan Ayhan</b>
    <div class="alinanyorum">Efsane site</div>
    <div class="isim" v-for="(comment, index) in store.getComments" :key="index">
      <b> {{ comment.username }} {{ comment.surname }}</b>
      <div class="alinanyorum">{{ comment.comment }}
       <p class="date">Tarih:{{ comment.date }}</p></div>
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
.date{
  margin-top: 55px;
 margin-left: 350px;
}
.alinanyorum {
  background-color: lightgray;
  word-wrap: break-word;
  margin-top: 10px;
  width: 75%;
  height: 100px;
}
.sendComment {
  margin-left: 895px;

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
  display: flex;
    align-items: center;
}
.sendComment:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>
