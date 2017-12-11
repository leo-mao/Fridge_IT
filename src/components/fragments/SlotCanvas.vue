<template>
  <div class="column is-one-quarter">
    <router-link :to="{ name: 'Slot', params: { id: slotID }}">
      <canvas v-bind:width="canvasSize"
              v-bind:height="canvasSize"
              v-draw-canvas="{
              color: color,
              colorBorder: colorBorder,
              isReserved: isReserved,
              byWhomReserved: byWhomReserved
            }">
    </canvas>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: ['slotID', 'color', 'colorBorder', 'isReserved', 'byWhomReserved'],
    data() {
      return {
        canvasSize: window.innerWidth / 5 > 173.2 ? 173.2 : window.innerWidth / 5,
      };
    },
    directives: {
      drawCanvas(canvasElement, binding) {
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
        // draw lock
        if (binding.value.isReserved) {
          const lock = document.getElementById('lock');
          const lockSize = size / 2;
          const lockPadding = size / 4;
          ctx.drawImage(lock, lockPadding, lockPadding, lockSize, lockSize);
        }
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
