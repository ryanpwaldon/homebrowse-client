<template>
  <div class="suburbs-container">
    <SidebarTitle text="Filter"/>
    <SidebarFieldSelect
      label="Listing type"
      selected="buy"
      :options="[
        { value: 'buy', display: 'Buy' },
        { value: 'rent', display: 'Rent' },
        { value: 'sold', display: 'Sold' }
      ]"
    />
    <SidebarFieldSelect
      label="Property type"
      selected="all"
      :options="[
        { value: 'all', display: 'All' },
        { value: 'house', display: 'House' },
        { value: 'unit', display: 'Unit' },
        { value: 'land', display: 'Land' }
      ]"
    />
  </div>
</template>

<script>
import SidebarTitle from '@/components/BaseSidebar/components/SidebarTitle/SidebarTitle'
import SidebarFieldSelect from '@/components/BaseSidebar/components/SidebarFieldSelect/SidebarFieldSelect'
export default {
  components: {
    SidebarTitle,
    SidebarFieldSelect
  },
  methods: {
    updateFilter ({ property, value }) {
      this.$store.commit('updateFilter', { property, value })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
