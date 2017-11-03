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
          <td>1</td>
        </tr>
        <tr>
          <td>Column:</td>
          <td>1</td>
        </tr>
      </table>
    </div>

    <linechart :data="chartData" :options="chartOptions" :width="500" :height="200"></linechart>
  </div>
</template>

<script>
  /* eslint-disable no-new,new-parens,import/no-duplicates */

  import Hero from './fragments/Hero';
  import Linechart from './fragments/Linechart';

  export default {
    components: {
      Hero,
      Linechart,
    },
    data() {
      return {
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
  };
</script>

<style>
  .is-bold {
    font-weight: bolder;
    margin-left: 1rem;
    margin-right: 1rem;
  }
</style>
