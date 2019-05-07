<template>
  <div class="dashboard-sidebar">
    <DashboardSidebarSuburbs/>
    <DashboardSidebarFilter/>
  </div>
</template>

<script>
import DashboardSidebarSuburbs from './components/DashboardSidebarSuburbs/DashboardSidebarSuburbs'
import DashboardSidebarFilter from './components/DashboardSidebarFilter/DashboardSidebarFilter'
export default {
  components: {
    DashboardSidebarSuburbs,
    DashboardSidebarFilter
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
