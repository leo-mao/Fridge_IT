<template>
  <div>
    <hero>
      <span class="icon">
        <i class="fa fa-home"></i>
      </span>
			<label v-lang.home_hero></label>
      <template slot="subtitle"><label v-lang.home_sub_hero></label></template>
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
        {{ this.translate('loading') }}
      </div>
    </div>
  </div>
</template>

<script>
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
      const FRIDGE_URL = 'https://oslab1.hs-el.de:2443/fridge/statistics/?start=-100&end=0';

      // slot request
      axios.get(FRIDGE_URL).then((fridgeResponse) => {
        const labelArray = [];
        const dataArray = [];
        for (let i = fridgeResponse.data.length - 1; i >= 0; i -= 1) {
          const date = new Date(fridgeResponse.data[i].timestamp);
          if (date.getHours() % 10 === 0) {
            const hours = (`00${date.getHours()}`).slice(-2);
            const minutes = (`00${date.getMinutes()}`).slice(-2);
            labelArray.push(`${hours}:${minutes}`);
            dataArray.push(Math.round(fridgeResponse.data[i].temperature * 100) / 100);
          }
        }

        // fill the chart data
        this.chartData = {
          labels: labelArray,
          datasets: [
            {
              label: this.translate('home_chart_label'),
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
