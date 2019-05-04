<template>
  <div class="base-nav-primary">
    <div class="section logo">
      <BaseLogo/>
    </div>
    <div class="section">
      <BaseButtonNav
        text="Properties"
        link="/app/properties"
      />
      <BaseButtonNav
        text="Statistics"
        link="/app/statistics"
      />
    </div>
    <div class="section">
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
  justify-content: flex-start;
  padding: var(--spacing-2);
  border-bottom: solid 1px var(--color-light-gray-2);
}
.section {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: var(--spacing-2);
}
.base-logo {
  width: calc(240px - var(--spacing-2));
  flex-shrink: 0;
  flex-grow: 0;
}
.section:nth-child(2) {
  margin-left: calc(var(--spacing-1) - var(--spacing-3));
  margin-right: auto;
}
.base-button-nav {
  position: relative;
}
.router-link-active::after {
  content: '';
  position: absolute;
  bottom: calc(-1 * var(--spacing-2));
  left: 0;
  height: 1px;
  background: var(--color-black);
  width: 100%;
}
</style>
