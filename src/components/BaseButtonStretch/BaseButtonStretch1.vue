<template>
  <div
    class="base-button-stretch"
    :class="{ selected }">
    <div class="text">{{ text }}</div>
    <div class="icon-container">
      <img class="icon" src="@/assets/img/dots.svg"/>
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
.base-button-stretch {
  position: relative;
  color: var(--color-gray);
  font-weight: var(--font-weight-medium);
  transition: color 120ms ease-in-out 0s, background-color 120ms ease-in-out 0s;
  padding: var(--button-hover-padding-vertical) var(--button-hover-padding-horizontal);
  background: var(--color-transparent);
  border-radius: var(--border-radius-3);
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.base-button-stretch.selected {
  color: var(--color-black);
}
.base-button-stretch:hover {
  background: var(--color-light-gray-5);
}
.icon-container {
  height: 1em;
  width: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 120ms ease-in-out 0s;
  border-radius: var(--border-radius-4);
  position: relative;
  &:hover {
    background: var(--color-hover);
  }
}
.icon {
  width: 70%;
  height: 70%;
}
</style>
