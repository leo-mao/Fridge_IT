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
  };

</script>
