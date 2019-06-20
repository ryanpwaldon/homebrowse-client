<template>
  <div class="dashboard-sidebar-filter" v-if="selectedSuburb">
    <BaseDivider/>
    <BaseLabel text="Filter"/>
    <component :is="filter"></component>
  </div>
</template>

<script>
import BaseLabel from '@/components/BaseLabel/BaseLabel'
import DashboardSidebarFilterProperties from './components/DashboardSidebarFilterProperties/DashboardSidebarFilterProperties'
import DashboardSidebarFilterStatistics from './components/DashboardSidebarFilterStatistics/DashboardSidebarFilterStatistics'
import BaseDivider from '@/components/BaseDivider/BaseDivider'
import { mapGetters, mapState } from 'vuex'
export default {
  components: {
    BaseLabel,
    DashboardSidebarFilterProperties,
    DashboardSidebarFilterStatistics,
    BaseDivider
  },
  computed: {
    ...mapState('ui', [
      'suburbRouteLastVisitedTabName'
    ]),
    ...mapGetters('suburbs', [
      'selectedSuburb'
    ]),
    filter () {
      switch (this.suburbRouteLastVisitedTabName) {
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
