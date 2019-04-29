<template>
  <div class="filter-statistics">
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
    propertyCategory: state => state.statistics.propertyCategory
  }),
  methods: {
    updateFilter ({ property, value }) {
      this.$store.dispatch('filterModule/updateFilter', { property, value })
    }
  }
}
</script>
