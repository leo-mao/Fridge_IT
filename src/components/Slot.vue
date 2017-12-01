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
    <linechart :chart-data="chartData" :height="200"></linechart>
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
      const SLOT_URL = 'http://oslab1.hs-el.de:2080/slot/' + this.$route.params.id + '/';

      // slot request
      axios.get(SLOT_URL).then((slotResponse) => {
        // assign the slot informations to the vue data
        this.slot = slotResponse.data;

        // generate the url for the current bottleslotResponse.data.currentBottle.id
        const BOTTLE_URL = 'http://oslab1.hs-el.de:2080/bottle/' + slotResponse.data.currentBottle.id + '/temperature/?start=-70&end=0';
        console.log(BOTTLE_URL);

        // bottle request
        axios.get(BOTTLE_URL).then((bottleResponse) => {
          // iterate through the temperature array
          const labelArray = [];
          const dataArray = [];
          for (let i = 0; i < bottleResponse.data.length; i += 1) {
            const date = new Date(bottleResponse.data[i].timestamp);
            if (date.getHours() % 10 === 0) {
              labelArray.push(('00' + date.getHours()).slice(-2) + ':' + ('00' + date.getMinutes()).slice(-2));
              dataArray.push(bottleResponse.data[i].temperature);
            }
          }

          // fill the chart data
          this.chartData = {
            labels: labelArray,
            datasets: [
              {
                label: 'Slot temperature in °C',
                data: dataArray,
                borderColor: '#3F51B5',
                backgroundColor: 'transparent',
                borderWidth: 3,
                borderJoinStyle: 'miter',
              },
            ],
          };
        })
        .catch((e) => {
          console.log(e);
        });
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
        chartData: null,
      };
    },
    computed: {
      timeIn() {
        const date = new Date(this.slot.currentBottle.timeIn);
        const time = ('00' + date.getDay()).slice(-2) + '.' + ('00' + date.getMonth()).slice(-2) + '.' + date.getFullYear() + ' - ' + ('00' + date.getHours()).slice(-2) + ':' + ('00' + date.getMinutes()).slice(-2) + ':' + ('00' + date.getSeconds()).slice(-2);
        return time;
      },
    },
  };
  /*
  chartData() {
        return {
          labels: [],
          datasets: [
            {
              label: 'Slot temperature of the last seven hours',
              data: [],
              borderColor: 'blue',
              backgroundColor: 'transparent',
            },
          ],
        };
      },
  */
</script>

<style>
  .is-bold {
    font-weight: bolder;
    margin-left: 1rem;
    margin-right: 1rem;
  }
</style>
