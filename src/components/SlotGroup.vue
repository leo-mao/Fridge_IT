<template>
  <div>
    <hero>
      <span class="icon">
        <i class="fa fa-beer"></i>
      </span>
      Slots
      <div id="slots" class="columns is-multiline is-mobile">
        <SlotCanvas
          v-for="(slot, index) in slots"
          v-bind:slotID="slot.id"
          v-bind:color="resolveColor(slot.status).color"
          v-bind:colorBorder="resolveColor(slot.status).colorBorder"
          v-bind:isReserved="reservedCheck(slot.currentBottle.reservedBy,
                                          slot.currentBottle.reservedSince)"
          v-bind:key="slot.id"
        ></SlotCanvas>
      </div>
    </hero>
    <div style="display:none;">
      <img id="lock" src="../../static/lock.png">
    </div>
  </div>
</template>

<style>
  #slots {
    position: relative;
    top: 2rem;
  }
</style>

<script>
  import axios from 'axios';
  import Hero from './fragments/Hero';
  import SlotCanvas from './fragments/SlotCanvas';

  export default {
    components: {
      SlotCanvas,
      Hero,
    },
    created() {
      const URL = 'http://oslab1.hs-el.de:2080/slot/';
      axios.get(URL).then((slotResponse) => {
        // assign the slot informations to the vue data
        this.slots = slotResponse.data;
      }).catch((e) => {
        console.log(e);
      });
    },
    data() {
      return {
        slots: [],
      };
    },
    methods: {
      resolveColor(status) {
        const colorDisabled = '#a6a6a6';
        const colorEmpty = 'b9b9b9';
        const colorEmptyBorder = '#878787';
        const colorVeryWarm = '#ff7b6a';
        const colorVeryWarmBorder = '#f13f32';
        const colorMediumWarm = '#ff976a';
        const colorMediumWarmBorder = '#f17532';
        const colorMediumCold = '#6fcfff';
        const colorMediumColdBorder = '#46a2d4';
        const colorVeryCold = '#6fb9ff';
        const colorVeryColdBorder = '#468fd4';
        switch (status) {
          case 0:// cold
            return { color: colorVeryCold, colorBorder: colorVeryColdBorder };
          case 1:// medium_cold
            return { color: colorMediumCold, colorBorder: colorMediumColdBorder };
          case 2:// medium_warm
            return { color: colorMediumWarm, colorBorder: colorMediumWarmBorder };
          case 3:// warm
            return { color: colorVeryWarm, colorBorder: colorVeryWarmBorder };
          case 4:// empty
            return { color: colorEmpty, colorBorder: colorEmptyBorder };
          default:// disabled
            return { color: colorDisabled, colorBorder: colorDisabled };
        }
      },
      reservedCheck(reservedBy, reservedCheck) {
        return !((reservedBy === null) && (reservedCheck === null));
      },
    },
  };
</script>
