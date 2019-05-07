<template>
  <div class="dashboard-sidebar-filter-statistics">
    <BaseFieldSelectStretch
      label="Property type"
      @select="updateFilter({ key: 'propertyCategory', value: $event })"
      :selected="propertyCategory"
      :options="[
        { value: 'house', display: 'House' },
        { value: 'unit', display: 'Unit' },
        { value: 'land', display: 'Land' }
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
        { value: '5', display: '5' }
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
  computed: mapState('suburbs/statistics', {
    propertyCategory: state => state.filter.propertyCategory,
    bedrooms: state => state.filter.bedrooms
  }),
  methods: mapActions('suburbs/statistics', [
    'updateFilter'
  ])
}
</script>
