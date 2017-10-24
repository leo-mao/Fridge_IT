<template>
  <div id="app">
    <navbar></navbar>

    <div class="container">
      <!-- error messages -->
      <errormessage v-for="errorMessage in errorMessages">
        {{ errorMessage }}
      </errormessage>

      <successmessage v-for="successMessage in successMessages">
        {{ successMessage }}
      </successmessage>

      <!-- components -->
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
  import Errormessage from './components/fragments/Error-message';
  import Successmessage from './components/fragments/Success-message';

  // scripts
  // import './scripts/burger-toggle';

  export default {
    name: 'app',
    components: {
      Navbar,
      Errormessage,
      Successmessage,
    },
    data() {
      return {
        errorMessages: [],
        successMessages: [],
      };
    },
  };
</script>

<style>

</style>
