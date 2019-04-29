<template>
  <div
    class="base-button"
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
.base-button {
  position: relative;
  color: var(--color-gray);
  font-weight: var(--font-weight-medium);
  transition: color 120ms ease-in-out 0s, background-color 120ms ease-in-out 0s;
  padding: var(--button-hover-padding-vertical) var(--button-hover-padding-horizontal);
  background: var(--color-transparent);
  border-radius: var(--border-radius-3);
  font-size: 14px;
  display: flex;
  cursor: pointer;
}
.base-button.selected {
  color: var(--color-black);
}
.base-button:hover {
  background: var(--color-light-gray-5);
}
.icon {
  height: 1em;
  margin-right: var(--spacing-3-5);
}
</style>
