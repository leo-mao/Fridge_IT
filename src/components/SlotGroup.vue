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
        colorDisabled: '#a6a6a6',
        colorEmpty: 'b9b9b9',
        colorEmptyBorder: '#878787',
        colorVeryWarm: '#ff7b6a',
        colorVeryWarmBorder: '#f13f32',
        colorMediumWarm: '#ff976a',
        colorMediumWarmBorder: '#f17532',
        colorMediumCold: '#6fcfff',
        colorMediumColdBorder: '#46a2d4',
        colorVeryCold: '#6fb9ff',
        colorVeryColdBorder: '#468fd4',
        slots: [],
      };
    },
    methods: {
      resolveColor(status) {
        switch (status) {
          case 0:// cold
            return { color: this.colorVeryCold, colorBorder: this.colorVeryColdBorder };
          case 1:// medium_cold
            return { color: this.colorMediumCold, colorBorder: this.colorMediumColdBorder };
          case 2:// medium_warm
            return { color: this.colorMediumWarm, colorBorder: this.colorMediumWarmBorder };
          case 3:// warm
            return { color: this.colorVeryWarm, colorBorder: this.colorVeryWarmBorder };
          case 4:// empty
            return { color: this.colorEmpty, colorBorder: this.colorEmptyBorder };
          default:// disabled
            return { color: this.colorDisabled, colorBorder: this.colorDisabled };
        }
      },
      reservedCheck(reservedBy, reservedCheck) {
        if ((reservedBy === null) && (reservedCheck === null)) {
          return false;
        }
        return true;
      },
    },
  };
</script>
