<template>
  <div class="base-chart">
    <BaseLabel class="title" :text="title"/>
    <div class="card">
      <div class="chart-container">
        <canvas class="chart" ref="chart"/>
        <div class="tooltip-container" :style="{left: tooltip.x + 'px'}">
          <div class="tooltip" :style="{top: tooltip.y + 'px'}">
            <BaseLabel :text="tooltip.title"/>
            <div class="x-value">{{ tooltip.xValue | formatNumber(format) }}</div>
            <div class="y-value">{{ tooltip.yValue }}</div>
          </div>
          <div class="vertical-line"><div class="circle" :style="{top: tooltip.y + 'px'}"/></div>
        </div>
      </div>
      <div class="y-labels">
        <BaseLabel v-for="(label, index) in yLabels" :text="label | formatNumber(format)" :key="index"/>
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
    selectedId: {
      type: String,
      required: true
    },
    format: {
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
      plugins: [{
        beforeDatasetUpdate: chart => {
          this.yLabels = chart.scales['y-axis-0'].ticks
          this.xLabels = chart.scales['x-axis-0'].ticks.slice(1)
          chart.resize()
        }
      }],
      type: 'line',
      data: {
        labels: this.data[0] && this.data[0].dates,
        datasets: this.createDatasets(this.data)
      },
      options: {
        animation: { duration: 0 },
        scales: {
          yAxes: [{ ticks: { display: false, maxTicksLimit: 10 }, gridLines: { drawTicks: false, display: false, drawBorder: false } }],
          xAxes: [{ ticks: { display: false }, gridLines: { drawTicks: false, display: false, drawBorder: false } }]
        },
        layout: { padding: { top: 20, right: 0, bottom: 20, left: 0 } },
        legend: { display: false },
        tooltips: {
          intersect: false,
          enabled: false,
          custom: tooltip => {
            if (!tooltip.dataPoints) return
            this.tooltip = {
              title: this.data[tooltip.dataPoints[0].datasetIndex].name,
              xValue: tooltip.dataPoints[0].value,
              yValue: tooltip.dataPoints[0].label,
              x: tooltip.dataPoints[0].x,
              y: tooltip.dataPoints[0].y
            }
          }
        }
      }
    })
  },
  data () {
    return {
      chart: null,
      yLabels: [],
      xLabels: [],
      tooltip: {
        title: '',
        xValue: '',
        yValue: '',
        x: '',
        y: ''
      }
    }
  },
  watch: {
    data (data) {
      this.chart.data.datasets = this.createDatasets(data)
      this.chart.update()
    },
    selectedId (id) {
      this.chart.data.datasets = this.createDatasets(this.data)
      this.chart.update()
    }
  },
  methods: {
    createDatasets (data) {
      return data.map(item => ({
        id: data.id,
        spanGaps: true,
        data: item.values,
        lineTension: 0.3,
        fill: false,
        borderColor: item.id === this.selectedId ? '#4B96E8' : '#d5eafd',
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
.title {
  position: absolute;
  top: 0;
  left: 0;
  margin: var(--spacing-2);
  background: var(--color-white-1);
  border-radius: var( --border-radius-1);
  padding: var( --spacing-5);
  z-index: 2;
  display: none;
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
  position: relative;
  cursor: crosshair;
  &:hover .tooltip-container {
    opacity: 1;
  }
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
.tooltip-container {
  opacity: 0;
  top: 0;
  height: 100%;
  position: absolute;
  padding: 0 var(--spacing-4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transform: translateX(-50%);
  z-index: 3;
  pointer-events: none;
}
.tooltip {
  min-width: 110px;
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -100%) translateY(calc(-1 * var(--spacing-2)));
  background: var(--color-black-1);
  border-radius: var(--border-radius-1);
  font-weight: var(--font-weight-bold);
  color: var(--color-gray-1);
  padding: var(--spacing-3) var(--spacing-4);
  flex-direction: column;
  text-align: center;
  text-transform: uppercase;
  .base-label {
    margin-bottom: var(--spacing-4);
  }
}
.x-value {
  font-size: 24px;
  color: var(--color-white-1);
  margin-bottom: var(--spacing-4);
}
.y-value {
  font-size: 14px;
}
.vertical-line {
  height: 100%;
  width: 1px;
  background: var(--color-gray-2);
}
.circle {
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  border-radius: 100px;
  width: 10px;
  height: 10px;
  background: var(--color-red-1);
}
</style>
