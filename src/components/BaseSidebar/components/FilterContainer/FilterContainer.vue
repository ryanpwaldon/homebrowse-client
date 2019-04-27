<template>
  <div class="suburbs-container">
    <SidebarTitle text="Filter"/>
    <SidebarFieldSelect
      label="Listing type"
      @select="updateFilter({ property: 'listingType', value: $event })"
      :selected="listingType"
      :options="[
        { value: 'buy', display: 'Buy' },
        { value: 'rent', display: 'Rent' },
        { value: 'sold', display: 'Sold' }
      ]"
    />
    <SidebarFieldSelect
      label="Bedrooms"
      @select="updateFilter({ property: 'bedrooms', value: $event })"
      :selected="bedrooms"
      :options="[
        { value: '', display: 'Any' },
        { value: '1', display: '1' },
        { value: '2', display: '2' },
        { value: '3', display: '3' },
        { value: '4', display: '4' },
        { value: '5+', display: '5+' }
      ]"
    />
    <SidebarFieldSelect
      label="Bathrooms"
      @select="updateFilter({ property: 'bathrooms', value: $event })"
      :selected="bathrooms"
      :options="[
        { value: '', display: 'Any' },
        { value: '0', display: '0' },
        { value: '1', display: '1' },
        { value: '2', display: '2' },
        { value: '3', display: '3' },
        { value: '4', display: '4' },
        { value: '5+', display: '5+' }
      ]"
    />
    <SidebarFieldSelect
      label="Car spaces"
      @select="updateFilter({ property: 'carspaces', value: $event })"
      :selected="carspaces"
      :options="[
        { value: '', display: 'Any' },
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
import SidebarTitle from '@/components/BaseSidebar/components/SidebarTitle/SidebarTitle'
import SidebarFieldSelect from '@/components/BaseSidebar/components/SidebarFieldSelect/SidebarFieldSelect'
import { mapState } from 'vuex'
export default {
  components: {
    SidebarTitle,
    SidebarFieldSelect
  },
  computed: mapState('filterModule', [
    'listingType',
    'bedrooms',
    'bathrooms',
    'carspaces'
  ]),
  methods: {
    updateFilter ({ property, value }) {
      this.$store.commit('filterModule/updateFilter', { property, value })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
