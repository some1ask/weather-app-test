<template>
    <div>
<div v-if="!propsLoaded">Loading...</div>
<div v-else>
  <canvas :ref="`myChart${graphId}`"></canvas>
</div>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'Chart',
  watch: {
    graphInfo: {
      handler(newVal, oldVal) {
        if (oldVal !== newVal) {
          this.parseDate();

          if (this.chart !== null) {
            this.chart.data.labels = this.days.map((row) => `${new Date(row.dt * 1000).getUTCHours()}:00`);
            this.chart.data.datasets[0].data = this.days.map((row) => row.main.temp);
            this.chart.update();
          } else {
            this.propsLoaded = true;

            // this.createGraph(this.days);
          }
        }
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    createGraph(arr) {
      const ctx = this.$refs[`myChart${this.graphId}`].getContext('2d');
      // eslint-disable-next-line no-new
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: arr.length > 0 ? arr.map((row) => `${new Date(row.dt * 1000).getUTCHours()}:00`) : '',
          datasets: [{
            label: 'Temperature',
            data: arr.length > 0 ? arr.map((row) => row.main.temp) : '',
            borderColor: 'rgb(255,108, 0)',
            backgroundColor: 'rgb(255,108, 0)',
          }],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
    parseDate() {
      this.days = this.graphInfo;
      this.days = this.days.splice(0, 8);
      console.log(this.days);
    },
  },
  mounted() {
    this.createGraph(this.days);
  },
  props: {
    graphId: {
      type: Number,
      default: 0,
    },
    graphInfo: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      propsLoaded: false,
      days: [],
      chart: null,
    };
  },
};
</script>

<style>

</style>
