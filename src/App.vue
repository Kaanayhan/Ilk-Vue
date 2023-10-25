<template>
  <nav class="navbar">
    <div class="navbar-container container">
      <input type="checkbox" />
      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
      <ul class="menu-items">
        <li><router-link to="/hakkimizda" class="color"> Hakkımızda </router-link></li>
        <li><router-link to="/sosyal" class="color"> Sosyal </router-link></li>
        <li><router-link to="/projeler" class="color"> Projeler </router-link></li>
        <li><router-link to="/kayit" class="color"> Kayıt </router-link></li>
        <li><router-link to="/yorum" class="color"> Yorum </router-link></li>
        <li><router-link to="/havadurumu" class="color"> Ülkeler </router-link></li>
      </ul>
      <router-link to="/hakkimizda" class="color"
        ><img src="../src/assets/voli.png" class="logo"
      /></router-link>
    </div>
  </nav>
  <RouterView></RouterView>
</template>
<script>
export default {
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  },
  mounted() {
    document.addEventListener('click', this.closeMenu)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeMenu)
  }
}
</script>
<style>
*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.html {
  font-size: 62.5%;
}

body {
  font-family: 'Poppins', sans-serif;
}
.logo {
  width: 100px;
  height: 75px;
  margin-top: 17.5px;
}

.container {
  max-width: 1200px;
  width: 90%;
  margin: auto;
}

.btn {
  display: inline-block;
  padding: 0.5em 1.5em;
  text-decoration: none;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  margin-top: 1em;
  text-transform: uppercase;
  font-weight: small;
}

.btn-primary {
  color: #fff;
  background: #16a083;
}

.btn-primary:hover {
  background: #117964;
  transition: background 0.3s ease-in-out;
}

.navbar input[type='checkbox'],
.navbar .hamburger-lines {
  display: none;
}

.navbar {
  display: block;
  position: fixed;
  width: 100%;
  top: 0;
  background: #fff;
  color: #000;
  z-index: 1000;
  box-shadow: 0px 5px 10px 0px #aaa;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  height: 64px;
  align-items: center;
}

.menu-items {
  order: 2;
  display: flex;
}

.menu-items li {
  list-style: none;
  margin-left: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.menu-items a {
  text-decoration: none;
  color: #444;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
}

.menu-items a:hover {
  color: #117964;
  transition: color 0.3s ease-in-out;
}

.logo {
  order: 1;
  font-size: 2.3rem;
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .navbar {
    opacity: 0.95;
  }

  .navbar-container input[type='checkbox'],
  .navbar-container .hamburger-lines {
    display: block;
  }

  .navbar-container {
    display: block;
    position: relative;
    height: 64px;
  }

  .navbar-container input[type='checkbox'] {
    position: absolute;
    display: block;
    height: 32px;
    width: 30px;
    top: 20px;
    left: 20px;
    z-index: 5;
    opacity: 0;
  }

  .navbar-container .hamburger-lines {
    display: block;
    height: 23px;
    width: 35px;
    position: absolute;
    top: 17px;
    left: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .navbar-container .hamburger-lines .line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: #333;
  }

  .navbar-container .hamburger-lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
  }

  .navbar-container .hamburger-lines .line2 {
    transition: transform 0.2s ease-in-out;
  }

  .navbar-container .hamburger-lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
  }

  .navbar .menu-items {
    padding-top: 100px;
    background: #fff;
    height: 100vh;
    max-width: 300px;
    transform: translate(-150%);
    display: flex;
    flex-direction: column;
    margin-left: -40px;
    padding-left: 50px;
    transition: transform 0.5s ease-in-out;
    box-shadow: 5px 0px 10px 0px #aaa;
  }

  .navbar .menu-items li {
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
    font-weight: 500;
  }

  .logo {
    position: absolute;
    top: -5px;
    right: 5px;
    margin-top: 0;
  }

  .navbar-container input[type='checkbox']:checked ~ .menu-items {
    transform: translateX(0);
  }

  .navbar-container input[type='checkbox']:checked ~ .hamburger-lines .line1 {
    transform: rotate(35deg);
  }

  .navbar-container input[type='checkbox']:checked ~ .hamburger-lines .line2 {
    transform: scaleY(0);
  }

  .navbar-container input[type='checkbox']:checked ~ .hamburger-lines .line3 {
    transform: rotate(-35deg);
  }
}
</style>
