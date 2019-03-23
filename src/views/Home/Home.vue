<template>
  <div class="home">
    <DualHorizontalLayout
      :a="() => import('@/components/BaseSidebar/BaseSidebar')"
      :b="() => import('@/components/BaseMap/BaseMap')"
    />
  </div>
</template>

<script>
import DualHorizontalLayout from '@/layouts/DualHorizontalLayout/DualHorizontalLayout'
export default {
  name: 'home',
  components: {
    DualHorizontalLayout
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
