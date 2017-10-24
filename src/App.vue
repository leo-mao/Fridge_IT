<template>
  <div id="app">
    <navbar></navbar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  // styles
  import '../node_modules/bulma/css/bulma.css';
  import '../node_modules/font-awesome/css/font-awesome.css';

  // fragments
  import Navbar from './components/fragments/Navbar';

  // scripts
  // import './scripts/burger-toggle';

  export default {
    name: 'app',
    components: {
      Navbar,
    },
  };
</script>

<style>

</style>
