<template>
  <div class="base-nav-primary">
    <div class="section">
      <BaseLogo/>
      <BaseButtonNav
        text="Workspace"
        link="/workspace"
      />
    </div>
    <div class="section">
      <BaseButtonNav
        text="Logout"
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
  justify-content: space-between;
  border-bottom: var(--border-1);
  padding: var(--spacing-2) var(--spacing-1);
}
.section {
  display: grid;
  grid-auto-flow: column;
  grid-gap: var(--spacing-2);
  align-items: center;
}
</style>
