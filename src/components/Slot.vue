<template>
  <div>
    <!-- title -->
    <hero>
    <span class="icon">
      <i class="fa fa-beer"></i>
    </span>
      Slot {{ $route.params.id }}
      <template slot="subtitle">Here you can see detailed informations about the slot {{ $route.params.id }}</template>
    </hero>

    <div v-if="showError">
      <errormessage>
        Error while loading informations about slot {{ $route.params.id }}. There is no slot with this id.
        <router-link :to="{name: 'Slots'}">
          Return to slots
        </router-link>
      </errormessage>
    </div>
    <div v-else>
      <div class="is-bold">
        <table class="table" width="100%">
          <tr>
            <td>Current temperature:</td>
            <td>{{ slotTemp }}°C</td>
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
      <div v-if="loaded">
        <linechart :chart-data="chartData" :width="500" :height="200"></linechart>
      </div>
      <div v-else align="center">
        Loading...
      </div>
    </div>
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
  import Errormessage from './fragments/Error-message';

  export default {
    components: {
      Hero,
      Linechart,
      Errormessage,
    },
    created() {
      const SLOT_URL = 'http://oslab1.hs-el.de:2080/slot/' + this.$route.params.id + '/';

      // slot request
      axios.get(SLOT_URL).then((slotResponse) => {
        this.slot = slotResponse.data;
        const BOTTLE_URL = 'http://oslab1.hs-el.de:2080/bottle/' + slotResponse.data.currentBottle.id + '/temperature/?start=-70&end=0';

        // bottle request
        axios.get(BOTTLE_URL).then((bottleResponse) => {
          // iterate through the temperature array
          const labelArray = [];
          const dataArray = [];
          for (let i = 0; i < bottleResponse.data.length; i += 1) {
            const date = new Date(bottleResponse.data[i].timestamp);
            if (date.getHours() % 10 === 0) {
              labelArray.push(('00' + date.getHours()).slice(-2) + ':' + ('00' + date.getMinutes()).slice(-2));
              dataArray.push(Math.round(bottleResponse.data[i].temperature * 100) / 100);
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

          // add actual temperature to data
          this.slotTemp = Math.round(dataArray[dataArray.length - 1] * 100) / 100;
          this.loaded = true;
        })
          .catch(() => {
            this.showError = true;
          });
      })
        .catch(() => {
          this.showError = true;
        });
    },
    data() {
      return {
        slot: {
          slotRow: 'Loading...',
          slotColumn: 'Loading...',
          slotTemp: 'Loading...',
          currentBottle: {
            id: -1,
          },
        },
        chartData: null,
        showError: false,
        loaded: false,
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
</script>

<style>
  .is-bold {
    font-weight: bolder;
    margin-left: 1rem;
    margin-right: 1rem;
  }
</style>
