<template>
  <div :class="{'sidebar-button': true, 'selected': selected}">
    <img v-if="icon" class="icon" :src="icon">
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
.sidebar-button {
  width: 100%;
  font-size: 14px;
  color: var(--color-gray);
  font-weight: var(--font-weight-medium);
  transition: background 120ms ease-in 0s;
  padding: var(--spacing-4) var(--spacing-2);
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 0;
}
.icon {
  height: 1em;
  margin-right: var(--spacing-3-5);
}
.sidebar-button:hover {
  background: var(--color-hover);
}
.sidebar-button .text {
  transition: color 120ms ease-in 0s, border-color 120ms ease-in 0s;
  border-bottom: solid 1px var(--color-transparent);
}
.sidebar-button.selected .text {
  color: var(--color-black);
  font-weight: var(--font-weight-medium);
  text-decoration: underline;
}
</style>
