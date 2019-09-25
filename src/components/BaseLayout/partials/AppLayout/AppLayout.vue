<template>
  <div class="app-layout">
    <div class="container" v-if="$mq === 'large'">
      <BaseNavPrimary/>
      <slot/>
    </div>
    <BaseDisabledForMobile v-else/>
  </div>
</template>

<script>
import BaseNavPrimary from '@/components/BaseNavPrimary/BaseNavPrimary'
import BaseDisabledForMobile from '@/components/BaseDisabledForMobile/BaseDisabledForMobile'
export default {
  components: {
    BaseNavPrimary,
    BaseDisabledForMobile
  }
}
</script>

<style lang="scss" scoped>
.app-layout {
  position: relative;
  width: 100%;
  height: 100%;
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-width: 1028px;
  min-height: 600px;
}
</style>
