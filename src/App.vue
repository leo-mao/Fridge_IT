<template>
  <div id="app">
    <navbar :frigeTemperature="frigeTemperature" :fridgeStatus="fridgeStatus"></navbar>

    <div class="container">
      <!-- components -->
      <router-view></router-view>
    </div>
    <footermobile :frigeTemperature="frigeTemperature" :fridgeStatus="fridgeStatus"></footermobile>
  </div>
</template>

<script>
  import axios from 'axios';

  // styles
  import '../node_modules/bulma/css/bulma.css';
  import '../node_modules/font-awesome/css/font-awesome.css';

  // fragments
  import Navbar from './components/fragments/Navbar';
  import Footermobile from './components/fragments/Footermobile';

  export default {
    name: 'app',
    components: {
      Navbar,
      Footermobile,
    },
    created() {
      this.$root.language = 'german';
      const FRIDGE_STATUS_URL = 'http://oslab1.hs-el.de:2080/fridge/status/';

      // fridge status request
      axios.get(FRIDGE_STATUS_URL).then((fridgeStatusResponse) => {
        this.frigeTemperature = fridgeStatusResponse.data.targetTemperature;
        this.fridgeStatus = 'online';
      });
    },
    data() {
      return {
        frigeTemperature: null,
        fridgeStatus: 'offline',
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

  .button {
    background-color: #0000ee;
    color: white;
    border-color: #0000ee
  }
</style>
