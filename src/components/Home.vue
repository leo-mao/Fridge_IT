<template>
  <successmessage v-if="showSuccess">
    Logged in successfully
  </successmessage>
</template>

<script>
  import Successmessage from './fragments/Success-message';

  export default {
    components: {
      Successmessage,
    },
  };
</script>
