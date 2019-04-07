<template>
  <input
    class="base-field-place"
    ref="base-field-place"
    :placeholder="placeholder"
    @keydown.enter="onEnter"
    type="text"
  >
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
  background: var(--color-white);
  border-radius: var(--border-radius-1);
  font-weight: var(--font-weight-semibold);
  box-shadow: var(--box-shadow-1);
  padding: var(--spacing-2);
  font-size: 18px;
  line-height: normal;
}
</style>

<style lang="scss">
.pac-container {
  font-family: var(--font-1);
  box-shadow: var(--box-shadow-1) !important;
  border-radius: 5px !important;
  margin-top: var(--spacing-3);
  border: none;
}
.pac-item {
  border-top: none;
  line-height: inherit;
  padding: 20px;
  height: 50px;
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
  background-color: var(--color-lighter-gray);
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
  color: var(--color-medium-gray);
  font-weight: 300 !important;
  font-size: 16px !important;
}
.pac-item-query .pac-matched {
  color: var(--color-medium-gray);
  font-weight: 300 !important;
  font-size: 16px !important;
}
</style>
