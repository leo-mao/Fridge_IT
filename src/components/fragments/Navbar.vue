<template>
  <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="img/fridge-it_logo.png"
             alt="Fridge-IT"
             width="112" height="28">
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
          <label>Fridge online&nbsp;</label>
          <i class="fa fa-plug" aria-hidden="true"></i>
        </span>
        <span class="navbar-item is-hidden-mobile">
          <span>8°C&nbsp;</span>
          <i class="fa fa-thermometer-quarter" aria-hidden="true"></i>
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
    background-color: #0000ee;
    margin-bottom: 1rem;
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
    background-color: #0000ee;
  }

</style>
