<template>
  <div class="dashboard-map">
    <BaseMap/>
  </div>
</template>

<script>
import BaseMap from '@/components/BaseMap/BaseMap'
export default {
  components: {
    BaseMap
  }
}
</script>

<style lang="scss" scoped>
.dashboard-map {
  padding: var(--spacing-1) var(--spacing-1) var(--spacing-1) 0;
}
</style>
