<template>
  <div class="base-field-place">
    <input
      class="input-item"
      ref="input-item"
      :placeholder="placeholder"
      @keydown.enter="onEnter"
      type="text"
    >
    <div class="results-container"/>
  </div>
</template>

<script>
import loadGoogleMapsApi from 'load-google-maps-api'
import { inspect } from 'util'
export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    }
  },
  async mounted () {
    const gm = await loadGoogleMapsApi({
      libraries: ['places'],
      key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY
    })
    this.autocomplete = new gm.places.Autocomplete(this.$refs['input-item'], {
      types: ['(cities)'],
      componentRestrictions: {
        country: 'aus'
      }
    })
    this.$refs['input-item'].focus()
    this.autocomplete.addListener('place_changed', this.onPlaceSelected)
  },
  methods: {
    onPlaceSelected () {
      const placeComponents = this.autocomplete.getPlace().address_components
      if (!placeComponents) return
      const place = {
        suburb: placeComponents.find(item => item.types[0] === 'locality').short_name,
        state: placeComponents.find(item => item.types[0] === 'administrative_area_level_1').short_name,
        postCode: placeComponents.find(item => item.types[0] === 'postal_code').short_name
      }
      this.$emit('placeChanged', place)
    },
    onEnter (e) {
      if (document.querySelector('.pac-container').style.display !== 'none') {
        e.preventDefault()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.base-field-place {
  width: 540px;
  height: 560px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.input-item {
  background: var(--color-white);
  font-weight: var(--font-weight-regular);
  border-top-left-radius: var(--border-radius-3);
  border-top-right-radius: var(--border-radius-3);
  background: var(--color-light-gray-2);
  padding: var(--spacing-2-5) var(--spacing-2);
  line-height: normal;
  font-size: 18px;
  width: 100%;
}
.results-container {
  height: 100%;
  background: white;
  border-bottom-left-radius: var(--border-radius-3);
  border-bottom-right-radius: var(--border-radius-3);
}
</style>

<style lang="scss">
.pac-container {
  font-family: var(--font-1);
  box-shadow: none;
  padding-top: var(--spacing-4);
  border-radius: 0;
  border: none;
}
.pac-item {
  border-top: none;
  line-height: inherit;
  padding: var(--spacing-2-5) var(--spacing-2);
  display: flex;
  align-items: center;
  margin: 0 -1px;
  cursor: pointer;
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
  background-color: var(--color-light-gray-1);
}
.pac-item span {
  font-size: 14px !important;
  font-weight: 400 !important;
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
  color: var(--color-black);
  font-weight: 400 !important;
  font-size: 14px !important;
}
.pac-item-query .pac-matched {
  color: var(--color-black);
  font-weight: 400 !important;
  font-size: 14px !important;
}
</style>
