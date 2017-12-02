<template>
  <div class="column is-one-quarter">
    <slot name="router"></slot>
    <canvas v-bind:width="canvasSize" v-bind:height="canvasSize"
            v-draw-canvas="{color: colorVeryCold, colorBorder: colorVeryColdBorder}">
    </canvas>
  </div>
</template>

<script>
  export default {
    props: ['slotID', 'tempStatus'],
    data() {
      return {
        canvasSize: window.innerWidth / 5 > 173.2 ? 173.2 : window.innerWidth / 5,
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
      };
    },
    directives: {
      drawCanvas(canvasElement, binding) {
        // eslint-disable-next-line
        console.log('binding value:' + canvasElement.width);
        const size = canvasElement.width;
        const borderWidth = size * 0.1;
        const radius = (size / 2) - borderWidth;
        const ctx = canvasElement.getContext('2d');
        ctx.clearRect(0, 0, size, size);
        ctx.lineWidth = borderWidth;
        ctx.fillStyle = binding.value.color;
        ctx.strokeStyle = binding.value.colorBorder;
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
      },
    },
    methods: {
      resizeHandler() {
        this.canvasSize = window.innerWidth / 5 > 173.2 ? 173.2 : window.innerWidth / 5;
      },

    },
    mounted() {
      window.addEventListener('resize', this.resizeHandler);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.resizeHandler);
    },
  };
</script>
