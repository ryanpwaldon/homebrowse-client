<template>
  <div class="base-map" ref="base-map"/>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import ResizeObserver from 'resize-observer-polyfill'
import { mapGetters } from 'vuex'
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
      hoveredItem: null,
      stateMap: {
        NSW: 'New South Wales',
        QLD: 'Queensland',
        VIC: 'Victoria',
        TAS: 'Tasmania',
        NT: 'Northern Territory',
        SA: 'South Australia',
        WA: 'Western Australia',
        ACT: 'Australian Capital Territory'
      }
    }
  },
  computed: {
    ...mapGetters({
      boundingBox: 'dashboardModule/boundingBox',
      suburbUnformatted: 'dashboardModule/suburb'
    }),
    suburb () {
      return {
        name: this.suburbUnformatted.name,
        state: this.stateMap[this.suburbUnformatted.state]
      }
    }
  },
  watch: {
    boundingBox (boundingBox) {
      if (boundingBox) this.updateBoundingBox(boundingBox)
    }
  },
  methods: {
    initMap () {
      mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_ACCESS_TOKEN
      this.map = new mapboxgl.Map({
        container: this.$refs['base-map'],
        style: 'mapbox://styles/ryanpwaldon/cjt9k8ni20c0u1frl3y0u95fm?fresh=true',
        bounds: [ new mapboxgl.LngLat(113.16000067720864, -10.5955313927184), new mapboxgl.LngLat(153.57087049622987, -43.57483696227055) ],
        fitBoundsOptions: { padding: 100 }
      })
      this.map.on('load', () => {
        this.addSuburbHoverListeners()
      })
    },
    removeParentResizeListener () {
      this.resizeObserver.disconnect()
    },
    addParentResizeListener () {
      this.resizeObserver = new ResizeObserver(([entry]) => this.map.resize())
      this.resizeObserver.observe(this.$refs['base-map'])
    },
    addSuburbHoverListeners () {
      this.map.setPaintProperty('australian-suburbs-fill', 'fill-color', '#007aff')
      this.map.setPaintProperty('australian-suburbs-fill', 'fill-opacity', [ 'case', ['boolean', ['feature-state', 'hover'], false], 0.1, 0 ])
      this.map.on('mousemove', 'australian-suburbs-fill', e => {
        if (e.features.length > 0) {
          if (this.hoveredItem) {
            this.map.setFeatureState({ source: 'composite', sourceLayer: 'Australian_Suburbs-a88yh2', id: this.hoveredItem }, { hover: false })
          }
          this.hoveredItem = e.features[0].id
          this.map.setFeatureState({ source: 'composite', sourceLayer: 'Australian_Suburbs-a88yh2', id: this.hoveredItem }, { hover: true })
        }
      })
      this.map.on('mouseleave', 'australian-suburbs-fill', () => {
        if (this.hoveredItem) {
          this.map.setFeatureState({ source: 'composite', sourceLayer: 'Australian_Suburbs-a88yh2', id: this.hoveredItem }, { hover: false })
        }
        this.hoveredItem = null
      })
    },
    updateBoundingBox (boundingBox) {
      const filter = operator => [ 'all', [operator, 'STE_NAME16', this.suburb.state], [operator, 'SSC_NAME16', this.suburb.name] ]
      this.map.setFilter('place-label-focus', filter('=='))
      this.map.setFilter('suburb-fill-focus', filter('=='))
      this.map.setFilter('suburb-outline-focus', filter('=='))
      this.map.fitBounds(boundingBox, { padding: 100, maxZoom: 13, duration: 2000 })
    }
  }
}
</script>

<style lang="scss" scoped>
.base-map {
  width: 100%;
  height: 100%;
  box-shadow: var(--box-shadow-1);
  background: var(--color-light-gray-2);
}
</style>

<style>
.mapboxgl-canvas:focus {
  outline: 0;
}
</style>
