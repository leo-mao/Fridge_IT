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
  /*.slot {*/
  /*position: absolute;*/
  /*-moz-box-sizing: border-box;*/
  /*}*/

  #slots-group {
    position: relative;
    top: 2rem;
  }

  /*#slots-group {*/
  /*position: absolute;*/
  /*width: 100%;*/
  /*height: 900px;*/
  /*}*/
</style>

<script>
  /* eslint-disable linebreak-style */
  import Hero from './fragments/Hero';

  function drawCanvas(canvas, temp, filled) {
    const length = 200;
    const lineWidth = 0.1 * length;
    const buffer = 0;
    const padding = 2;
    const radius = (length / 2) - padding - lineWidth - buffer;
    if (canvas === undefined) {
      // eslint-disable-next-line
      console.log(' canvas is NULLLLLLLLLL');
    }
    canvas.setAttribute('height', length);
    canvas.setAttribute('width', length);
    const ctx = canvas.getContext('2d');
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
  function drawSlot(slot, temp, filled) {
    // eslint-disable-next-line
    const canvas = document.getElementById('slot-' + slotNr);
    return drawCanvas(canvas, temp, filled);
  }
  export default {
    components: {
      Hero,
    },
    // eslint-disable-next-line
    mounted: function () {
      const div = document.getElementById('slots-group');
      for (let slot = 0; slot < 24; slot += 1) {
        const column = document.createElement('div');
        column.setAttribute('class', 'column is-one-quarter');
        const href = document.createElement('a');
        // eslint-disable-next-line
        href.setAttribute('href', '/slot/' + slot);
        const canvas = document.createElement('canvas');
        // eslint-disable-next-line
        canvas.setAttribute('id', 'slot-' + slot);
        href.appendChild(canvas);
        drawCanvas(canvas, 3, true);
        column.appendChild(href);
        div.appendChild(column);
      }
//      2. Weise:
//      const boundRect = div.getBoundingClientRect();
//      const columns = 4;
//      const rows = 6;
//      const availableLength = Math.min(boundRect.width, boundRect.height);
//      console.log("availableLenght:" ,availableLength);
//      const gapHorizontal = 0.02 * availableLength;
//      const radius = (availableLength - ((columns + 1) * gapHorizontal)) / columns / 2;
//      console.log("radius", radius);
//      const gapVertical = (availableLength - (rows * radius * 2)) / (columns + 1);
//      let column;
//      let row;
//      let index = 0;
//
//      for (row = 0; row < rows; row += 1) {
//        for (column = 0; column < columns; column += 1) {
//          index += 1;
//          const href = document.createElement('a');
//          div.appendChild(href);
//          // eslint-disable-next-line
//          href.setAttribute('href', '/slot/' + row + '/' + column);
//          const canvas = document.createElement('canvas');
//          href.appendChild(canvas);
//          canvas.setAttribute('height', radius * 2);
//          canvas.setAttribute('width', radius * 2);
//          canvas.setAttribute('class', 'slot');
//          // eslint-disable-next-line
//          canvas.setAttribute('id', 'slot-' + index);
//
//          const ctx = canvas.getContext('2d');
//          ctx.beginPath();
//          ctx.lineWidth = 5;
//          ctx.arc(radius, radius, radius - 5, 0, 2 * Math.PI);
//          ctx.strokeStyle = '#8ba5ff';
//          ctx.fillStyle = '#FF0000';
//          ctx.stroke();
//          // eslint-disable-next-line
//          const x = boundRect.left + (gapHorizontal * (column + 1)) + ((radius * column * 3) + 1);
//           eslint-disable-next-line
//          const y = window.scrollY + boundRect.top + (gapVertical * (row + 1)) + (radius * ((row * 3) + 1));
//          // eslint-disable-next-line
//          canvas.style.left = x.toString() + 'px';
//          // eslint-disable-next-line
//          canvas.style.top = y.toString() + 'px';
//          canvas.style.backgroundColor = '#000000';
//        }
//      }
    },

  };

</script>

