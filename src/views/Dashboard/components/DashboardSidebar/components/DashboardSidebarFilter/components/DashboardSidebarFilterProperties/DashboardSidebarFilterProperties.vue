<template>
  <div class="dashboard-sidebar-filter-properties">
    <BaseFieldSelectStretch
      label="Status"
      @select="updateFilter({ key: 'propertyType', value: $event })"
      :selected="propertyType"
      :options="[
        { value: 'buy', display: 'For sale' },
        { value: 'rent', display: 'For rent' },
        { value: 'sold', display: 'Sold' }
      ]"
    />
    <BaseFieldSelectStretch
      label="Bedrooms"
      @select="updateFilter({ key: 'bedrooms', value: $event })"
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
      @select="updateFilter({ key: 'bathrooms', value: $event })"
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
      @select="updateFilter({ key: 'carspaces', value: $event })"
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
    <BaseFieldSelectStretch
      label="Sort by"
      @select="updateFilter({ key: 'sortKey', value: $event })"
      :selected="sortKey"
      :options="[
        { value: 'updated', display: 'Updated' },
        { value: 'price', display: 'Price' }
      ]"
    />
    <BaseFieldSelectStretch
      label="Sort direction"
      @select="updateFilter({ key: 'sortDirection', value: $event })"
      :selected="sortDirection"
      :options="[
        { value: 'ascending', display: 'Asc' },
        { value: 'descending', display: 'Desc' }
      ]"
    />
  </div>
</template>

<script>
import BaseFieldSelectStretch from '@/components/BaseFieldSelectStretch/BaseFieldSelectStretch'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    BaseFieldSelectStretch
  },
  computed: mapState('suburbs/properties', {
    propertyType: state => state.filter.propertyType,
    bedrooms: state => state.filter.bedrooms,
    bathrooms: state => state.filter.bathrooms,
    carspaces: state => state.filter.carspaces,
    sortKey: state => state.filter.sortKey,
    sortDirection: state => state.filter.sortDirection
  }),
  methods: mapActions('suburbs/properties', [
    'updateFilter'
  ])
}
</script>
