<template>
  <canvas class="base-chart"/>
</template>

<script>
import Chart from 'chart.js'
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  mounted () {
    this.chart = new Chart(this.$el, {
      type: 'line',
      data: {
        labels: this.data.labels,
        datasets: [ { data: this.data.data, lineTension: 0.2, fill: false } ]
      },
      options: {
        scales: {
          yAxes: [{ ticks: { display: false }, gridLines: { drawTicks: false, display: false, drawBorder: false } }],
          xAxes: [{ ticks: { display: false }, gridLines: { drawTicks: false, display: false, drawBorder: false } }]
        },
        layout: { padding: 20 },
        legend: { display: false }
      }
    })
  },
  watch: {
    data (value) {
      this.chart.data.labels = value.labels
      this.chart.data.datasets[0].data = value.data
      this.chart.update()
    }
  }
}
</script>

<style lang="scss" scoped>
.base-chart {
  width: 100%;
  height: 500px;
  background: var(--color-light-gray-2);
  border-radius: var(--border-radius-1);
}
</style>
