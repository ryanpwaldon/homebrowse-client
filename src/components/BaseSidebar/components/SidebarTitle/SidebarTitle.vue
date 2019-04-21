<template>
  <div class="sidebar-title">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-title {
  font-size: 12px;
  color: var(--color-gray);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  padding: var(--spacing-3-5) var(--spacing-2);
  margin-bottom: var(--spacing-3-5);
}
</style>
