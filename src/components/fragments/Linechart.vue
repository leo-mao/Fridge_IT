<script>
  import { Line, mixins } from 'vue-chartjs';

  const { reactiveProp } = mixins;

  export default {
    extends: Line,
    mixins: [reactiveProp],
    mounted() {
      // this.chartData is created in the mixin.
      // If you want to pass options please create a local options object
      this.renderChart(this.chartData, {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false,
            },
          }],
          xAxes: [{
            display: true,
            labelString: 'probability',
          }],
        },
      });
    },
  };

  /*
  // LineChart.js
  import { Line, mixins } from 'vue-chartjs';
  
  const { reactiveProp } = mixins;

  export default {
    extends: Line,
    props: ['data'],
    mixins: [reactiveProp],
    mounted() {
      this.renderChart(this.data, {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: false,
              },
            }],
          },
      });
    },
  };
  */
</script>