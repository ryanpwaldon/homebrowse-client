<template>
  <div class="base-field-input">
    <label v-if="label">{{ label }}</label>
    <input
      @input="$emit('input', $event.target.value)"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
      :required="required"
      :value="value"
      :type="type">
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: false
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: true
    },
    value: {
      type: String,
      required: true
    },
    autocomplete: {
      type: String,
      required: false
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
  background: var(--color-white-1);
  border-radius: var(--border-radius-2);
  font-weight: var(--font-weight-regular);
  padding: var(--spacing-4);
  transition: border-color 120ms ease-in 0s;
  border: var(--border-1);
  line-height: normal;
  font-size: 14px;
}
input:focus {
  border-color: var(--color-black-2);
}
</style>
