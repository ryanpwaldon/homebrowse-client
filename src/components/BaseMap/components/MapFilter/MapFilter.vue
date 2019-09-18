<script>
export default {
  props: {
    layer: {
      type: String,
      required: true
    },
    expression: {
      type: Array,
      required: true
    }
  },
  beforeDestroy () {
    !this.$parent.destroyed && this.$parent.map.setLayoutProperty(this.label, 'visibility', 'none')
  },
  watch: {
    expression (expression) {
      this.$parent.map.setFilter(this.layer, expression)
      this.$parent.map.setLayoutProperty(this.layer, 'visibility', 'visible')
    }
  },
  render (h) {
    return null
  }
}
</script>
