<template>
  <div class="base-nav-primary">
    <div class="section left">
      <BaseLogo/>
    </div>
    <div class="section right">
      <BaseButtonNav
        text="Login"
        link="/login"
      />
    </div>
  </div>
</template>

<script>
import BaseLogo from '@/components/BaseLogo/BaseLogo'
import BaseButtonNav from '@/components/BaseButtonNav/BaseButtonNav'
export default {
  components: {
    BaseLogo,
    BaseButtonNav
  }
}
</script>

<style lang="scss" scoped>
.base-nav-primary {
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: var(--spacing-2);
  border-bottom: solid 1px var(--color-light-gray-2);
}
.section {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: var(--spacing-2);
}
</style>
