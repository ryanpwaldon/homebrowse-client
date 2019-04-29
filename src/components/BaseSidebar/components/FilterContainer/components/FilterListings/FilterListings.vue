<template>
  <div class="filter-listings">
    <BaseFieldSelectStretch
      label="Listing type"
      @select="updateFilter({ property: 'listings.listingType', value: $event })"
      :selected="listingType"
      :options="[
        { value: 'buy', display: 'Buy' },
        { value: 'rent', display: 'Rent' },
        { value: 'sold', display: 'Sold' }
      ]"
    />
    <BaseFieldSelectStretch
      label="Bedrooms"
      @select="updateFilter({ property: 'listings.bedrooms', value: $event })"
      :selected="bedrooms"
      :options="[
        { value: '', display: 'All' },
        { value: '1', display: '1' },
        { value: '2', display: '2' },
        { value: '3', display: '3' },
        { value: '4', display: '4' },
        { value: '5+', display: '5+' }
      ]"
    />
    <BaseFieldSelectStretch
      label="Bathrooms"
      @select="updateFilter({ property: 'listings.bathrooms', value: $event })"
      :selected="bathrooms"
      :options="[
        { value: '', display: 'All' },
        { value: '0', display: '0' },
        { value: '1', display: '1' },
        { value: '2', display: '2' },
        { value: '3', display: '3' },
        { value: '4', display: '4' },
        { value: '5+', display: '5+' }
      ]"
    />
    <BaseFieldSelectStretch
      label="Carspaces"
      @select="updateFilter({ property: 'listings.carspaces', value: $event })"
      :selected="carspaces"
      :options="[
        { value: '', display: 'All' },
        { value: '0', display: '0' },
        { value: '1', display: '1' },
        { value: '2', display: '2' },
        { value: '3', display: '3' },
        { value: '4', display: '4' },
        { value: '5+', display: '5+' }
      ]"
    />
  </div>
</template>

<script>
import BaseFieldSelectStretch from '@/components/BaseFieldSelectStretch/BaseFieldSelectStretch'
import { mapState } from 'vuex'
export default {
  components: {
    BaseFieldSelectStretch
  },
  computed: mapState('filterModule', {
    listingType: state => state.listings.listingType,
    bedrooms: state => state.listings.bedrooms,
    bathrooms: state => state.listings.bathrooms,
    carspaces: state => state.listings.carspaces
  }),
  methods: {
    updateFilter ({ property, value }) {
      this.$store.dispatch('filterModule/updateFilter', { property, value })
    }
  }
}
</script>
