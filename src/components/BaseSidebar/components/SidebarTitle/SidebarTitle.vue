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
  font-size: 14px;
  color: var(--color-gray);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-2);
}
</style>
