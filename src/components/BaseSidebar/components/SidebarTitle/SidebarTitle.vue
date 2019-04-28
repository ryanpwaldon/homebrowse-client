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
  padding: var(--button-hover-padding-vertical) var(--button-hover-padding-horizontal);
  margin-bottom: var(--spacing-3);
}
</style>
