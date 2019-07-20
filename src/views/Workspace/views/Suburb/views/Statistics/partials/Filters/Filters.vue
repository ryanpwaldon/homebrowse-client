<template>
  <div class="filters">
    <BaseLabel text="Filters"/>
    <div class="items">
      <BaseFieldSelect
        @select="$store.dispatch('entities/statistics/updateRootFilter', { key: 'propertyCategory', value: $event })"
        :selected="propertyCategory"
        :options="[
          { value: 'house', display: 'Houses' },
          { value: 'unit', display: 'Units' },
          { value: 'land', display: 'Land' }
        ]"
      />
      <BaseFieldSelect
        :icon="require('@/assets/img/bed.svg')"
        @select="$store.dispatch('entities/statistics/updateRootFilter', { key: 'bedrooms', value: $event })"
        :selected="bedrooms"
        :options="[
          { value: '', display: 'All', hidden: true },
          { value: '1', display: '1' },
          { value: '2', display: '2' },
          { value: '3', display: '3' },
          { value: '4', display: '4' },
          { value: '5', display: '5' }
        ]"
      />
    </div>
  </div>
</template>

<script>
import BaseLabel from '@/components/BaseLabel/BaseLabel'
import BaseFieldSelect from '@/components/BaseFieldSelect/BaseFieldSelect'
import { mapState } from 'vuex'
export default {
  components: {
    BaseLabel,
    BaseFieldSelect
  },
  computed: mapState('entities/statistics', {
    propertyCategory: state => state.rootFilter.propertyCategory,
    bedrooms: state => state.rootFilter.bedrooms
  })
}
</script>

<style lang="scss" scoped>
.filters {
  margin-bottom: var(--spacing-1);
}
.base-label {
  margin-bottom: var(--spacing-2);
}
.items {
  display: flex;
}
.base-field-select {
  margin-right: var(--spacing-4);
}
</style>
