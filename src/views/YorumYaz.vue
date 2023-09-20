<script setup>
import { useCommentStore } from '../stores/comment'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const newComment = ref(true)
const adUyari = ref(false)
const soyadUyari = ref(false)
const yorumUyari = ref(false)

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
  } else if (loginForm.value.comment && loginForm.value.username) {
    soyadUyari.value = true
    adUyari.value = false
    yorumUyari.value = false
  } else if (loginForm.value.username && loginForm.value.surname) {
    yorumUyari.value = true
    soyadUyari.value = false
    adUyari.value = false
  } else if (loginForm.value.comment && loginForm.value.surname) {
    adUyari.value = true
    soyadUyari.value = false
    yorumUyari.value = false
  } else if (loginForm.value.comment) {
    adUyari.value = true
    soyadUyari.value = true
    yorumUyari.value = false
  } else if (loginForm.value.surname) {
    adUyari.value = true
    yorumUyari.value = true
    soyadUyari.value = false
  } else if (loginForm.value.username) {
    yorumUyari.value = true
    soyadUyari.value = true
    adUyari.value = false
  } else {
    yorumUyari.value = true
    soyadUyari.value = true
    adUyari.value = true
  }
}
const commentDelete = () => {
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
        <div>
          <input
            type="text"
            class="giriss"
            v-model="loginForm.username"
            placeholder="Adınızı girin"
          />
        </div>
        <div v-if="adUyari" class="error">Lütfen ad alanını doldurunuz.</div>
      </div>
      <div>
        <div style="margin-top: 15px"><b class="adsoyad">Soyad</b></div>
        <div>
          <input
            type="text"
            class="giriss"
            v-model="loginForm.surname"
            placeholder="Soyadınızı girin"
          />
        </div>
        <div v-if="soyadUyari" class="error">Lütfen soyad alanını doldurunuz.</div>
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
        <div v-if="yorumUyari" class="error">Lütfen yorum alanını doldurunuz.</div>
      </div>
      <div>
        <div style="display: flex">
          <button class="button" @click="commentSubmit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512 "
              style="padding-right: 7.5px"
            >
              <path
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
              />
            </svg>
            Yorumu Ekle
          </button>
          <button class="button delete" @click="commentDelete">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512 "
              style="padding-right: 7.5px"
            >
              <path
                d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
              />
            </svg>
            Yorumunu Sil
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="yorumbutonlari">
      <button class="button view yann" @click="againComment">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
          style="padding-right: 7.5px"
        >
          <path
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
          />
        </svg>
        Tekrar Yorum At
      </button>
      <button class="button view" @click="viewComment">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
          style="padding-right: 7.5px"
        >
          <path
            d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"
          />
        </svg>
        Yorumları Görüntüle
      </button>
    </div>
  </div>
</template>

<style>
.giriss {
  width: 90%;
  margin-left: 35px;
  margin-top: 10px;
  height: 25px;
  padding-left: 5px;
}
.adsoyad {
  margin-left: 35px;
  margin-bottom: 0;
  display: inline-block;
}
.adsoyadyorum {
  margin: 30px 0 0 35px;
}
.title {
  margin-top: 25px;
  padding-top: 20px;
  margin-left: 275px;
  margin-bottom: 10px;
}
.yorum {
  height: 590px;
  width: 50%;
  background-color: rgb(227, 242, 253);
  margin: 0px auto;
}
.error {
  color: red;
  margin-top: 3px;
  margin-left: 35px;
}

.yorumbutonlari {
  width: 60%;
  height: 200px;
  margin-left: 450px;
  margin-top: 100px;
  text-align: center;
  display: flex;
}
.yann {
  margin-right: 35px;
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
  margin-left: 35px;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  animation: mySlide;
  animation-iteration-count: 1;
  animation-duration: 2s;
  margin-top: 10px;
  display: flex;
  align-items: center;
}
.delete {
  margin-left: 325px;
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
  margin-left: 35px;
  width: 100%;
  border: 1px solid #ccc;
  padding: 12px 15px 0 10px;
  resize: none;
  height: 200px;
}
</style>
