<template>
  <div class="base-map" ref="base-map" @click="getSuburbs()"/>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import ResizeObserver from 'resize-observer-polyfill'
export default {
  mounted () {
    this.initMap()
    this.watchParentResize()
  },
  beforeDestroy () {
    this.resizeObserver.disconnect()
  },
  methods: {
    initMap () {
      mapboxgl.accessToken = 'pk.eyJ1IjoicnlhbnB3YWxkb24iLCJhIjoiY2poMTJ5NWhwM3Y3NzJ5bWx6ejYwYzIxbiJ9.sZp7vhuVlaMI0pSO0ZRNjg'
      this.map = new mapboxgl.Map({
        container: this.$refs['base-map'],
        center: new mapboxgl.LngLat(151.21640854149786, -33.85469085821871),
        style: 'mapbox://styles/ryanpwaldon/cjt9k8ni20c0u1frl3y0u95fm',
        zoom: 12
      })
      this.hoveredStateId = null
      this.map.on('load', () => {
        this.map.setPaintProperty('australian-suburbs-fill', 'fill-color', '#007aff')
        this.map.setPaintProperty('australian-suburbs-fill', 'fill-opacity', [
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          0.1,
          0
        ])
        this.map.on('mousemove', 'australian-suburbs-fill', e => {
          if (e.features.length > 0) {
            if (this.hoveredStateId) {
              this.map.setFeatureState({ source: 'composite', sourceLayer: 'Australian_Suburbs-a88yh2', id: this.hoveredStateId }, { hover: false })
            }
            this.hoveredStateId = e.features[0].id
            this.map.setFeatureState({ source: 'composite', sourceLayer: 'Australian_Suburbs-a88yh2', id: this.hoveredStateId }, { hover: true })
          }
        })
        // When the mouse leaves the state-fill layer, update the feature state of the
        // previously hovered feature.
        this.map.on('mouseleave', 'australian-suburbs-fill', () => {
          if (this.hoveredStateId) {
            this.map.setFeatureState({ source: 'composite', sourceLayer: 'Australian_Suburbs-a88yh2', id: this.hoveredStateId }, { hover: false })
          }
          this.hoveredStateId = null
        })
        this.map.on('click', 'place-label', e => {
          new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(e.features[0].properties.name)
            .addTo(this.map)
        })
        // Change the cursor to a pointer when the mouse is over the states layer.
        this.map.on('mouseenter', 'place-label', () => {
          this.map.getCanvas().style.cursor = 'pointer'
        })
        // Change it back to a pointer when it leaves.
        this.map.on('mouseleave', 'place-label', () => {
          this.map.getCanvas().style.cursor = ''
        })
      })
    },
    getSuburbs () {
      const suburbs = this.map.queryRenderedFeatures(undefined, { layers: ['place-label'] }).map(el => el.properties.SSC_NAME16)
    },
    watchParentResize () {
      this.resizeObserver = new ResizeObserver(([entry]) => this.map.resize())
      this.resizeObserver.observe(this.$refs['base-map'])
    }
  }
}
</script>

<style lang="scss" scoped>
.base-map {
  width: 100%;
  height: 100%;
  box-shadow: var(--box-shadow-1);
}
</style>

<style>
.mapboxgl-canvas:focus {
  outline: 0;
}
</style>
