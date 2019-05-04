<template>
  <div
    class="base-button"
    :class="{ selected }">
    <div class="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.base-button {
  color: var(--color-gray-1);
  font-weight: var(--font-weight-medium);
  transition: color 120ms ease-in-out;
  font-size: 14px;
  cursor: pointer;
}
.base-button.selected {
  color: var(--color-black);
}
</style>
