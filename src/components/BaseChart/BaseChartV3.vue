<template>
  <div class="base-chart">
    <BaseLabel :text="title"/>
    <div class="card">
      <div class="chart-container">
        <canvas class="chart" ref="chart"/>
      </div>
      <div class="y-labels">
        <BaseLabel v-for="(label, index) in yLabels" :text="label | formatNumber('price')" :key="index"/>
      </div>
      <div class="x-labels">
        <BaseLabel v-for="(label, index) in xLabels" :text="label" :key="index"/>
      </div>
      <div class="space"/>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'
import BaseLabel from '@/components/BaseLabel/BaseLabel'
import { mapGetters } from 'vuex'
export default {
  components: {
    BaseLabel
  },
  props: {
    title: {
      type: String,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  },
  mounted () {
    console.log('Chart mounted')
    this.chart = new Chart(this.$refs['chart'], {
      plugins: [{
        afterDatasetsUpdate: chart => {
          console.log('After data sets update')
          this.yLabels = chart.scales['y-axis-0'].ticks
          this.xLabels = chart.scales['x-axis-0'].ticks.slice(1)
        }
      }],
      type: 'line',
      data: {
        labels: this.data[0] && this.data[0].dates,
        datasets: this.createDatasets(this.data)
      },
      options: {
        scales: {
          yAxes: [{ ticks: { display: false, stepSize: 100000, maxTicksLimit: 10 }, gridLines: { drawTicks: false, display: false, drawBorder: false } }],
          xAxes: [{ ticks: { display: false }, gridLines: { drawTicks: false, display: false, drawBorder: false } }]
        },
        layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } },
        legend: { display: false },
        tooltips: {
          intersect: false,
          enabled: false,
          axis: 'x'
        }
      }
    })
  },
  data () {
    return {
      chart: null,
      yLabels: [],
      xLabels: []
    }
  },
  watch: {
    data (data) {
      console.log('Data watcher')
      this.chart.data.datasets = this.createDatasets(data)
      this.chart.update()
    }
  },
  methods: {
    createDatasets (data) {
      return data.map(item => ({
        spanGaps: true,
        data: item.values,
        lineTension: 0.3,
        fill: false,
        borderColor: '#4B96E8',
        pointRadius: 0,
        borderWidth: 2
      }))
    }
  }
}
</script>

<style lang="scss" scoped>
.base-chart {
  width: 100%;
  position: relative;
}
.base-label {
  margin-bottom: var(--spacing-4);
}
.card {
  display: grid;
  width: 100%;
  position: relative;
  grid-template-areas: "a b" "c d";
  grid-template-columns: 1fr auto;
  border-radius: var(--border-radius-1);
  box-shadow: var(--box-shadow-1);
  background: var(--color-white-1);
}
.chart-container {
  width: 100%;
  min-width: 0;
}
.x-labels,
.y-labels {
  display: flex;
  justify-content: space-around;
  .base-label {
    margin-bottom: 0;
  }
}
.y-labels {
  grid-area: b;
  padding: 0 var(--spacing-4);
  border-left: var(--border-1);
  flex-direction: column;
  .base-label {
    text-align: right;
  }
}
.x-labels {
  grid-area: c;
  padding: var(--spacing-4) 0;
  border-top: var(--border-1);
  .base-label {
    width: 100%;
    text-align: center;
    transform: translateX(50%);
  }
}
.space {
  grid-area: d;
  border-top: var(--border-1);
}
</style>
