<template>
  <div
    class="base-button-stretch"
    :class="{ selected }">
    <img v-if="icon" class="icon" :src="icon">
    <div v-if="icon" class="spacer"/>
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
    },
    icon: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.base-button-stretch {
  position: relative;
  display: inline-block;
  color: var(--color-gray);
  font-weight: var(--font-weight-medium);
  transition: color 120ms ease-in-out 0s;
  font-size: 14px;
  display: flex;
  z-index: 0;
  cursor: pointer;
}
.icon {
  height: 1em;
  margin-right: var(--spacing-3-5);
}
.base-button-stretch.selected {
  color: var(--color-black);
}
.base-button-stretch::before {
  position: absolute;
  top: calc(-1 * var(--button-hover-padding-vertical));
  left: calc(-1 * var(--button-hover-padding-horizontal));
  width: calc(100% + var(--button-hover-padding-horizontal) * 2);
  height: calc(100% + var(--button-hover-padding-vertical) * 2);
  transition: opacity 120ms ease-in-out 0s;
  border-radius: var(--border-radius-3);
  background: var(--color-light-gray-5);
  content: '';
  opacity: 0;
  z-index: -1;
}
.base-button-stretch:hover::before {
  opacity: 1;
}
</style>
