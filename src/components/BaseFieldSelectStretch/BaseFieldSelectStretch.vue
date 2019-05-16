<template>
  <div class="base-field-select-stretch">
    <div class="label">
      <div class="text">{{ label }}</div>
      <img class="expand-icon" src="@/assets/img/expand.svg" v-if="selected === ''">
    </div>
    <select
      class="select"
      :value="selected"
      @input="$emit('select', $event.target.value)"
      :class="{ 'hidden-text': selected === '' }"
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
    label: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  font-weight: var(--font-weight-medium);
  font-size: 14px;
}
.base-field-select-stretch {
  width: 100%;
  position: relative;
  margin-bottom: var(--spacing-4);
  z-index: 1;
}
.label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-gray-1);
  pointer-events: none;
  z-index: 0;
  .expand-icon {
    height: 0.9em;
  }
}
.select {
  position: absolute;
  width: calc(100% + var(--spacing-4) * 2);
  height: calc(100% + var(--spacing-5) * 2);
  top: calc(-1 * var(--spacing-5));
  left: calc(-1 * var(--spacing-4));
  background: var(--color-transparent);
  transition: background-color 120ms ease-in-out;
  color: var(--color-black-2);
  border-radius: var(--border-radius-2);
  padding: 0 var(--spacing-4);
  text-align-last: right;
  z-index: -1;
  cursor: pointer;
  &.hidden-text {
    color: var(--color-transparent);
  }
  &:hover {
    background: var(--color-hover);
  }
}
</style>
