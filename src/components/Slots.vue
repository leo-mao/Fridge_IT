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

  function drawCanvas(canvas, temp, filled, size) {
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
      ctx.strokeStyle = '#868686';
      ctx.fillStyle = '#8E8E8E';
    } else if (temp > 4) {
      ctx.strokeStyle = '#C4584F';
      ctx.fillStyle = '#FF6F6F';
    } else {
      ctx.strokeStyle = '#316D96';
      ctx.fillStyle = '#6FC3FF';
    }
    ctx.beginPath();
    // eslint-disable-next-line
    ctx.arc(length / 2, length / 2, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  }

  // eslint-disable-next-line
  function drawSlot(slotNr, temp, filled, size) {
    // eslint-disable-next-line
    const canvas = document.getElementById('slot-' + slotNr);
    return drawCanvas(canvas, temp, filled, size);
  }

  function redrawSlot(slotNr, temp, filled, size) {
    // eslint-disable-next-line
//    const canvas = document.getElementById('slot-' + slotNr);
//    const ctx = canvas.getContext('2d');
//    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSlot(slotNr, temp, filled, size);
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
      drawCanvas(canvas, slotID % 8, true, size);
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
        windowWidth: window.innerWidth
      };
    },
    methods: {
      handleWindowResize(event) {
        this.windowWidth = event.currentTarget.innerWidth;
        for (let slot = 0; slot < this.amount; slot += 1) {
          redrawSlot(slot, slot % 8, true, this.windowWidth / 5);
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

