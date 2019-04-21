<template>
  <div class="base-nav" ref="base-nav">
    <div class="section left">
      <BaseButtonNav
        text="Properties"
        link="/properties"
      />
      <BaseButtonNav
        text="Statistics"
        link="/statistics"
      />
      <BaseButtonNav
        text="Lifestyle"
        link="/lifestyle"
      />
    </div>
    <div class="section right">
      <BaseButtonNav
        text="Premium"
        link="/premium"
        :icon="require('@/assets/img/lock.svg')"
        :icon-last="true"
      />
    </div>
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
.base-nav {
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
