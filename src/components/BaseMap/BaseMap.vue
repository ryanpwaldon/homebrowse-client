<template>
  <div class="base-map" ref="base-map">
    <slot/>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import ResizeObserver from 'resize-observer-polyfill'
import { mapState } from 'vuex'
export default {
  mounted () {
    this.initMap()
    this.addParentResizeListener()
  },
  beforeDestroy () {
    this.removeParentResizeListener()
  },
  data () {
    return {
      map: null
    }
  },
  computed: {
    ...mapState('entities/suburbs', {
      suburb: state => state.items[state.selectedId]
    }),
    ...mapState('entities/properties', {
      properties: state => state.items
    })
  },
  watch: {
    suburb (suburb) {
      this.updateBoundingBox(suburb)
    }
  },
  methods: {
    initMap () {
      mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_ACCESS_TOKEN
      this.map = new mapboxgl.Map({
        container: this.$refs['base-map'],
        style: 'mapbox://styles/ryanpwaldon/cjt9k8ni20c0u1frl3y0u95fm?fresh=true',
        center: new mapboxgl.LngLat(151.209900, -33.865143),
        zoom: 13
      })
    },
    updateBoundingBox (suburb) {
      if (!suburb) {
        this.map.setLayoutProperty('place-label-focus', 'visibility', 'none')
        this.map.setLayoutProperty('suburb-outline-focus', 'visibility', 'none')
        this.map.setLayoutProperty('suburb-fill-focus', 'visibility', 'none')
        return
      }
      const filter = (combination, comparison) => [ combination, [comparison, 'STE_NAME16', suburb.stateLong], [comparison, 'SSC_NAME16', suburb.name] ]
      this.map.setFilter('place-label-focus', filter('all', '=='))
      this.map.setFilter('suburb-fill-focus', filter('any', '!='))
      this.map.setFilter('suburb-outline-focus', filter('all', '=='))
      this.map.fitBounds(suburb.boundingBox, { padding: 100, maxZoom: 13, duration: 2000 })
      this.map.setLayoutProperty('place-label-focus', 'visibility', 'visible')
      this.map.setLayoutProperty('suburb-outline-focus', 'visibility', 'visible')
      this.map.setLayoutProperty('suburb-fill-focus', 'visibility', 'visible')
    },
    addParentResizeListener () {
      this.resizeObserver = new ResizeObserver(([entry]) => this.map.resize())
      this.resizeObserver.observe(this.$refs['base-map'])
    },
    removeParentResizeListener () {
      this.resizeObserver.disconnect()
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
