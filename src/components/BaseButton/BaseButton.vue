<template>
  <div :class="{'base-button': true, 'selected': selected, 'icon-last': iconLast}">
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
    },
    iconLast: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.base-button {
  cursor: pointer;
  position: relative;
  display: inline-block;
  color: var(--color-gray);
  z-index: 0;
  font-size: 14px;
  font-weight: var(--font-weight-medium);
  display: flex;
  transition: color 120ms ease-in-out 0s;
}
.base-button.icon-last {
  flex-direction: row-reverse;
}
.base-button::before {
  box-sizing: content-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% + 14px);
  height: calc(100% + 10px);
  border-radius: var(--border-radius-3);
  transition: opacity 120ms ease-in-out 0s;
  background: var(--color-light-gray-3);
  opacity: 0;
  z-index: -1;
  content: '';
  cursor: pointer;
}
.base-button:hover::before {
  opacity: 0.6;
}
.base-button.selected {
  color: var(--color-black);
}
.icon {
  height: 1em;
}
.spacer {
  height: 1em;
  width: var(--spacing-3-5);
}
</style>
