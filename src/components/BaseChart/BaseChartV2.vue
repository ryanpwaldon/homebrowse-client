<template>
  <div class="base-chart" @click="updateTicks">
    <BaseLabel :text="title"/>
    <div class="card">
      <div class="chart-container">
        <canvas class="chart" ref="chart"/>
      </div>
      <div class="y-labels">
        <BaseLabel v-for="(label, index) in yLabels" :text="label" :key="index"/>
      </div>
      <!-- <div class="x-labels">
        <BaseLabel v-for="(label, index) in xLabels" :text="label" :key="index"/>
      </div>
      <div class="space"/> -->
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
    this.chart = new Chart(this.$refs['chart'], {
      type: 'line',
      data: {
        labels: this.data[0] && this.data[0].dates
      },
      options: {
        animation: { duration: 0 },
        scales: {
          yAxes: [{ ticks: { display: false }, gridLines: { drawTicks: false, display: false, drawBorder: false } }],
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
      xLabels: [],
      console: console
    }
  },
  methods: {
    updateTicks () {
      console.log(this)
      this.chart.data.labels = this.data[0] && this.data[0].dates
      const datasets = this.data.map(item => ({
        spanGaps: true,
        data: item.values,
        lineTension: 0.2,
        fill: false,
        borderColor: '#4B96E8',
        pointRadius: 0
      }))
      this.chart.data.datasets = datasets
      let str = ''
      for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
        str = str + 'A'
      }
      this.$set(this.yLabels, 0, str)
      // this.chart.update()
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
  display: flex;
  width: 100%;
  // position: relative;
  // grid-template-areas: "a b" "c d";
  // grid-template-columns: 1fr auto;
  border-radius: var(--border-radius-1);
  box-shadow: var(--box-shadow-1);
  background: var(--color-white-1);
}
.chart-container {
  width: 100%;
  min-width: 0;
  position: relative;
}
.x-labels,
.y-labels {
  .base-label {
    margin-bottom: 0;
  }
}
.y-labels {
  grid-area: b;
  padding: 0 var(--spacing-4);
  border-left: var(--border-1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.x-labels {
  grid-area: c;
  padding: var(--spacing-4) 0;
  border-top: var(--border-1);
  display: flex;
  justify-content: space-around;
}
.space {
  grid-area: d;
  border-top: var(--border-1);
}
</style>
