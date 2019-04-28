<template>
  <div class="base-nav-secondary">
    <BaseButtonNav
      text="Properties"
      link="/app/properties"
    />
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
.base-nav-secondary {
  display: flex;
  margin: 0 auto;
  position: relative;
  padding: var(--spacing-2) 0;
  justify-content: space-between;
  width: calc(100% - 2 * var(--spacing-1));
  border-bottom: solid 1px var(--color-light-gray-2);
}
</style>
