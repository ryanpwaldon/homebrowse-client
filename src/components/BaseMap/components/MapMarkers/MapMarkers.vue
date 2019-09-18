<script>
import differenceBy from 'lodash/differenceBy'
import mapboxgl from 'mapbox-gl'
export default {
  props: {
    markerDataArr: {
      type: Array,
      required: true
    },
    primary: {
      type: Boolean,
      default: false
    }
  },
  beforeDestroy () {
    !this.$parent.destroyed && Object.keys(this.markers).forEach(key => this.marker[key].remove())
  },
  data () {
    return {
      markers: {}
    }
  },
  watch: {
    markerDataArr (newArr, prevArr) {
      this.addMarkers(differenceBy(newArr, prevArr, 'id'))
      this.removeMarkers(differenceBy(prevArr, newArr, 'id'))
    }
  },
  methods: {
    addMarkers (markerDataArr) {
      markerDataArr.forEach(markerData => {
        if (!markerData || !markerData.lngLat[0] || !markerData.lngLat[1]) return
        this.markers[markerData.id] = new mapboxgl.Marker({
          color: this.primary ? 'var(--color-red-1)' : 'var(--color-gray-1)'
        }).setLngLat(markerData.lngLat).addTo(this.$parent.map)
      })
    },
    removeMarkers (markerDataArr) {
      markerDataArr.forEach(markerData => {
        if (!markerData || !markerData.lngLat[0] || !markerData.lngLat[1]) return
        this.markers[markerData.id].remove()
        delete this.markers[markerData.id]
      })
    }
  },
  render (h) {
    return null
  }
}
</script>
