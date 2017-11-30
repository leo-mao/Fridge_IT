<template>
  <div>
    <!-- title -->
    <hero>
    <span class="icon">
      <i class="fa fa-beer"></i>
    </span>
      Slot {{ $route.params.id }}
      <template slot="subtitle">You can change the application settings here.</template>
    </hero>

    <div class="is-bold">
      <table class="table" width="100%">
        <tr>
          <td>Current temperature:</td>
          <td>8°C</td>
        </tr>
        <tr>
          <td>Row:</td>
          <td>{{ slot.slotRow }}</td>
        </tr>
        <tr>
          <td>Column:</td>
          <td>{{ slot.slotColumn }}</td>
        </tr>
        <tr>
          <td>Added:</td>
          <td>{{ timeIn }}</td>
        </tr>
      </table>
    </div>

    <linechart :data="chartData" :options="chartOptions" :width="500" :height="200"></linechart>
  </div>
</template>

<script>
  /* eslint-disable no-new,new-parens,import/no-duplicates */
  /* eslint-disable no-console */
  /* eslint-disable prefer-template */
  /* eslint-disable no-return-assign  */

  import axios from 'axios';
  import Hero from './fragments/Hero';
  import Linechart from './fragments/Linechart';

  export default {
    components: {
      Hero,
      Linechart,
    },
    // Fetches posts when the component is created.
    created() {
      // url for the slot
      let url = 'http://oslab1.hs-el.de:2080/slot/' + this.$route.params.id + '/';

      // get request
      axios.get(url).then(response => this.slot = response.data)
      .catch((e) => {
        console.log(e);
      });

      // url for the temperatures
      url = 'http://oslab1.hs-el.de:2080/bottle/' + this.slot.currentBottle.id + '/temperature/';
      console.log(url);
      // get request
      axios.get(url).then((response) => {
        this.bottle = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
    },
    data() {
      return {
        slot: {
          slotRow: -1,
          slotColumn: -1,
          currentBottle: {
            id: -1,
          },
        },
        bottle: {
          timestamp: -1,
          temperature: -1,
        },
        chartData: {
          labels: ['10 o`clock', '11 o`clock', '12 o`clock', '13 o`clock', '14 o`clock', '15 o`clock', '16 o`clock'],
          datasets: [
            {
              label: 'Slot temperature of the last seven hours',
              data: [20, 18, 17, 10, 7, 8, 8],
              borderColor: 'blue',
              backgroundColor: 'transparent',
            },
          ],
        },
        chartOptions: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: false,
              },
            }],
          },
        },
      };
    },
    computed: {
      timeIn() {
        const date = new Date(this.slot.currentBottle.timeIn);
        const time = date.getDay() + '.' + date.getMonth() + '.' + date.getFullYear() + ' - ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        return time;
      },
    },
  };
</script>

<style>
  .is-bold {
    font-weight: bolder;
    margin-left: 1rem;
    margin-right: 1rem;
  }
</style>
