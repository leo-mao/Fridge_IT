<template>
  <div>
    <hero>
      <span class="icon">
        <i class="fa fa-home"></i>
      </span>
      Home
      <template slot="subtitle">Welcome to the Fridge-IT WebApp</template>
    </hero>
  </div>
</template>

<script>
  import Successmessage from './fragments/Success-message';
  import Hero from './fragments/Hero';
  import axios from 'axios';
  import Linechart from './fragments/Linechart';
  
  export default {
    components: {
      Successmessage,
      Hero,
    },
    created() {
      const FRIDGE_URL = 'http://oslab1.hs-el.de:2080/fridge/status/';

      // slot request
      axios.get(FRIDGE_URL).then((fridgeResponse) => {
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
        posts: [],
        errors: [],
      };
    },
  };
</script>
