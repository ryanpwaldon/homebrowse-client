<template>
  <input
    class="base-search-input-suburb"
    ref="base-search-input-suburb"
    placeholder="Search for a suburb"
    type="text"
    v-focus>
</template>

<script>
import loadGoogleMapsApi from 'load-google-maps-api'
import { mapState } from 'vuex'
export default {
  async mounted () {
    const gm = await loadGoogleMapsApi({
      libraries: ['places'],
      key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY
    })
    this.autocomplete = new gm.places.Autocomplete(
      this.$refs['base-search-input-suburb'],
      { types: ['(cities)'], componentRestrictions: { country: 'aus' } }
    )
    this.autocomplete.addListener('place_changed', this.updateFilter)
  },
  computed: mapState([
    'filter'
  ]),
  methods: {
    updateFilter () {
      const addressComponents = this.autocomplete.getPlace().address_components
      const filter = Object.assign({}, this.filter)
      filter.search = {
        suburb: addressComponents.find(item => item.types[0] === 'locality').short_name,
        state: addressComponents.find(item => item.types[0] === 'administrative_area_level_1').short_name,
        postcode: addressComponents.find(item => item.types[0] === 'postal_code').short_name
      }
      this.$store.commit('updateFilter', filter)
    }
  },
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="scss">
.pac-container {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  box-sizing: content-box !important;
  box-shadow: none !important;
  border-radius: 3px !important;
  margin-top: 5px;
  padding: 1px;
  border: none;
  /* border: 1px solid var(--color-medium-gray); */
  box-shadow: 0 0 4px rgba(0,0,0,.1) !important;
  margin-bottom: 20px;
}
.pac-item {
  border-top: none;
  line-height: inherit;
  padding: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  margin: 0 -1px;
}
.pac-item:first-of-type {
  border-top-left-radius: 3px !important;
  border-top-right-radius: 3px !important;
  margin-top: -1px !important;
}
.pac-item:last-of-type {
  border-bottom-left-radius: 3px !important;
  border-bottom-right-radius: 3px !important;
  margin-bottom: -1px !important;
}
.pac-item:hover, .pac-item-selected {
  background-color: var(--color-light-gray);
}
.pac-item span {
  font-size: 16px !important;
  font-weight: 300 !important;
}
.pac-item:last-of-type {
  border-bottom: none;
}
.pac-icon {
  display: none;
}
.pac-logo.hdpi::after {
  background-image: none;
  height: 0px !important;
  padding: 0px !important;
}
.pac-matched, .pac-item-query {
  color: var(--font-color-light);
  font-weight: 400 !important;
  font-size: 16px !important;
}
.pac-item-query .pac-matched {
  color: var(--font-color-dark);
  font-weight: 400 !important;
  font-size: 16px !important;
}
</style>
