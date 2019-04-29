<template>
  <div class="filter-container">
    <SidebarTitle text="Filter"/>
    <component :is="filter"></component>
  </div>
</template>

<script>
import SidebarTitle from '@/components/BaseSidebar/components/SidebarTitle/SidebarTitle'
import FilterListings from './components/FilterListings/FilterListings'
import FilterStatistics from './components/FilterStatistics/FilterStatistics'
export default {
  components: {
    SidebarTitle,
    FilterListings,
    FilterStatistics
  },
  computed: {
    filter () {
      switch (this.$store.state.globalModule.filterState) {
        case 'properties': return FilterListings
        case 'statistics': return FilterStatistics
        default: return FilterListings
      }
    }
  }
}
</script>
