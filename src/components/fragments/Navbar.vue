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
        <router-link :to="{name: 'Home'}" class="navbar-item" v-on:click.native="navbarMenuIsActive = false">
          <span class="icon"><i class="fa fa-home"></i></span>
          <label>Home</label>
        </router-link>
        <router-link :to="{name: 'Slots'}"  class="navbar-item" v-on:click.native="navbarMenuIsActive = false">
          <span class="icon"><i class="fa fa-beer"></i></span>
          Slots
        </router-link>
      </div>

      <div class="navbar-end">
        <router-link :to="{name: 'Settings'}"  class="navbar-item" v-on:click.native="navbarMenuIsActive = false">
          <span class="icon"><i class="fa fa-gear"></i></span>
          Settings
        </router-link>
        <router-link :to="{name: 'Login'}"  class="navbar-item" v-on:click.native="navbarMenuIsActive = false">
          <span class="icon"><i class="fa fa-user"></i></span>
          Login
        </router-link>
        <span class="navbar-item is-hidden-mobile no-item">
          <i class="fa fa-plug" aria-hidden="true"></i>
          <label>&nbsp;Fridge {{ fridgeStatus }}</label>
        </span>
        <span class="navbar-item is-hidden-mobile no-item">
          <i class="fa fa-thermometer-quarter" aria-hidden="true"></i>
          <span>&nbsp;{{ frigeTemperature }}°C</span>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    props: ['frigeTemperature', 'fridgeStatus'],
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

  .no-item {
    color: #bbbbbb;
  }
</style>
