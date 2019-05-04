<template>
  <div class="base-chart">
    <canvas class="chart" ref="chart"/>
  </div>
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
    this.chart = new Chart(this.$refs['chart'], {
      type: 'line',
      data: {
        labels: this.data.labels,
        datasets: [ {
          data: this.data.data,
          lineTension: 0.2,
          fill: false,
          borderColor: '#4B96E8',
          pointRadius: 0
        } ]
      },
      options: {
        scales: {
          yAxes: [{ ticks: { display: false }, gridLines: { drawTicks: false, display: true, drawBorder: false, color: '#f2f2f2' } }],
          xAxes: [{ ticks: { display: false }, gridLines: { drawTicks: false, display: false, drawBorder: false } }]
        },
        layout: { padding: 1 },
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
  padding-top: 75%;
  border-radius: var(--border-radius-1);
  height: 0;
  position: relative;
}
.chart {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
</style>
