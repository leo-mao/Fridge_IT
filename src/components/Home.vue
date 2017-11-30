<template>
  <div>
    <hero>
      <span class="icon">
        <i class="fa fa-home"></i>
      </span>
      Home
      <template slot="subtitle">Welcome to the Fridge-IT WebApp</template>
    </hero>
  </div>
</template>

<script>
  /* eslint-disable linebreak-style */
  /* eslint-disable no-console */
  /* eslint-disable prefer-template */

  import axios from 'axios';
  import Successmessage from './fragments/Success-message';
  import Hero from './fragments/Hero';

  export default {
    components: {
      Successmessage,
      Hero,
    },
    data() {
      return {
        posts: [],
        errors: [],
      };
    },
    // Fetches posts when the component is created.
    created() {
      axios.get('http://oslab1.hs-el.de:2080/slot/', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': [
            'GET',
            'POST',
            'PUT',
            'DELETE',
          ],
          'Access-Control-Allow-Headers': 'Authorization',
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    },
  };

</script>
