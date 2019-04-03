<template>
  <input
    class="base-field-place"
    ref="base-field-place"
    type="text"
    @keydown.enter.prevent>
</template>

<script>
import loadGMApi from 'load-google-maps-api'
export default {
  props: {
    placeholder: {
      type: string,
      default: ''
    }
  },
  async mounted () {
    const gm = await loadGMApi({
      libraries: ['places'],
      key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY
    })
    this.autocomplete = new gm.places.Autocomplete(this.$refs['base-field-place'], {
      types: ['(cities)'],
      componentRestrictions: {
        country: 'aus'
      }
    })
    this.autocomplete.addListener('place_changed', this.onPlaceSelected)
  },
  methods: {
    onPlaceSelected () {
      const placeComponents = this.autocomplete.getPlace().address_components
      const place = {
        suburb: placeComponents.find(item => item.types[0] === 'locality').short_name,
        state: placeComponents.find(item => item.types[0] === 'administrative_area_level_1').short_name,
        postcode: placeComponents.find(item => item.types[0] === 'postal_code').short_name
      }
      this.$emit('placeChanged', place)
    }
  }
}
</script>

<style lang="scss" scoped>
.base-field-place {
  background: var(--color-white);
  border-radius: var(--border-radius-1);
  font-weight: var(--font-weight-bold);
  box-shadow: var(--box-shadow-1);
  padding: var(--spacing-2);
  font-size: 18px;
  line-height: normal;
}
</style>
