<template>
  <!-- title -->
  <hero>
      <span class="icon">
        <i class="fa fa-beer"></i>
      </span>
    Slots
    <div id="slots-group" class="columns is-multiline is-mobile"></div>
  </hero>
</template>

<style>
  #slots-group {
    position: relative;
    top: 2rem;
  }
</style>

<script>
  /* eslint-disable linebreak-style */
  import Hero from './fragments/Hero';

  function drawCanvas(canvas, temp, filled, size, text) {
//    const colorDisabled = '#a6a6a6';
    const colorEmpty = 'b9b9b9';
    const colorEmptyBorder = '#878787';
    const colorVeryWarm = '#ff7b6a';
    const colorVeryWarmBorder = '#f13f32';
//    const colorMediumWarm = '#ff976a';
//    const colorMediumWarmBorder = '#f17532';
//    const colorMediumCold = '#6fcfff';
//    const colorMediumColdBorder = '#46a2d4';
    const colorVeryCold = '#6fb9ff';
    const colorVeryColdBorder = '#468fd4';

    const length = size;
    const borderWidth = 0.1 * length;
    const buffer = 0;
    const padding = 2;
    const radius = (length / 2) - padding - borderWidth - buffer;

    canvas.setAttribute('height', length);
    canvas.setAttribute('width', length);
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = borderWidth;
    if (!filled) {
      ctx.strokeStyle = colorEmptyBorder;
      ctx.fillStyle = colorEmpty;
    } else if (temp > 4) {
      ctx.strokeStyle = colorVeryWarmBorder;
      ctx.fillStyle = colorVeryWarm;
    } else {
      ctx.strokeStyle = colorVeryColdBorder;
      ctx.fillStyle = colorVeryCold;
    }
    ctx.beginPath();
    // eslint-disable-next-line
    ctx.arc(length / 2, length / 2, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    // eslint-disable-next-line
    console.log('text:', text);
  }

  // eslint-disable-next-line
  function putSlot(slotNr, temp, filled, size, text) {
    // eslint-disable-next-line
    const canvas = document.getElementById('slot-' + slotNr);
    return drawCanvas(canvas, temp, filled, size, text);
  }

  function updateSlot(slotNr, temp, filled, size, text) {
    putSlot(slotNr, temp, filled, size, text);
  }

  function initialAllSlots(slotAmount, size) {
    const div = document.getElementById('slots-group');
    const TAG = 'slot';
    const DASH = '-';
    const slash = '/';
    for (let slotID = 0; slotID < slotAmount; slotID += 1) {
      const column = document.createElement('div');
      column.setAttribute('class', 'column is-one-quarter');
      const href = document.createElement('a');
      href.setAttribute('href', TAG + slash + slotID);
      const canvas = document.createElement('canvas');
      canvas.setAttribute('id', TAG + DASH + slotID);
      canvas.setAttribute('ref', TAG + DASH + slotID);
      href.appendChild(canvas);
      drawCanvas(canvas, slotID % 8, true, size, slotID);
      column.appendChild(href);
      div.appendChild(column);
    }
  }

  export default {
    components: {
      Hero,
    },
    data() {
      return {
        amount: 24,
        windowWidth: window.innerWidth,
      };
    },
    methods: {
      handleWindowResize(event) {
        this.windowWidth = event.currentTarget.innerWidth;
        const canvasSize = this.windowWidth / 5 > 173.2 ? 173.2 : this.windowWidth / 5;
        for (let slotID = 0; slotID < this.amount; slotID += 1) {
          updateSlot(slotID, slotID % 8, true, canvasSize, slotID);
        }
      },
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleWindowResize);
    },
    // eslint-disable-next-line
    mounted() {
      const canvasSize = this.windowWidth / 5 > 173.2 ? 173.2 : this.windowWidth / 5;
      initialAllSlots(this.amount, canvasSize);
      window.addEventListener('resize', this.handleWindowResize);
    },
  };
</script>

