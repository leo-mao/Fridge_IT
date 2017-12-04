<template>
  <div>
    <hero>
      <span class="icon">
        <i class="fa fa-home"></i>
      </span>
      Home
      <template slot="subtitle">Welcome to the Fridge-IT WebApp</template>
    </hero>
    <div v-if="showError">
      <errormessage>
        Server is unreachable.
      </errormessage>
    </div>
    <div v-else>
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
  import Successmessage from './fragments/Success-message';
  import Hero from './fragments/Hero';
  import Linechart from './fragments/Linechart';
  
  export default {
    components: {
      Successmessage,
      Hero,
      Linechart,
    },
    created() {
      const FRIDGE_URL = 'http://oslab1.hs-el.de:2080/fridge/statistics/?start=-100&end=0';

      // slot request
      axios.get(FRIDGE_URL).then((fridgeResponse) => {
        // console.log(fridgeResponse.data);
        const labelArray = [];
        const dataArray = [];
        for (let i = 0; i < fridgeResponse.data.length; i += 1) {
          const date = new Date(fridgeResponse.data[i].timestamp);
          if (date.getHours() % 10 === 0) {
            labelArray.push(('00' + date.getHours()).slice(-2) + ':' + ('00' + date.getMinutes()).slice(-2));
            dataArray.push(Math.round(fridgeResponse.data[i].temperature * 100) / 100);
          }
        }

        // fill the chart data
        this.chartData = {
          labels: labelArray,
          datasets: [
            {
              label: 'Fridge temperature in °C',
              data: dataArray,
              borderColor: '#3F51B5',
              backgroundColor: 'transparent',
              borderWidth: 3,
              borderJoinStyle: 'miter',
            },
          ],
        };
        this.loaded = true;
      })
      .catch(() => {
        this.showError = true;
      });
    },
    data() {
      return {
        showError: false,
        chartData: null,
        loaded: false,
      };
    },
  };

</script>
