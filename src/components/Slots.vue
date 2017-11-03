<template>
  <!-- title -->
  <hero>
      <span class="icon">
        <i class="fa fa-beer"></i>
      </span>
    Slots
    <template slot="subtitle">Here you can see the bottle slots.</template>
  </hero>
</template>

<script>
  /* eslint-disable linebreak-style */
  import Hero from './fragments/Hero';

  export default {
    components: {
      Hero,
    },
  };
</script>
