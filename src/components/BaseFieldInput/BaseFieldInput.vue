<template>
  <input
    class="base-field-input"
    ref="base-field-input"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event.target.value)"
    type="text">
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.base-field-input {
  background: var(--color-white);
  border-radius: var(--border-radius-1);
  font-weight: var(--font-weight-bold);
  box-shadow: var(--box-shadow-1);
  padding: var(--spacing-2);
  font-size: 18px;
  line-height: normal;
}
</style>
