<template>
  <div>
    <hero>
      <span class="icon">
        <i class="fa fa-beer"></i>
      </span>
      Slots
      <div class="columns is-multiline is-mobile">
        <SlotCanvas>
          <route-link slot="router" :to="{ name: 'Slot', params: { id: 0 }}"></route-link>
        </SlotCanvas>
        <SlotCanvas></SlotCanvas>
        <SlotCanvas></SlotCanvas>
        <SlotCanvas></SlotCanvas>
        <SlotCanvas></SlotCanvas>
        <SlotCanvas></SlotCanvas>
        <SlotCanvas></SlotCanvas>
      </div>
    </hero>

  </div>
</template>

<script>
  /* eslint-disable linebreak-style */

  import Hero from './fragments/Hero';
  import SlotCanvas from './fragments/SlotCanvas';

  export default {
    components: {
      SlotCanvas,
      Hero,
    },
  };
</script>
