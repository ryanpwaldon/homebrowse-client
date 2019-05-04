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
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
}
.base-nav-primary {
  flex-shrink: 0;
  flex-grow: 0;
}
</style>
