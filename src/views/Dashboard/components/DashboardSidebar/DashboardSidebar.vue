<template>
  <div class="dashboard-sidebar">
    <DashboardSidebarSuburbs/>
    <BaseDivider/>
    <DashboardSidebarFilter/>
  </div>
</template>

<script>
import DashboardSidebarSuburbs from './components/DashboardSidebarSuburbs/DashboardSidebarSuburbs'
import DashboardSidebarFilter from './components/DashboardSidebarFilter/DashboardSidebarFilter'
import BaseDivider from '@/components/BaseDivider/BaseDivider'
export default {
  components: {
    DashboardSidebarSuburbs,
    DashboardSidebarFilter,
    BaseDivider
  }
}
</script>

<style lang="scss" scoped>
.dashboard-sidebar {
  height: 100%;
  padding: var(--spacing-1) var(--spacing-2) var(--spacing-2);
  background: var(--color-gray-5);
}
</style>
