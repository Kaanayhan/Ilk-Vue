<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div class="entrance">
    <div class="registerForm">
      <h1>Kayıt</h1>
      <div class="submit"></div>
      <br />
      <div class="entry">
        <div class="frame">
          <div class="textSize">
            <div class="pBottom">İsim</div>
            <input type="text" placeholder="İsmini gir" class="inputButton" />
          </div>
          <div class="textSize">
            <div class="pBottom">Soyisim</div>
            <input type="text" placeholder="Soyismini gir" class="inputButton" />
          </div>
        </div>
        <div class="frame">
          <div class="textSize">
            <div class="pBottom">Email</div>
            <input type="email" placeholder="Emailini gir" class="inputButton" />
          </div>
          <div class="textSize">
            <div class="pBottom">Numara</div>
            <input type="phone" placeholder="Numaranı gir" class="inputButton" />
          </div>
        </div>
        <div class="frame">
          <div class="textSize">
            <div class="pBottom">Şifre</div>
            <input
              type="password"
              placeholder="Şifreni gir"
              class="inputButton"
              v-model="password"
              @input="validatePassword"
              @focus="showPasswordStrength"
              @blur="hidePasswordStrength"
            />
          </div>
          <div class="password-strength" :class="passwordStrengthClass" v-if="showStrength">
            {{ passwordStrength }}
          </div>

          <div class="textSize">
            <div class="pBottom">Tekrar Şifre</div>
            <input type="password" placeholder="Tekrar şifreni gir" class="inputButton" />
          </div>
        </div>
        <div class="">
          <div class="password-validation">
            <div class="password-validation-item">
              <i
                class="fa fa-times"
                style="font-size: 12px; margin-top: 1%; color: red"
                v-if="Yazisiniri"
              ></i>
              <i
                class="fa fa-check"
                style="font-size: 12px; margin-top: 1%; color: green"
                v-if="Yazisiniri === ''"
              ></i>
              Yazı Sınırı 8 olmalı
            </div>
            <div class="password-validation-item">
              <i
                class="fa fa-times"
                style="font-size: 12px; margin-top: 1%; color: red"
                v-if="büyükharf"
              ></i>
              <i
                class="fa fa-check"
                style="font-size: 12px; margin-top: 1%; color: green"
                v-if="büyükharf === ''"
              ></i>
              Büyük harf giriniz
            </div>
            <div class="password-validation-item">
              <i
                class="fa fa-times"
                style="font-size: 12px; margin-top: 1%; color: red"
                v-if="kücükharf"
              ></i>
              <i
                class="fa fa-check"
                style="font-size: 12px; margin-top: 1%; color: green"
                v-if="kücükharf === ''"
              ></i>
              Küçük harf giriniz
            </div>
            <div class="password-validation-item">
              <i
                class="fa fa-times"
                style="font-size: 12px; margin-top: 1%; color: red"
                v-if="sayi"
              ></i>
              <i
                class="fa fa-check"
                style="font-size: 12px; margin-top: 1%; color: green"
                v-if="sayi === ''"
              ></i>
              Sayı giriniz
            </div>
            <div class="password-validation-item">
              <i
                class="fa fa-times"
                style="font-size: 12px; margin-top: 1%; color: red"
                v-if="özelkarakter"
              ></i>
              <i
                class="fa fa-check"
                style="font-size: 12px; margin-top: 1%; color: green"
                v-if="özelkarakter === ''"
              ></i>
              Özel karakter giriniz
            </div>
          </div>
        </div>
        <h2>Cinsiyet</h2>
        <br />
        <div class="radyolar">
          <div><input type="radio" name="sa" />Erkek</div>
          <div class="radioo"><input type="radio" name="sa" />Kadın</div>
          <div class="radioo"><input type="radio" name="sa" class="sa" />Kuruvasan</div>
        </div>
        <input type="button" class="buttonn" value="Onayla" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const password = ref('')

    const Yazisiniri = computed(() => {
      const hasMinimumLength = password.value.length >= 8
      if (!hasMinimumLength) {
        return 'Yazı sınırı en az 8 olmalı'
      }
      return ''
    })
    const büyükharf = computed(() => {
      const hasUppercase = /[\p{Lu}]/u.test(password.value)
      if (!hasUppercase) {
        return 'Büyük harf giriniz'
      }
      return ''
    })
    const kücükharf = computed(() => {
      const hasLowercase = /[\p{Ll}]/u.test(password.value)
      if (!hasLowercase) {
        return 'Küçük harf giriniz'
      }
      return ''
    })
    const sayi = computed(() => {
      const hasNumber = /\d/.test(password.value)
      if (!hasNumber) {
        return 'Sayı giriniz'
      }
      return ''
    })
    const özelkarakter = computed(() => {
      const hasSpecialCharacter = /[!@#\$%\^&\*\(\)_\+{}\[\]:;<>,\.\?~\-]/.test(password.value)
      if (!hasSpecialCharacter) {
        return 'Özel karakter kullanın'
      }
      return ''
    })

    const validatePassword = () => {
      if (password.value.includes(' ')) {
        password.value = password.value.replace(/\s/g, '')
      }
    }

    return {
      password,
      Yazisiniri,
      büyükharf,
      kücükharf,
      sayi,
      özelkarakter,
      validatePassword
    }
  }
}
</script>

<style scoped>
.buttonn {
  margin-top: 5px;
  color: white;
  width: 100%;
  height: 35px;
  background: linear-gradient(90deg, hsl(210.58deg 61.18% 66.67%), hsl(276.38deg 41.23% 55.29%));
  border: none;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  cursor: pointer;
}
.pBottom {
  padding-bottom: 7px;
}
.bar {
  height: 25px;
  width: 100%;
  display: flex;
}
.radyolar {
  display: flex;
}
.radioo {
  margin-left: 250px;
}
.sal {
  width: 100%;
  height: 100%;
}
.entrance {
  font-weight: bold;
  padding-top: 30px;
  width: 100%;
  margin-top: 7.5%;
  height: 90%;
}
.registerForm {
  width: 50%;
  height: 50%;
  margin-left: 25%;
}
.submit {
  width: 10%;
  height: 1%;
  background: linear-gradient(90deg, hsl(210.58deg 61.18% 66.67%), hsl(276.38deg 41.23% 55.29%));
}
.entry {
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
}
.frame {
  display: flex;
  height: 75px;
  justify-content: space-between;
}
.textSize {
  font-size: large;
}
.inputButton {
  width: 200px;
  height: 33px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  border: none;
  padding: 10px;
}
.password-check {
  font-size: 1.5em;
  margin-left: 5px;
}
@media (max-width: 768px) {
  .pBottom {
    margin-top: 10px;
  }
  .registerForm {
    width: 90%;
    margin-left: 5%;
    margin-top: 20px;
  }
  .frame {
    flex-direction: column;
    margin-bottom: 75px;
  }
  .radioo {
    margin-left: 0;
  }
  .buttonn {
    width: 90%;
  }
  .textSize {
    font-size: medium;
  }
  .inputButton {
    width: 100%;
  }
  .radyolar {
    flex-direction: column;
  }
}
</style>
