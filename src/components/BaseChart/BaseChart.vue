<template>
  <div class="base-chart">
    <BaseLabel :text="title"/>
    <canvas class="chart" ref="chart"/>
  </div>
</template>

<script>
import Chart from 'chart.js'
import BaseLabel from '@/components/BaseLabel/BaseLabel'
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true
    }
  },
  components: {
    BaseLabel
  },
  mounted () {
    Chart.defaults.LineWithLine = Chart.defaults.line
    Chart.controllers.LineWithLine = Chart.controllers.line.extend({
      draw: function (ease) {
        Chart.controllers.line.prototype.draw.call(this, ease)
        if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
          let activePoint = this.chart.tooltip._active[0]
          let ctx = this.chart.ctx
          let x = activePoint.tooltipPosition().x
          let topY = this.chart.scales['y-axis-0'].top
          let bottomY = this.chart.scales['y-axis-0'].bottom
          ctx.save()
          ctx.beginPath()
          ctx.moveTo(x, topY)
          ctx.lineTo(x, bottomY)
          ctx.lineWidth = 2
          ctx.strokeStyle = '#4B96E8'
          ctx.stroke()
          ctx.restore()
        }
      }
    })
    const ctx = this.$refs['chart'].getContext('2d')
    const gradient = ctx.createLinearGradient(0, 500, 0, 100)
    gradient.addColorStop(0, 'rgba(75, 151, 232, 0)')
    gradient.addColorStop(0.2, 'rgba(75, 151, 232, 0)')
    gradient.addColorStop(1, 'rgba(75, 151, 232, 0.2)')
    this.chart = new Chart(this.$refs['chart'], {
      type: 'LineWithLine',
      data: {
        labels: this.data.labels,
        datasets: [ {
          data: this.data.data,
          lineTension: 0.2,
          fill: true,
          backgroundColor: gradient,
          borderColor: '#4B96E8',
          pointRadius: 0
        } ]
      },
      options: {
        scales: {
          yAxes: [{ ticks: { display: false }, gridLines: { drawTicks: false, display: false, drawBorder: false } }],
          xAxes: [{ ticks: { display: false }, gridLines: { drawTicks: false, display: false, drawBorder: false } }]
        },
        layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } },
        legend: { display: false },
        tooltips: { intersect: false, axis: 'x' },
        hover: {
          animationDuration: 2
        }
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
.base-label {
  margin-bottom: var(--spacing-4);
}
.chart {
  width: 100%;
  border-radius: var(--border-radius-1);
  background: var(--color-gray-5);
}
</style>
