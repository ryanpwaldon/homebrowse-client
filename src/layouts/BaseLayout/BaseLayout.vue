<template>
  <div class="base-layout">
    <BaseNavPrimary/>
    <slot/>
  </div>
</template>

<script>
import BaseNavPrimary from '@/components/BaseNavPrimary/BaseNavPrimary'
export default {
  components: {
    BaseNavPrimary
  }
}
</script>

<style lang="scss" scoped>
.base-layout {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: min-content minmax(0, 1fr);
}
</style>
