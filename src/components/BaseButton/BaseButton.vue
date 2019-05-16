<template>
  <div
    class="base-button"
    :class="{ selected }">
    <div class="text">{{ text }}</div>
    <div class="options">
      <slot/>
    </div>
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
  position: relative;
  font-size: 14px;
  cursor: pointer;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.base-button.selected {
  color: var(--color-black-2);
}
.base-button::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: calc(-1 * var(--spacing-5));
  left: calc(-1 * var(--spacing-4));
  padding: var(--spacing-5) var(--spacing-4);
  border-radius: var(--border-radius-2);
  transition: background-color 120ms ease-in-out;
  z-index: -1;
}
.base-button:hover {
  &::before { background: var(--color-hover) }
  .options { opacity: 1 }
}

.options {
  transition: opacity 120ms ease-in-out;
  opacity: 0;
}
</style>
