<template>
  <div class="base-field-select-stretch">
    <div class="label">{{ label }}</div>
    <select
      class="select"
      :value="selected"
      @input="$emit('select', $event.target.value)">
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
.base-field-select-stretch {
  width: 100%;
  position: relative;
  * {
    font-weight: var(--font-weight-medium);
    font-size: 14px;
  }
}
.label {
  color: var(--color-gray);
}
.select {
  position: absolute;
  top: calc(-1 * var(--button-hover-padding-vertical));
  left: calc(-1 * var(--button-hover-padding-horizontal));
  width: calc(100% + var(--button-hover-padding-horizontal) * 2);
  height: calc(100% + var(--button-hover-padding-vertical) * 2);
  padding-right: var(--button-hover-padding-horizontal);
  transition: background-color 120ms ease-in-out 0s;
  background: var(--color-transparent);
  border-radius: var(--border-radius-3);
  text-align-last: right;
  line-height: 1.6em;
  content: '';
}
.select:hover {
  background: var(--color-light-gray-5);
}
</style>
