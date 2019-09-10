<script>
import autocompleteService from '@/services/autocompleteService/autocompleteService'
export default {
  props: {
    layer: {
      type: String,
      required: true
    }
  },
  mounted () {
    this.$parent.map.on('load', () => {
      this.addLayer()
      this.addListeners()
    })
  },
  data () {
    return {
      lastHovered: null
    }
  },
  methods: {
    addLayer () {
      this.$parent.map.addLayer({
        'id': 'suburb-hover',
        'type': 'fill',
        'source': 'composite',
        'source-layer': 'shapefile-17kwhr',
        'paint': {
          'fill-color': 'rgba(0, 0, 0, 0.05)',
          'fill-opacity': [ 'case', ['boolean', ['feature-state', 'hovered'], false], 1, 0 ]
        }
      })
    },
    addListeners () {
      this.$parent.map.on('mousemove', 'suburb-hover', e => {
        if (!e.features) return
        const id = e.features && e.features[0].id
        if (this.lastHoveredId) this.$parent.map.setFeatureState({ id: this.lastHoveredId, source: 'composite', sourceLayer: 'shapefile-17kwhr' }, { hovered: false })
        this.$parent.map.setFeatureState({ id, source: 'composite', sourceLayer: 'shapefile-17kwhr' }, { hovered: true })
        this.lastHoveredId = id
      })
      this.$parent.map.on('mouseleave', 'suburb-hover', e => {
        this.$parent.map.setFeatureState({ id: this.lastHoveredId, source: 'composite', sourceLayer: 'shapefile-17kwhr' }, { hovered: false })
      })
      this.$parent.map.on('click', 'suburb-hover', async e => {
        if (!e.features) return
        const { SSC_NAME16: suburb, STE_NAME16: state } = e.features[0].properties
        const [ suggestion ] = await autocompleteService.findAll(`${suburb}, ${state}`)
        if (!this.$route.fullPath.includes('/workspace/suburb')) this.$router.push('/workspace/suburb')
        this.$store.dispatch('entities/suburbs/addItem', suggestion)
      })
    }
  },
  render (h) {
    return null
  }
}
</script>
