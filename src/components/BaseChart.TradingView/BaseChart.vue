<template>
  <div class="base-chart">
    <BaseLabel :text="title"/>
    <div ref="chart" class="chart"/>
  </div>
</template>

<script>
import { createChart } from 'lightweight-charts'
import BaseLabel from '@/components/BaseLabel/BaseLabel'
import { mapGetters } from 'vuex'
import ResizeObserver from 'resize-observer-polyfill'
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
    this.chart = createChart(this.$refs['chart'], {
      timeScale: {
        fixLeftEdge: true,
        lockVisibleTimeRangeOnResize: true
      },
      priceScale: {
        position: 'right',
        mode: 1,
        autoScale: false,
        invertScale: true,
        alignLabels: false,
        borderVisible: true,
        borderColor: '#555ffd',
        scaleMargins: {
          top: 0.30,
          bottom: 0.25
        }
      }
    })
    this.chart.disableBranding()
    this.addParentResizeListener()
    this.lineSeries = this.chart.addLineSeries()
    this.lineSeries.setData(this.data)
  },
  beforeDestroy () {
    this.removeParentResizeListener()
  },
  data () {
    return {
      chart: null,
      lineSeries: []
    }
  },
  watch: {
    data (value) {
      this.lineSeries.setData(value)
    }
  },
  methods: {
    removeParentResizeListener () {
      this.resizeObserver.disconnect()
    },
    addParentResizeListener () {
      this.resizeObserver = new ResizeObserver(([entry]) => {
        const { width, height } = entry.contentRect
        this.chart.applyOptions({ width, height })
      })
      this.resizeObserver.observe(this.$refs['chart'])
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
  height: 400px;
  border-radius: var(--border-radius-1);
  box-shadow: var(--box-shadow-1);
  background: var(--color-white-1);
  position: relative;
}
</style>
