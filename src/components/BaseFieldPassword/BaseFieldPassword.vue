<template>
  <div class="base-field-password">
    <label v-if="label">{{ label }}</label>
    <input
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      :required="required"
      type="password"
      :value="value">
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
label {
  font-size: 14px;
  margin-bottom: var(--spacing-5);
  color: var(--color-black-2);
  display: block;
}
input {
  width: 100%;
  background: var(--color-white);
  border-radius: var(--border-radius-3);
  font-weight: var(--font-weight-regular);
  border: solid 1px var(--color-light-gray-4);
  padding: var(--spacing-4) var(--spacing-5);
  transition: border-color 120ms ease-in 0s;
  line-height: normal;
  font-size: 14px;
}
input:focus {
  border-color: var(--color-black-2);
}
</style>
