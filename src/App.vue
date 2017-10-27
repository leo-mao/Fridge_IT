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
  /* eslint-disable linebreak-style */

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
  @media screen and (min-width: 1500px), print {
    .field {
      width: 50%;
    }
  }

  @media screen and (max-width: 1499px), print {
    .field {
      width: 100%;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
</style>
