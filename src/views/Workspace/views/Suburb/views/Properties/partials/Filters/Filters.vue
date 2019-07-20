<template>
  <div class="filters">
    <div class="filters-container">
      <BaseLabel text="Filters"/>
      <div class="items">
        <BaseFieldSelect
          @select="$store.dispatch('entities/properties/updateRootFilter', { key: 'listingType', value: $event })"
          :selected="listingType"
          :options="[
            { value: 'buy', display: 'For sale' },
            { value: 'rent', display: 'For rent' },
            { value: 'sold', display: 'Sold' }
          ]"
        />
        <BaseFieldSelect
          :icon="require('@/assets/img/bed.svg')"
          @select="$store.dispatch('entities/properties/updateRootFilter', { key: 'bedrooms', value: $event })"
          :selected="bedrooms"
          :options="[
            { value: '', display: 'All', hidden: true },
            { value: '0', display: '0' },
            { value: '1', display: '1' },
            { value: '2', display: '2' },
            { value: '3', display: '3' },
            { value: '4', display: '4' },
            { value: '5+', display: '5+' }
          ]"
        />
        <BaseFieldSelect
          :icon="require('@/assets/img/bath.svg')"
          @select="$store.dispatch('entities/properties/updateRootFilter', { key: 'bathrooms', value: $event })"
          :selected="bathrooms"
          :options="[
            { value: '', display: 'All', hidden: true },
            { value: '0', display: '0' },
            { value: '1', display: '1' },
            { value: '2', display: '2' },
            { value: '3', display: '3' },
            { value: '4', display: '4' },
            { value: '5+', display: '5+' }
          ]"
        />
        <BaseFieldSelect
          :icon="require('@/assets/img/car.svg')"
          @select="$store.dispatch('entities/properties/updateRootFilter', { key: 'carspaces', value: $event })"
          :selected="carspaces"
          :options="[
            { value: '', display: 'All', hidden: true },
            { value: '0', display: '0' },
            { value: '1', display: '1' },
            { value: '2', display: '2' },
            { value: '3', display: '3' },
            { value: '4', display: '4' },
            { value: '5+', display: '5+' }
          ]"
        />
      </div>
    </div>
    <div class="sort-container">
      <BaseLabel text="Sort"/>
      <div class="items">
        <BaseFieldSelect
          label="Sort"
          @select="$store.dispatch('entities/properties/updateRootFilter', { key: 'sort', value: $event })"
          :selected="sort"
          :options="[
            { value: 'updatedDescending', display: 'Updated recently' },
            { value: 'priceAscending', display: 'Price low to high' },
            { value: 'priceDescending', display: 'Price high to low' }
          ]"
        />
      </div>
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
  computed: mapState('entities/properties', {
    listingType: state => state.rootFilter.listingType,
    bedrooms: state => state.rootFilter.bedrooms,
    bathrooms: state => state.rootFilter.bathrooms,
    carspaces: state => state.rootFilter.carspaces,
    sort: state => state.rootFilter.sort
  })
}
</script>

<style lang="scss" scoped>
.filters {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-1);
}
.filters-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .base-field-select {
    margin-right: var(--spacing-4);
  }
}
.sort-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.base-label {
  margin-bottom: var(--spacing-2);
}
.items {
  display: flex;
}
</style>
