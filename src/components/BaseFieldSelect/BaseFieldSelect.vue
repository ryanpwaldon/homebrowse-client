<template>
  <select
    class="base-field-select"
    :value="selected"
    @input="$emit('select', $event.target.value)">
    <option
      v-for="(option, index) in options"
      :value="option.value"
      :key="index">
      {{ option.display }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
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
  background: var(--color-white);
  border-radius: var(--border-radius-1);
  font-weight: var(--font-weight-semibold);
  box-shadow: var(--box-shadow-1);
  padding: var(--spacing-2);
  color: var(--color-gray);
  font-size: 16px;
  line-height: normal;
  text-align-last: center;
  cursor: pointer;
}
</style>
