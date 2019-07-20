<template>
  <div class="map">
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
.map {
  padding: var(--spacing-1) var(--spacing-1) var(--spacing-1) 0;
  position: sticky;
  height: 100%;
  top: 0;
}
</style>
