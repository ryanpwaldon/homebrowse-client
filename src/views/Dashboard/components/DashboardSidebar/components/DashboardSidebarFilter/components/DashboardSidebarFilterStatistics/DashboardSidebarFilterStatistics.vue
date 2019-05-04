<template>
  <div class="dashboard-sidebar-filter-statistics">
    <BaseFieldSelectStretch
      label="Property type"
      @select="updateFilter({ property: 'statistics.propertyCategory', value: $event })"
      :selected="propertyCategory"
      :options="[
        { value: 'house', display: 'House' },
        { value: 'unit', display: 'Unit' },
        { value: 'land', display: 'Land' }
      ]"
    />
    <BaseFieldSelectStretch
      label="Bedrooms"
      @select="updateFilter({ property: 'statistics.bedrooms', value: $event })"
      :selected="bedrooms"
      :options="[
        { value: '', display: 'All' },
        { value: '0', display: '0' },
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
import { mapState } from 'vuex'
export default {
  components: {
    BaseFieldSelectStretch
  },
  computed: mapState('filterModule', {
    propertyCategory: state => state.statistics.propertyCategory,
    bedrooms: state => state.statistics.bedrooms
  }),
  methods: {
    updateFilter ({ property, value }) {
      this.$store.dispatch('filterModule/updateFilter', { property, value })
    }
  }
}
</script>
