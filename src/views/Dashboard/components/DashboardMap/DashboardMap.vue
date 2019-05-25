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
  padding: var(--spacing-1);
  position: sticky;
  height: 100%;
  top: 0;
}
</style>
