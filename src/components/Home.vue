<template>
  <div>
    <successmessage v-if="showSuccess">
      Logged in successfully
    </successmessage>
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

  import Successmessage from './fragments/Success-message';
  import Hero from './fragments/Hero';

  export default {
    components: {
      Successmessage,
      Hero,
    },
  };

</script>
