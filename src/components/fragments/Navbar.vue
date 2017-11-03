<template>
  <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="../../assets/logo.png"
             alt="Fridge-IT">
      </a>
      <a class="navbar-burger" data-target="navMenu" @click="navbarMenuIsActive = !navbarMenuIsActive"
         :class="{ 'is-active' : navbarMenuIsActive }">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
    <div class="navbar-menu" id="navMenu" :class="{ 'is-active' : navbarMenuIsActive }">
      <!-- hidden on mobile -->
      <div class="navbar-start">
        <a class="navbar-item" href="/">
          <span class="icon"><i class="fa fa-home"></i></span>
          <label>Home</label>
        </a>
        <span class="navbar-item is-hidden-mobile">
          <i class="fa fa-plug" aria-hidden="true"></i>
          <label>&nbsp;Fridge online</label>
        </span>
        <span class="navbar-item is-hidden-mobile">
          <i class="fa fa-thermometer-quarter" aria-hidden="true"></i>
          <span>&nbsp;8°C</span>
        </span>
        <a class="navbar-item" href="/slots">
          <span class="icon"><i class="fa fa-beer"></i></span>
          Slots
        </a>
      </div>

      <div class="navbar-end">
        <a class="navbar-item" href="/settings">
          <span class="icon"><i class="fa fa-gear"></i></span>
          Settings
        </a>
        <a class="navbar-item" href="/login">
          <span class="icon"><i class="fa fa-user"></i></span>
          Login
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
  /* eslint-disable linebreak-style */

  export default {
    data() {
      return {
        navbarMenuIsActive: false,
      };
    },
  };
</script>

<style>
  .navbar {
    background-color: #3F51B5;
    /* margin-bottom: 1rem; */
  }

  .navbar-item {
    color: white;
  }

  .navbar-burger {
    color: white;
  }

  .navbar-burger:hover {
    color: white;
    border-radius: 2em;
  }

  .navbar-menu {
    background-color: #3F51B5;
  }

</style>
