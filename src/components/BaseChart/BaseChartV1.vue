<template>
  <div class="base-chart">
    <BaseLabel :text="title"/>
    <div class="chart-container" @mouseenter="mouseOver = true" @mouseleave="mouseOver = false">
      <canvas class="chart" ref="chart"/>
      <div class="chart-labels-container" :style="{opacity: mouseOver ? 0 : 1}">
        <div class="chart-label max">{{ max | formatNumber('price') }}</div>
        <div class="chart-label min">{{ min | formatNumber('price') }}</div>
      </div>
      <div class="chart-tooltip-container" :style="{left: tooltip.x + 'px', opacity: mouseOver ? 1 : 0}">
        <div class="tooltip y">{{ tooltip.value | formatNumber('price') }}</div>
        <div class="vertical-line"><div class="circle" :style="{top: tooltip.y + 'px'}"/></div>
        <div class="tooltip x">{{ tooltip.label }}</div>
      </div>
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
    const ctx = this.$refs['chart'].getContext('2d')
    const gradient = ctx.createLinearGradient(0, 500, 0, 100)
    gradient.addColorStop(0, 'rgba(75, 151, 232, 0)')
    gradient.addColorStop(0.5, 'rgba(75, 151, 232, 0.05)')
    gradient.addColorStop(1, 'rgba(75, 151, 232, 0.4)')
    const datasets = this.data.map(item => ({
      spanGaps: true,
      data: item.values,
      lineTension: 0.2,
      fill: true,
      backgroundColor: gradient,
      borderColor: '#4B96E8',
      pointRadius: 0
    }))
    this.chart = new Chart(this.$refs['chart'], {
      type: 'line',
      data: { labels: this.data[0] && this.data[0].dates, datasets },
      options: {
        scales: {
          yAxes: [{ ticks: { display: false }, gridLines: { drawTicks: false, display: false, drawBorder: false } }],
          xAxes: [{ ticks: { display: false }, gridLines: { drawTicks: false, display: false, drawBorder: false } }]
        },
        animation: {
          duration: 0
        },
        layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } },
        legend: { display: false },
        tooltips: {
          intersect: false,
          axis: 'x',
          enabled: false,
          custom: tooltip => {
            if (!tooltip.dataPoints) return
            this.tooltip = {
              value: tooltip.dataPoints[0].value,
              label: tooltip.dataPoints[0].label,
              x: tooltip.dataPoints[0].x,
              y: tooltip.dataPoints[0].y
            }
          }
        },
        hover: {
          animationDuration: 2
        }
      }
    })
  },
  data () {
    return {
      chart: null,
      min: '-',
      max: '-',
      tooltip: {},
      mouseOver: false
    }
  },
  watch: {
    data (value) {
      const { labels, data } = value
      this.chart.data.labels = labels
      this.chart.data.datasets[0].data = data
      this.chart.update()
    }
  }
}
</script>

<style lang="scss" scoped>
.base-label {
  margin-bottom: var(--spacing-4);
}
.chart-container {
  position: relative;
}
.chart {
  width: 100%;
  border-radius: var(--border-radius-1);
  box-shadow: var(--box-shadow-1);
  background: var(--color-white-1);
}
.chart-labels-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.chart-label {
  right: 0;
  position: absolute;
  margin: var(--spacing-4);
  border-radius: var(--border-radius-2);
  background: var(--color-white-1);
  font-size: 12px;
  font-weight: var(--font-weight-medium);
  padding: var(--spacing-5) var(--spacing-4);
  &.max { top: 0; }
  &.min { bottom: 0; }
}
.chart-labels-container,
.chart-tooltip-container {
  transition: opacity 200ms ease-in-out;
}
.chart-tooltip-container {
  top: 0;
  height: 100%;
  position: absolute;
  padding: var(--spacing-4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transform: translateX(-50%);
  pointer-events: none;
}
.tooltip {
  font-size: 12px;
  background: var(--color-yellow-1);
  border-radius: var(--border-radius-2);
  font-weight: var(--font-weight-medium);
  padding: var(--spacing-5) var(--spacing-4);
  white-space: nowrap;
}
.vertical-line {
  height: 100%;
  width: 2px;
  background: var(--color-yellow-1);
}
.circle {
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  border: solid 2px var(--color-yellow-1);
  border-radius: 100px;
  width: 10px;
  height: 10px;
  background: var(--color-white-1);
}
</style>
