<script setup>
import { useCommentStore } from '../stores/comment'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const newComment = ref(true)
const uyari = ref(false)

const router = useRouter()
const store = useCommentStore()
const loginForm = ref({
  username: null,
  surname: null,
  comment: null
})

const commentSubmit = () => {
  if (loginForm.value.comment && loginForm.value.username && loginForm.value.surname) {
    store.addComment(loginForm.value)
    newComment.value = false
  } else {
    uyari.value = true
  }
}
const commentDelete = () => {
  loginForm.value.username = null
  loginForm.value.surname = null
  loginForm.value.comment = null
}
const againComment = () => {
  router.push('/yorum')
  newComment.value = true
}
const viewComment = () => {
  router.push('/yorumlar')
}
</script>
<template>
  <div class="yorum" v-if="newComment">
    <div class="forum">
      <h1 class="title">Form Alanı</h1>
      <div>
        <div style="margin-top: 10px"><b class="adsoyad">Ad</b></div>
        <div><input type="text" class="giriss" v-model="loginForm.username" placeholder="Adınızı girin"/></div>
      </div>
      <div>
        <div style="margin-top: 15px"><b class="adsoyad">Soyad</b></div>
        <div><input type="text" class="giriss" v-model="loginForm.surname" placeholder="Soyadınızı girin"/></div>
      </div>
    </div>
    <div class="yorumalanı">
      <h2 class="adsoyadyorum">Yorumunuz</h2>
      <div style="margin-right: 75px">
        <textarea
          class="gönder"
          placeholder="Yorumunuzu girin"
          maxlength="200"
          v-model="loginForm.comment"
        ></textarea>
        <div v-if="uyari" class="error">Lütfen tüm alanları doldurunuz.</div>
      </div>
      <div>
        <button class="button" @click="commentSubmit">Yorumu Ekle</button>
        <button class="button delete" @click="commentDelete">Yorumu Sil</button>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="yorumbutonlari">
      <button class="button view yann" @click="againComment">Tekrar Yorum At</button>
      <button class="button view" @click="viewComment">Yorumları Görüntüle</button>
    </div>
  </div>
</template>

<style>
.giriss {
  width: 90%;
  margin-left: 50px;
  margin-top: 10px;
  height: 25px;
  padding-left: 5px;
}
.adsoyad {
  margin-left: 50px;
  margin-bottom: 0;
  display: inline-block;
}
.adsoyadyorum {
  margin: 30px 0 0 50px;
}
.title {
  margin-top: 25px;
  padding-top: 20px;
  margin-left: 275px;
  margin-bottom: 10px;
}
.yorum {
  height: 580px;
  width: 50%;
  background-color: rgb(227, 242, 253);
  margin: 0px auto;
}
.error {
  color: red;
  margin-top: 5px;
  margin-left: 50px;
}

.yorumbutonlari {
  width: 100%;
  height: 620px;
  text-align: center;
}
.yann {
  margin-right: 50px;
}
.button {
  padding: 15px 15px;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #04aa6d;
  border: none;
  margin-left: 50px;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  animation: mySlide;
  animation-iteration-count: 1;
  animation-duration: 2s;
  margin-top: 10px;
}
.delete {
  margin-left: 400px;
}
.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.view {
  margin-top: 15%;
}
.gönder {
  margin-top: 10px;
  margin-left: 50px;
  width: 100%;
  border: 1px solid #ccc;
  padding: 12px 15px 0 10px;
  resize: none;
  height: 200px;
}
</style>
