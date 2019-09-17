<template>
  <div class="base-field-select">
    <div class="label">
      <img class="icon" :src="icon" v-if="icon">
      <div class="text" v-if="displayText">{{ displayText }}</div>
      <img class="expand-icon" src="@/assets/img/expand-vertical.svg">
    </div>
    <select
      class="select"
      :value="selected"
      @input="$emit('select', $event.target.value)"
      >
      <option
        v-for="(option, index) in options"
        :value="option.value"
        :key="index">
        {{ option.display }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: false
    },
    options: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
      required: true
    }
  },
  computed: {
    displayText () {
      const selected = this.options.find(item => item.value === this.selected)
      return selected.hidden ? false : selected.display
    }
  }
}
</script>

<style lang="scss" scoped>
.base-field-select {
  position: relative
}
.label {
  display: flex;
  align-items: center;
  color: var(--color-black-2);
  font-weight: var(--font-weight-medium);
  font-size: 14px;
  height: calc(var(--spacing-5) * 2 + 1em);
  padding: 0 var(--spacing-4);
  background: var(--color-white-1);
  border-radius: var(--border-radius-2);
  box-shadow: var(--box-shadow-1);
  white-space: nowrap;
  .icon {
    height: 1.3em;
    margin-right: var(--spacing-5);
  }
  .text {
    margin-right: var(--spacing-5);
  }
  .expand-icon {
    height: 0.9em;
  }
}
.select {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transition: background-color 120ms ease-in-out;
  border-radius: var(--border-radius-2);
  color: var(--color-transparent);
  padding: 0 var(--spacing-4);
  cursor: pointer;
  z-index: 1;
  &:hover { background: var(--color-hover) }
}
</style>
