<template>
  <div>
    <!-- title -->
    <hero>
    <span class="icon">
      <i class="fa fa-beer"></i>
    </span>
      Slot {{ $route.params.id }}
      <template slot="subtitle"><label v-lang.slot_sub_hero></label> {{ $route.params.id }}</template>
    </hero>

    <div v-if="showError">
      <errormessage>
        <label v-lang.slot_error_text></label>
        <router-link :to="{name: 'Slots'}">
          Return to slots
        </router-link>
      </errormessage>
    </div>
    <div v-else>
      <div class="is-bold">
        <table class="table" width="100%">
          <tr>
            <td v-lang.slot_curr_temp></td>
            <td v-if="slotTemp === null" v-lang.loading></td>
            <td v-else>{{ slotTemp }}°C</td>
          </tr>
          <tr>
            <td v-lang.slot_row></td>
            <td v-if="slot.slotRow === null" v-lang.loading></td>
            <td v-else>{{ slot.slotRow }}</td>
          </tr>
          <tr>
            <td v-lang.slot_col></td>
            <td v-if="slot.slotColumn === null" v-lang.loading></td>
            <td v-else>{{ slot.slotColumn }}</td>
          </tr>
          <tr>
            <td v-lang.slot_added></td>
            <td>{{ timeIn }}</td>
          </tr>
          <tr>
            <td v-lang.slot_reserved></td>
            <td v-if="slot.currentBottle.reservedBy === ''" v-lang.loading></td>
            <td v-else>
              <div v-if="slot.reservedBy !== ''">
                <div class="field has-addons">
                  <div class="control">
                    <input type="text" class="input" @keyup.enter="reserve" v-model="reservedName" />
                  </div>
                  <div class="control">
                    <button class="button is-material-blue" @click="reserve">{{ this.translate('slot_reserve_button') }}</button>
                  </div>
                </div>
              </div>
            </td>
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
      const SLOT_URL = `https://oslab1.hs-el.de:2443/slot/${this.$route.params.id}/`;

      // slot request
      axios.get(SLOT_URL).then((slotResponse) => {
        this.slot = slotResponse.data;
        const BOTTLE_URL = `https://oslab1.hs-el.de:2443/bottle/${slotResponse.data.currentBottle.id}/temperature/?start=-8&end=0`;

        // bottle request
        axios.get(BOTTLE_URL).then((bottleResponse) => {
          const labelArray = [];
          const dataArray = [];
          for (let i = bottleResponse.data.length - 1; i >= 0; i -= 1) {
            const date = new Date(bottleResponse.data[i].timestamp);
            if (date.getHours() % 10 === 0) {
              const hours = (`00${date.getHours()}`).slice(-2);
              const minutes = (`00${date.getMinutes()}`).slice(-2);
              labelArray.push(`${hours}:${minutes}`);
              dataArray.push(Math.round(bottleResponse.data[i].temperature * 100) / 100);
            }
          }

          // fill the chart data
          this.chartData = {
            labels: labelArray,
            datasets: [
              {
                label: this.translate('slot_chart_label'),
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
        slotTemp: null,
        slot: {
          slotRow: null,
          slotColumn: null,
          currentBottle: {
            id: -1,
            reservedBy: '',
          },
        },
        chartData: null,
        showError: false,
        loaded: false,
        reservedName: '',
      };
    },
    computed: {
      timeIn() {
        const date = new Date(this.slot.currentBottle.timeIn);
        const day = (`00${date.getDate()}`).slice(-2);
        const month = (`00${date.getMonth() + 1}`).slice(-2);
        const year = date.getFullYear();
        const hours = (`00${date.getHours()}`).slice(-2);
        const minutes = (`00${date.getMinutes()}`).slice(-2);
        const seconds = (`00${date.getSeconds()}`).slice(-2);
        const time = `${day}.${month}.${year} - ${hours}:${minutes}:${seconds}`;
        return time;
      },
    },
    methods: {
      reserve() {
        const RESERVE_URL = `https://oslab1.hs-el.de:2443/slot/${this.$route.params.id}/reserve/`;
        console.log(RESERVE_URL);
        // slot request
        axios.post(RESERVE_URL, {
          userName: this.reservedName,
        });
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

  .is-material-blue {
    background-color: #3F51B5;
  }

  .is-material-blue:hover {
    background-color: #3F51BF;
    color: white;
  }
</style>
