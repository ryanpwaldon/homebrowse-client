<template>
  <div class="base-nav" ref="base-nav">
    <div class="section left">
      <BaseLogo/>
    </div>
    <div class="section right">
      <BaseProfile/>
    </div>
  </div>
</template>

<script>
import BaseLogo from '@/components/BaseLogo/BaseLogo'
import BaseProfile from '@/components/BaseProfile/BaseProfile'
export default {
  components: {
    BaseLogo,
    BaseProfile
  }
}
</script>

<style lang="scss" scoped>
.base-nav {
  width: 100%;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.section {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: var(--spacing-1);
}
</style>
