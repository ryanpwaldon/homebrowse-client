<template>
  <div class="dashboard-sidebar-filter-properties">
    <BaseFieldSelectStretch
      label="Status"
      @select="updateFilter({ property: 'properties.propertyType', value: $event })"
      :selected="propertyType"
      :options="[
        { value: 'buy', display: 'For sale' },
        { value: 'rent', display: 'For rent' },
        { value: 'sold', display: 'Sold' }
      ]"
    />
    <BaseFieldSelectStretch
      label="Bedrooms"
      @select="updateFilter({ property: 'properties.bedrooms', value: $event })"
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
      @select="updateFilter({ property: 'properties.bathrooms', value: $event })"
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
      @select="updateFilter({ property: 'properties.carspaces', value: $event })"
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
    propertyType: state => state.properties.propertyType,
    bedrooms: state => state.properties.bedrooms,
    bathrooms: state => state.properties.bathrooms,
    carspaces: state => state.properties.carspaces
  }),
  methods: {
    updateFilter ({ property, value }) {
      this.$store.dispatch('filterModule/updateFilterProperties', { property, value })
    }
  }
}
</script>
