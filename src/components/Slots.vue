<template>
  <!-- title -->
  <hero>
      <span class="icon">
        <i class="fa fa-beer"></i>
      </span>
    Slots
    <!--<template slot="subtitle">Here you can see the bottle slots.</template>-->
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
//    const colorPrimary = '#3d8dc6';
//    const colorPrimaryDark = '#2f6d99';
//    const colorAccent = '#ff7040';
    const colorText = '#0e0e0e';
//    const colorDisabled = '#a6a6a6';
    const colorEmpty = 'b9b9b9';
    const colorEmptyBorder = '#878787';
    const colorVeryWarm = '#fd4d79';
    const colorVeryWarmBorder = '#c42c52';
//    const colorMediumWarm = '#ff976a';
//    const colorMediumWarmBorder = '#f17532';
//    const colorMediumCold = '#6fc4ff';
//    const colorMediumColdBorder = '#4699d4';
    const colorVeryCold = '#3d8dc6';
    const colorVeryColdBorder = '#2f6d99';

    const length = size;
    const lineWidth = 0.1 * length;
    const buffer = 0;
    const padding = 2;
    const radius = (length / 2) - padding - lineWidth - buffer;

    canvas.setAttribute('height', length);
    canvas.setAttribute('width', length);
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = lineWidth;
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
    ctx.font = '30px Comic Sans MS';
    ctx.textAlign = 'center';
    ctx.fillStyle = colorText;
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    // eslint-disable-next-line
    console.log('text:', text);
  }

  // eslint-disable-next-line
  function drawSlot(slotNr, temp, filled, size, text) {
    // eslint-disable-next-line
    const canvas = document.getElementById('slot-' + slotNr);
    return drawCanvas(canvas, temp, filled, size, text);
  }

  function redrawSlot(slotNr, temp, filled, size, text) {
    drawSlot(slotNr, temp, filled, size, text);
  }

  function initialAllSlots(slotAmount, size) {
    const div = document.getElementById('slots-group');
    for (let slotID = 0; slotID < slotAmount; slotID += 1) {
      const column = document.createElement('div');
      column.setAttribute('class', 'column is-one-quarter');
      const href = document.createElement('a');
      // eslint-disable-next-line
      href.setAttribute('href', '/slot/' + slotID);
      const canvas = document.createElement('canvas');
      // eslint-disable-next-line
      canvas.setAttribute('id', 'slot-' + slotID);
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
        for (let slotID = 0; slotID < this.amount; slotID += 1) {
          redrawSlot(slotID, slotID % 8, true, this.windowWidth / 5, slotID);
        }
      },
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleWindowResize);
    },
    // eslint-disable-next-line
    mounted() {
      initialAllSlots(this.amount, this.windowWidth / 5);
      window.addEventListener('resize', this.handleWindowResize);
    },
  };
</script>

