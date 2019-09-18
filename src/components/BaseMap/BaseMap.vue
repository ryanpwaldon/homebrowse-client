<template>
  <div class="base-map">
    <slot v-if="map"/>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import ResizeObserver from 'resize-observer-polyfill'
export default {
  props: {
    center: {
      type: Array,
      default: () => [151.209900, -33.865143]
    },
    zoom: {
      type: Number,
      default: 13
    }
  },
  mounted () {
    this.initMap()
    this.addParentResizeListener()
  },
  beforeDestroy () {
    this.removeParentResizeListener()
    this.destroyed = true
    this.map.remove()
  },
  data () {
    return {
      map: null,
      destroyed: false
    }
  },
  methods: {
    initMap () {
      mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_ACCESS_TOKEN
      this.map = new mapboxgl.Map({
        style: 'mapbox://styles/ryanpwaldon/ck0cgprna4tbs1cnq4ztmhj5b?fresh=true',
        container: this.$el,
        center: this.center,
        zoom: this.zoom
      })
    },
    addParentResizeListener () {
      this.ro = new ResizeObserver(([entry]) => this.map.resize())
      this.ro.observe(this.$el)
    },
    removeParentResizeListener () {
      this.ro.disconnect()
    }
  }
}
</script>

<style lang="scss" scoped>
.base-map {
  width: 100%;
  height: 100%;
  border: var(--border-1);
  border-radius: var(--border-radius-1);
  background: var(--color-white-1);
}
::v-deep .mapboxgl-canvas:focus {
  outline: 0;
}
</style>
