<template>
  <div class="base-badge">
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
.base-badge {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: calc(100% + var(--spacing-4));
  border-radius: var(--border-radius-3);
  background: var(--color-blue-1);
  color: var(--color-white-1);
  text-transform: uppercase;
  padding: 2px 4px;
  font-size: 10px;
  pointer-events: none;
}
</style>
