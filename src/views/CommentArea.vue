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
    <h1 style="text-align: center">YORUMLAR</h1>

    <hr />

    <b> Kaan Ayhan</b>
    <div class="alinanyorum"><b>Efsane site</b></div>
    <div class="isim" v-for="(comment, index) in store.getComments" :key="index">
      <b> {{ comment.username }} {{ comment.surname }}</b>
      <div class="alinanyorum">
      <b>{{ comment.comment }}</b>  
        <p class="date">
          {{ comment.date.getDate() }}/{{ comment.date.getMonth() + 1 }}/{{
            comment.date.getFullYear()
          }}

          {{ comment.date.getHours() }}:{{ comment.date.getMinutes() + 1 }}:{{
            comment.date.getSeconds()
          }}
        </p>
      </div>
    </div>
  </div>
  <div class="">
    <button class="sendComment" @click="sendComment">
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
        <path
          d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
        />
      </svg>
      Yorum Yap
    </button>
  </div>
</template>

<style scoped>
.yorumm {
  padding: 20px;
  width: 75%;
  height: 510px;
  margin: 0 auto;
  overflow: auto;
  background-color: lightgray;
}
.isim {
  margin-top: 20px;
}
.date {
  margin-top: 55px;
  text-align: end;
}
hr {
  margin: 0 auto;
  height: 3px;
  width: 19%;
  background-color: black;
}

.alinanyorum {
  background-color: white;
  word-wrap: break-word;
  margin-top: 10px;
  padding: 5px;
  width: 100%;
  height: 100px;
}
.sendComment {
  margin: 0 auto;
  margin-top: 5px;
  padding: 20px 20px;
  font-size: 20px;
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
}
svg {
  fill: #ffffff;
  margin-right: 5px;
}
.sendComment:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>
