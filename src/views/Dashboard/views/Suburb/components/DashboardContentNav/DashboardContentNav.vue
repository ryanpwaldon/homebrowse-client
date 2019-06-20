<template>
  <div class="dashboard-content-nav">
    <BaseButtonNav
      text="Properties"
      link="/dashboard/suburb/properties"
    />
    <BaseButtonNav
      text="Statistics"
      link="/dashboard/suburb/statistics"
    />
  </div>
</template>

<script>
import BaseButtonNav from '@/components/BaseButtonNav/BaseButtonNav'
export default {
  components: {
    BaseButtonNav
  }
}
</script>

<style lang="scss" scoped>
.dashboard-content-nav {
  display: flex;
  border-bottom: var(--border-1);
  padding-bottom: var(--spacing-2);
  margin-bottom: var(--spacing-1);
}
.base-button-nav {
  margin-right: var(--spacing-2);
}
</style>
