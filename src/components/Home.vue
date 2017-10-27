<template>
  <successmessage v-if="showSuccess">
    Logged in successfully
  </successmessage>
</template>

<script>
  /* eslint-disable linebreak-style */

  import Successmessage from './fragments/Success-message';

  export default {
    components: {
      Successmessage,
    },
  };
</script>
