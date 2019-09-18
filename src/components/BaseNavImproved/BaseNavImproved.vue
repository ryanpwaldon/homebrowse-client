<template>
  <div class="base-nav">
    <div class="content">
      <div class="section-left">
        <slot name="section-left"/>
      </div>
      <div class="section-right">
        <slot name="section-right"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.base-nav {
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: var(--border-1);
  padding: var(--spacing-2) var(--spacing-1);
  background: var(--color-white-1);
}
.content {
  width: 100%;
  max-width: 60rem;
  display: flex;
  justify-content: space-between;
}
</style>
