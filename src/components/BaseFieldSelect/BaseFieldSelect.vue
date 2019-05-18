<template>
  <div class="base-field-select">
    <div class="label">
      {{ options.find(item => item.value === selected).display }}
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
.base-field-select {
  position: relative
}
.label {
  display: flex;
  align-items: center;
  color: var(--color-black-2);
  font-weight: var(--font-weight-medium);
  font-size: 14px;
  .expand-icon {
    height: 0.9em;
    margin-left: var(--spacing-5);
  }
}
.select {
  position: absolute;
  width: calc(100% + var(--spacing-4) * 2);
  height: calc(100% + var(--spacing-5) * 2);
  top: calc(-1 * var(--spacing-5));
  left: calc(-1 * var(--spacing-4));
  transition: background-color 120ms ease-in-out;
  border-radius: var(--border-radius-2);
  color: var(--color-transparent);
  padding: 0 var(--spacing-4);
  cursor: pointer;
  z-index: 1;
  &:hover { background: var(--color-hover) }
}
</style>
