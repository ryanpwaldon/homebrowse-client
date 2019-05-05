<template>
  <div class="dashboard-sidebar-filter">
    <BaseLabel text="Filter"/>
    <component :is="filter"></component>
  </div>
</template>

<script>
import BaseLabel from '@/components/BaseLabel/BaseLabel'
import DashboardSidebarFilterProperties from './components/DashboardSidebarFilterProperties/DashboardSidebarFilterProperties'
import DashboardSidebarFilterStatistics from './components/DashboardSidebarFilterStatistics/DashboardSidebarFilterStatistics'
export default {
  components: {
    BaseLabel,
    DashboardSidebarFilterProperties,
    DashboardSidebarFilterStatistics
  },
  computed: {
    filter () {
      switch (this.$store.state.global.filterState) {
        case 'properties': return DashboardSidebarFilterProperties
        case 'statistics': return DashboardSidebarFilterStatistics
        default: return DashboardSidebarFilterProperties
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.base-label {
  margin-bottom: var(--spacing-2);
}
</style>
