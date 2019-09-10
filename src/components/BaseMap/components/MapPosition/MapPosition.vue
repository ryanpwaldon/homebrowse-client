<script>
export default {
  props: {
    lngLat: {
      type: Array,
      required: false
    },
    padding: {
      type: Number,
      default: 100
    },
    maxZoom: {
      type: Number,
      default: 13
    },
    duration: {
      type: Number,
      default: 2000
    }
  },
  watch: {
    lngLat (val) {
      if (!val) return
      this.$parent.map.fitBounds(val, {
        padding: this.padding,
        maxZoom: this.maxZoom,
        duration: this.duration
      })
    }
  },
  render (h) {
    return null
  }
}
</script>
